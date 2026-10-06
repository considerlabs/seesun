export const church = {
  name: "시선교회",
  nameEn: "SEE SUN CHURCH",
  tagline: "도시 안에 복음, 복음이 세우는 공동체, 공동체가 섬기는 도시",
  denomination: "대한예수교장로회",
  founded: "2025년 11월 2일",
  city: "경기도 안양시",
  address: "경기 안양시 만안구 병목안로 6, 백우현진빌딩 4층",
  phone: "070-8800-7712",
  email: "",
  parent: "시광교회",
  instagram: "https://www.instagram.com/seesun_church",
  youtube: "https://www.youtube.com/@seesunchurch",
  mapUrl:
    "https://map.naver.com/p/search/%EC%8B%9C%EC%84%A0%EA%B5%90%ED%9A%8C?c=15.26,0,0,0,dh",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=%EA%B2%BD%EA%B8%B0+%EC%95%88%EC%96%91%EC%8B%9C+%EB%A7%8C%EC%95%88%EA%B5%AC+%EB%B3%91%EB%AA%A9%EC%95%88%EB%A1%9C+6+%EB%B0%B1%EC%9A%B0%ED%98%84%EC%A7%84%EB%B9%8C%EB%94%A9&hl=ko&z=16&output=embed",
};

export const serviceTimes = [
  { name: "주일오전예배", time: "11:00~12:30" },
  { name: "주일오후예배", time: "14:00~15:00" },
  { name: "금요기도회", time: "20:30~22:00" },
];

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navigation: NavItem[] = [
  {
    label: "시선교회 소개",
    href: "/about",
    children: [
      { label: "교회 소개", href: "/about" },
      { label: "신앙고백", href: "/creed" },
      { label: "복음의 내용", href: "/gospel" },
      { label: "섬기는 사람들", href: "/staff" },
      { label: "시선집", href: "/magazine" },
    ],
  },
  {
    label: "말씀",
    href: "/sermons",
    children: [
      { label: "설교", href: "/sermons" },
      { label: "공지사항", href: "/notices" },
    ],
  },
  { label: "개척이야기", href: "/planting" },
  { label: "도시사역", href: "/city" },
  { label: "교육", href: "/education" },
  { label: "주일학교 안내", href: "/sunday-school" },
];

export const staff = [
  {
    name: "박현진 목사",
    role: "담임목사",
    image: "/img/park.jpg",
    bio: "자주 누더기를 입고, 때 묻고, 경멸당하고, 핍박 받는 아내를 있는 모습 그대로 사랑하시는 신랑, 하지만 결국 '거룩하고 책망할 것 없는 자'로 만드시는 신랑을 보는 것이 가장 큰 즐거움입니다. 그리스도께서 이 아름다운 일을 지금까지 해오셨고, 앞으로도 그러실 것이라는 확신 가운데 2025년 11월 안양시에 시선교회를 개척했습니다. 아내와 두 아들과 함께 안양에 살고 있습니다.",
  },
  {
    name: "오로라 전도사",
    role: "전도사",
    image: "/img/oh.png",
    imageClassName: "scale-90",
    imageBg: "#eeeeee",
    bio: "제 인생의 이야기가 끝이라고 여겨질 때에, 그리스도께서 먼저 다가와주셨습니다. 그리고 하나님의 이야기가 아직 끝나지 않았음을 알려주셨습니다. 그 이야기의 주인공은 제가 아니라 예수 그리스도셨습니다. 그렇게 하나님께 가까이하는 것이 가장 큰 복임을 믿으며 주의 능하신 일과 주의 나라의 위엄의 영광을 알리는 것이 저에게 큰 기쁨이요 즐거움이 되었습니다. 여러분을 향한 하나님의 이야기도 아직 끝나지 않았습니다.",
  },
];

// 최신순. 새 설교는 각 그룹 맨 위에 추가 (출처: youtube.com/@seesunchurch)
export const sermons = [
  { youtubeId: "AI_UWJS26Ss", category: "주일오전예배", series: "로마서 강해 #24", title: "끊을 수 없는 하나님의 사랑", preacher: "박현진 목사", date: "2026.10.04" },
  { youtubeId: "LIgh79LJfiM", category: "주일오전예배", series: "단편설교", title: "자기연민의 늪", preacher: "박현진 목사", date: "2026.09.27" },
  { youtubeId: "NJATITUWUws", category: "주일오전예배", series: "단편설교", title: "바리새인에게 분노하는 바리새인", preacher: "박현진 목사", date: "2026.09.20" },
  { youtubeId: "zJkhHNSko3Y", category: "주일오전예배", series: "로마서 강해 #23", title: "구원, 영원 전부터 영원까지", preacher: "박현진 목사", date: "2026.09.13" },
  { youtubeId: "pxEGEjHDLBQ", category: "주일오전예배", series: "로마서 강해 #22", title: "그리스도인들의 행복", preacher: "박현진 목사", date: "2026.09.06" },
  { youtubeId: "Xf0L1eAaFzA", category: "주일오전예배", series: "단편설교", title: "내 양을 먹이라", preacher: "이정규 목사", date: "2026.08.30" },
  { youtubeId: "p2nSHAus85s", category: "주일오전예배", series: "단편설교", title: "길을 찾는 당신에게", preacher: "박현진 목사", date: "2026.08.16" },
  { youtubeId: "c4POeA0jMpo", category: "주일오전예배", series: "로마서 강해 #21", title: "탄식의 세상에서 소망을 품다", preacher: "박현진 목사", date: "2026.08.09" },
  { youtubeId: "2eNLiud8lK8", category: "주일오전예배", series: "로마서 강해 #20", title: "성령 하나님이 주시는 확신", preacher: "박현진 목사", date: "2026.08.02" },
  { youtubeId: "gGHwDf7Q-34", category: "주일오전예배", series: "로마서 강해 #19", title: "두 종류의 사람", preacher: "박현진 목사", date: "2026.07.26" },
  { youtubeId: "9kO-HlcGFyM", category: "주일오전예배", series: "로마서 강해 #18", title: "성령 하나님이 주시는 자유", preacher: "박현진 목사", date: "2026.07.19" },
  { youtubeId: "Vl7s6bNa-f4", category: "주일오전예배", series: "로마서 강해 #17", title: "보이지 않는 전쟁", preacher: "박현진 목사", date: "2026.07.12" },
  { youtubeId: "uMU20wEhlsU", category: "주일오전예배", series: "로마서 강해 #16", title: "새로운 결혼과 새로운 삶", preacher: "박현진 목사", date: "2026.07.05" },
  { youtubeId: "_5UQCDU77tA", category: "주일오전예배", series: "단편설교", title: "두려움을 다루는 방법", preacher: "박현진 목사", date: "2026.06.28" },
  { youtubeId: "K6CJrpNmqd4", category: "주일오전예배", series: "로마서 강해 #15", title: "당신은 누구의 종인가?", preacher: "박현진 목사", date: "2026.06.21" },
  { youtubeId: "w0GsZqof7X4", category: "주일오전예배", series: "단편설교", title: "바로 지금!", preacher: "박현진 목사", date: "2026.06.14" },
  { youtubeId: "FxwwxtrKh_U", category: "금요기도회", series: "하나님의 성품 #7", title: "전능하신 하나님", preacher: "박현진 목사", date: "2026.10.02" },
  { youtubeId: "I4rbMT2T7DY", category: "금요기도회", series: "하나님의 성품 #5", title: "가까이 계시지만 멀리계신 하나님", preacher: "박현진 목사", date: "2026.09.18" },
  { youtubeId: "585MVKBhk6M", category: "금요기도회", series: "하나님의 성품 #4", title: "삼위 하나님께 둘러싸여 살다", preacher: "박현진 목사", date: "2026.09.11" },
  { youtubeId: "qoqigERa4V0", category: "금요기도회", series: "하나님의 성품 #4", title: "하나님은 사랑이시다", preacher: "박현진 목사", date: "2026.09.04" },
  { youtubeId: "K7lQEa-df4k", category: "금요기도회", series: "하나님의 성품", title: "의존하는 인간에게 찾아오신 자존하신 하나님", preacher: "박현진 목사", date: "2026.08.14" },
  { youtubeId: "Abxq3XAgC_Y", category: "금요기도회", series: "", title: "실천적 무신론자, 하나님을 만나다", preacher: "박현진 목사", date: "2026.08.07" },
  { youtubeId: "201QlfzqYOM", category: "금요기도회", series: "", title: "사역의 방해가 아닌 사역의 중심", preacher: "박현진 목사", date: "2026.07.31" },
  { youtubeId: "zFuxQLQAMfA", category: "금요기도회", series: "", title: "하나님을 하나님으로 알 수 있을까?", preacher: "박현진 목사", date: "2026.07.24" },
  { youtubeId: "fReEvcjLp50", category: "금요기도회", series: "", title: "말 사용법", preacher: "박현진 목사", date: "2026.07.03" },
  { youtubeId: "VvU80Ma5bl8", category: "금요기도회", series: "", title: "우리는 기도하고 하나님은 응답하신다", preacher: "오로라 전도사", date: "2026.06.26" },
  { youtubeId: "vCAOLO_zNmE", category: "금요기도회", series: "", title: "하나님의 것으로 인정하는 자유", preacher: "박현진 목사", date: "2026.06.19" },
  { youtubeId: "EAITvcx9_pQ", category: "금요기도회", series: "", title: "감각적 사랑에서 언약적 사랑으로", preacher: "박현진 목사", date: "2026.06.12" },
  { youtubeId: "8k-nHLp_uTU", category: "금요기도회", series: "단편설교", title: "답이 없어도 된다는 믿음", preacher: "박현진 목사", date: "2026.05.29" },
  { youtubeId: "aRpFZuIJaCI", category: "금요기도회", series: "", title: "갈망, 이해되지 않는 현실에서의 찬양", preacher: "박현진 목사", date: "2026.05.01" },
  { youtubeId: "6ANxn8_AX2g", category: "금요기도회", series: "예수님의 이름으로 하는 주기도문 #1", title: "하늘에 계신 우리 아버지", preacher: "박현진 목사", date: "2025.11.07" },
];

export const sermonCategories = ["주일오전예배", "금요기도회"] as const;

export const sundaySchool = [
  {
    name: "유치부",
    ages: "4세~7세",
    schedule: [
      { time: "11:00~12:00", activity: "유치부 예배" },
      { time: "14:00~15:00", activity: "유치부 돌봄" },
    ],
  },
  {
    name: "초등부",
    ages: "8~13세",
    schedule: [
      { time: "11:00~12:00", activity: "초등부 활동" },
      { time: "14:00~15:00", activity: "초등부 예배" },
    ],
  },
];

export const education = [
  {
    name: "새가족교육",
    schedule: "6주 과정",
    description:
      "기본적인 성경의 가르침(교리)를 배우고, 교회의 문화와 교제를 익히는 교육 과정입니다.",
  },
  {
    name: "리더교육",
    schedule: "매월 1회",
    description:
      "교회의 비전을 공유하고, 복음적인 문화를 만들기 위해 리더를 교육하는 시간입니다.",
  },
  {
    name: "제자훈련",
    schedule: "내년부터 실행 예정",
    description:
      "소그룹 리더 양성교육 프로그램입니다. 이 훈련 프로그램을 통해 복음이 삶에서 어떻게 적용되는지 자세히 배우고, 훈련하는 시간을 보냅니다. 무엇보다 훈련생끼리 사랑과 섬김을 나눕니다.",
  },
  {
    name: "시선아카데미",
    schedule: "매 시기 필요에 따라",
    description:
      "성경의 다양한 주제와 교리들을 살피고, 일상생활에 필요한 삶의 주제들(예를 들면 결혼, 세례)로 교육을 하는 시간입니다.",
  },
];

export const plantingVideos = [
  {
    episode: "Ep.1",
    title: "선, 시선교회 개척의 시작, 그 꿈과 마음",
    youtubeId: "KoJqnu3m-YE",
  },
  {
    episode: "Ep.2",
    title: "선, 마음의 연결, 개척 준비의 과정",
    youtubeId: "6gKAAR3MNNE",
  },
  {
    episode: "Ep.3",
    title: "면, 교회의 형태, 서로와 도시를 담는 공동체",
    youtubeId: "SygPnm2yb0Q",
  },
];
