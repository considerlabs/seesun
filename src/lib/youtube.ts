import { unstable_cache } from "next/cache";
import { sermonCategories, sermons as fallbackSermons } from "@/lib/content";

export type Sermon = (typeof fallbackSermons)[number];
type Category = (typeof sermonCategories)[number];

// 시선교회 채널(UCGRh8XBdvOQAqWiWvfC4BDA)의 업로드 재생목록
const UPLOADS_PLAYLIST_ID = "UUGRh8XBdvOQAqWiWvfC4BDA";
const MAX_PAGES = 4; // 50개씩, 최근 200개까지

type PlaylistItem = {
  snippet: { title: string; resourceId: { videoId: string } };
  contentDetails: { videoPublishedAt?: string };
};

const toDateString = (d: Date) => d.toISOString().slice(0, 10).replaceAll("-", ".");

// 업로드일(KST) 당일 또는 직전 일요일
function previousSunday(publishedAt: string) {
  const kst = new Date(new Date(publishedAt).getTime() + 9 * 3600 * 1000);
  kst.setUTCDate(kst.getUTCDate() - kst.getUTCDay());
  return toDateString(kst);
}

// 제목 형식: "주일오전예배 | 로마서 강해#24 | 제목 | 박현진 목사 | 시선교회 (2026.10.04)"
// 2026년 6월 이전 주일 설교는 접두어 없이 "로마서 강해#14 | ..." / "주일 시리즈 설교 | ..." 형식
export function parseSermonTitle(raw: string, publishedAt?: string): Omit<Sermon, "youtubeId"> | null {
  if (/오후|가정예배|개척/.test(raw)) return null;

  const prefixed = sermonCategories.find((c: Category) => raw.replace(/\s/g, "").startsWith(c));
  const parts = raw.split(/[|│ㅣ]/).map((p) => p.trim()).filter(Boolean);
  if (prefixed) parts.shift();

  const dateMatch = raw.match(/(\d{4})\.\s*(\d{1,2})\.\s*(\d{1,2})/);
  const titleDate = dateMatch
    ? toDateString(new Date(Date.UTC(+dateMatch[1], +dateMatch[2] - 1, +dateMatch[3])))
    : null;

  const rest = parts.filter((p) => !p.startsWith("시선교회"));
  const preacherIdx = rest.findIndex((p) => /(목사|전도사)$/.test(p));
  const preacher = preacherIdx >= 0 ? rest.splice(preacherIdx, 1)[0] : "";

  // 접두어 없는 영상: 목사 설교 + (일요일 설교일 또는 "주일 시리즈") 이면 주일오전예배.
  // 같은 주일의 전도사 설교는 오후예배이므로 제외된다.
  const isSunday = titleDate ? new Date(titleDate.replaceAll(".", "-")).getUTCDay() === 0 : false;
  const category =
    prefixed ?? (preacher.endsWith("목사") && (isSunday || raw.includes("주일")) ? "주일오전예배" : null);
  if (!category) return null;

  const date =
    titleDate ??
    (publishedAt
      ? category === "주일오전예배"
        ? previousSunday(publishedAt)
        : toDateString(new Date(new Date(publishedAt).getTime() + 9 * 3600 * 1000))
      : "");

  const title = rest.pop() ?? raw;
  const series = rest
    .map((p) => p.replace(/^주일\s*시리즈\s*설교\s*#?/, "").trim())
    .filter(Boolean)
    .join(" · ")
    .replace(/\s*#\s*/, " #");

  return { category, series, title, preacher, date };
}

async function fetchSermons(): Promise<Sermon[]> {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) return fallbackSermons;

  try {
    const items: PlaylistItem[] = [];
    let pageToken = "";
    for (let i = 0; i < MAX_PAGES; i++) {
      const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
      url.search = new URLSearchParams({
        part: "snippet,contentDetails",
        playlistId: UPLOADS_PLAYLIST_ID,
        maxResults: "50",
        key,
        ...(pageToken ? { pageToken } : {}),
      }).toString();
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) throw new Error(`YouTube API ${res.status}: ${await res.text()}`);
      const data: { items: PlaylistItem[]; nextPageToken?: string } = await res.json();
      items.push(...data.items);
      if (!data.nextPageToken) break;
      pageToken = data.nextPageToken;
    }

    const parsed = items.flatMap((item) => {
      const meta = parseSermonTitle(item.snippet.title, item.contentDetails.videoPublishedAt);
      return meta ? [{ youtubeId: item.snippet.resourceId.videoId, ...meta }] : [];
    });
    // 한 구분이라도 비면 페이지가 깨지므로 정적 목록 사용
    if (sermonCategories.some((c) => !parsed.some((s) => s.category === c))) return fallbackSermons;
    return parsed.sort((a, b) => b.date.localeCompare(a.date));
  } catch (error) {
    console.error("[youtube] 설교 목록 조회 실패, 정적 목록으로 대체", error);
    return fallbackSermons;
  }
}

export const getSermons = unstable_cache(fetchSermons, ["youtube-sermons"], { revalidate: 3600 });
