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
    ],
  },
  { label: "개척이야기", href: "/planting" },
  { label: "도시사역", href: "/city" },
  {
    label: "말씀",
    href: "/sermons",
    children: [
      { label: "설교", href: "/sermons" },
      { label: "공지사항", href: "/notices" },
      { label: "월간지", href: "/magazine" },
    ],
  },
  {
    label: "공동체",
    href: "/sunday-school",
    children: [{ label: "주일학교", href: "/sunday-school" }],
  },
];

export const staff = [
  {
    name: "박현진 목사",
    role: "담임목사",
    image: "/img/park.png",
    bio: "자주 누더기를 입고, 때 묻고, 경멸당하고, 핍박 받는 아내를 있는 모습 그대로 사랑하시는 신랑, 하지만 결국 '거룩하고 책망할 것 없는 자'로 만드시는 신랑을 보는 것이 가장 큰 즐거움입니다. 그리스도께서 이 아름다운 일을 지금까지 해오셨고, 앞으로도 그러실 것이라는 확신 가운데 2025년 11월 안양시에 시선교회를 개척했습니다. 아내와 두 아들과 함께 안양에 살고 있습니다.",
  },
  {
    name: "오로라 전도사",
    role: "전도사",
    image: "/img/oh.png",
    bio: "제 인생의 이야기가 끝이라고 여겨질 때에, 그리스도께서 먼저 다가와주셨습니다. 그리고 하나님의 이야기가 아직 끝나지 않았음을 알려주셨습니다. 그 이야기의 주인공은 제가 아니라 예수 그리스도셨습니다. 그렇게 하나님께 가까이하는 것이 가장 큰 복임을 믿으며 주의 능하신 일과 주의 나라의 위엄의 영광을 알리는 것이 저에게 큰 기쁨이요 즐거움이 되었습니다. 여러분을 향한 하나님의 이야기도 아직 끝나지 않았습니다.",
  },
];

export const notices = [
  {
    id: "1",
    title: "시선교회 개척 예배 안내",
    date: "2025.11.02",
    summary: "안양시에 시선교회가 개척되었습니다. 도시 안에 복음을 전하는 공동체로 함께해 주세요.",
  },
  {
    id: "2",
    title: "주일학교 예배 시간 안내",
    date: "2025.11.09",
    summary: "유치부와 초등부 예배 및 활동 시간을 안내드립니다.",
  },
  {
    id: "3",
    title: "첫 방문자를 위한 안내",
    date: "2025.11.16",
    summary: "새가족팀이 환영 준비를 하고 있습니다. 조용히 예배만 드리고 싶으신 분도 편하게 말씀해 주세요.",
  },
];

export const sermons = [
  {
    id: "1",
    title: "주일 오전 설교",
    category: "주일 오전",
    date: "준비 중",
    preacher: "박현진 목사",
  },
  {
    id: "2",
    title: "금요기도회 설교",
    category: "금요기도회",
    date: "준비 중",
    preacher: "박현진 목사",
  },
];

export const sundaySchool = [
  {
    name: "유치부",
    ages: "4세~7세",
    schedule: [
      { time: "11:00~12:00", activity: "유치부 예배" },
      { time: "14:00~15:00", activity: "유치부 활동" },
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
