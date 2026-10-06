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

// 제목 형식: "주일오전예배 | 로마서 강해#24 | 제목 | 박현진 목사 | 시선교회 (2026.10.04)"
export function parseSermonTitle(raw: string, publishedAt?: string): Omit<Sermon, "youtubeId"> | null {
  const category = sermonCategories.find((c: Category) => raw.replace(/\s/g, "").startsWith(c));
  if (!category) return null;

  const parts = raw.split(/[|│ㅣ]/).map((p) => p.trim()).filter(Boolean).slice(1);
  const dateMatch = raw.match(/(\d{4})\.\s*(\d{1,2})\.\s*(\d{1,2})/);
  const date = dateMatch
    ? `${dateMatch[1]}.${dateMatch[2].padStart(2, "0")}.${dateMatch[3].padStart(2, "0")}`
    : publishedAt
      ? new Date(publishedAt).toLocaleDateString("sv-SE", { timeZone: "Asia/Seoul" }).replaceAll("-", ".")
      : "";

  const rest = parts.filter((p) => !p.startsWith("시선교회"));
  const preacherIdx = rest.findIndex((p) => /(목사|전도사)$/.test(p));
  const preacher = preacherIdx >= 0 ? rest.splice(preacherIdx, 1)[0] : "";
  const title = rest.pop() ?? raw;
  const series = rest.join(" · ").replace(/\s*#\s*/, " #");

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
