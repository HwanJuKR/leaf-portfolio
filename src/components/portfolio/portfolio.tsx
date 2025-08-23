import Image from "next/image";
import Link from "next/link";
import styles from "./portfolio.module.scss";

interface PortfolioItem {
  category: "frontend" | "publishing";
  src?: string;
  title: string;
  period: string;
  link?: string;
  stack: string[];
  summary: string[];
}

export default function Portfolio(): JSX.Element {
  const FE: PortfolioItem[] = [
    {
      category: "frontend",
      src: "/img/img-map.png",
      title: "NOL - 해외지도 개편",
      period: "2025/05 ~ 2025/06",
      link: "https://nol.yanolja.com/results?keyword=%EC%98%A4%EC%82%AC%EC%B9%B4&category=global&pageKey=1753250282069",
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "Jotai",
        "NestJS",
      ],
      summary: [
        "검색 결과 페이지 내 지도 UI를 개편하여 글로벌 숙소 탐색 동선을 최적화",
        "TanStack Query + Jotai로 지도 상태와 숙소 데이터 동기화 로직 구현",
        "렌더링 지연을 해소하고 로딩 속도를 단축하여 UX 향상",
      ],
    },
    {
      category: "frontend",
      src: "/img/img-rebranding.png",
      title: "NOL - 리브랜딩",
      period: "2025/03 ~ 2025/04",
      link: "https://nol.yanolja.com/",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      summary: [
        "NOL 서비스 리브랜딩 프로젝트에서 프론트엔드 개발 전반에 참여",
        "Tailwind CSS 활용해 디자인 시스템을 컴포넌트화하고 일관성 확보",
        "컴포넌트 재사용률 향상으로 개발 생산성 증가 기여",
      ],
    },
    {
      category: "frontend",
      src: "/img/img-mypage.png",
      title: "인터파크 티켓 - 마이페이지 모바일 홈 개편",
      period: "2024/12 ~ 2025/01",
      link: "https://tickets.interpark.com/contents/myPage",
      stack: ["Next.js", "TypeScript", "SCSS", "SWR", "Spring"],
      summary: [
        "마이페이지 핵심 기능(NOL포인트, 예매내역, 활동내역)을 컴포넌트화하여 재사용성과 UI 일관성을 확보",
        "상태 관리 최적화 및 컴포넌트 구조 개선을 통해 유지보수 효율과 기능 확장성 향상",
      ],
    },
    {
      category: "frontend",
      title: "인터파크 티켓 - 키오스크 개편",
      period: "2024/10 ~ 2024/11",
      link: "",
      stack: ["EJS", "SCSS", "JavaScript"],
      summary: [
        "현장 키오스크 환경에 맞게 터치 기반 UI를 최적화",
        "다양한 해상도에 대응하는 반응형 구조 적용",
        "터치 인터랙션에 최적화된 이벤트 처리 및 애니메이션 구현",
      ],
    },
    {
      category: "frontend",
      title: "인터파크 티켓 - 위버스 팬 인증 연동 예매 시스템 구축",
      period: "2024/05 ~ 2024/06",
      link: "",
      stack: ["Next.js", "TypeScript", "JavaScript", "Spring"],
      summary: [
        "Weverse 연동을 통한 팬 인증 기반 티켓 예매 기능 신규 구축",
        "인증 토큰 처리 및 조건 분기 로직 구현",
        "예매 과정의 안정성을 확보하고 불법 예매를 차단하여 팬 경험 강화",
      ],
    },
    {
      category: "frontend",
      src: "/img/img-bridge.png",
      title: "인터파크 티켓 - 브릿지 페이지 개편",
      period: "2024/03 ~ 2024/04",
      link: "https://tickets.interpark.com/contents/bridge/25003151",
      stack: ["Next.js", "TypeScript", "SCSS", "SWR", "Spring"],
      summary: [
        "공연 상세 진입 전 브릿지 페이지 UI/UX 개선을 주도",
        "반응형 레이아웃과 로딩 속도 최적화 작업 수행",
      ],
    },
    {
      category: "frontend",
      src: "/img/img-genre.png",
      title: "인터파크 티켓 - 대장르 개편",
      period: "2023/12 ~ 2024/02",
      link: "https://tickets.interpark.com/contents/genre/musical",
      stack: ["Next.js", "TypeScript", "SCSS", "SWR", "Spring", "Cypress"],
      summary: [
        "뮤지컬, 콘서트 등 장르별 공연 리스트 UI를 컴포넌트 구조로 재설계",
        "캐러셀, 탭 등 주요 인터랙션을 모듈화하고 성능을 최적화",
        "Cypress E2E 테스트를 도입해 주요 기능 안정성을 확보",
      ],
    },
    {
      category: "frontend",
      title: "Good Fran",
      period: "2018/01 ~ 2018/12",
      stack: ["Vue.js", "PWA", "HTML", "CSS", "JavaScript"],
      summary: ["PWA 기반 웹뷰 앱 개발"],
    },
  ];
  const UI: PortfolioItem[] = [
    {
      category: "publishing",
      src: "/img/img-mdshop.png",
      title: "MDShop 개편",
      period: "2024/07 ~ 2024/08",
      link: "https://nolmdshop.com/",
      stack: ["Cafe24", "CSS", "JavaScript"],
      summary: ["카페24 기본 템플릿을 커스터마이징하여 UI 개선"],
    },
    {
      category: "publishing",
      src: "/img/img-air.png",
      title: "인터파크 투어 - 항공 모바일 개편",
      period: "2023/06 ~ 2023/07",
      link: "https://travel.interpark.com/air",
      stack: ["EJS", "SCSS", "JavaScript"],
      summary: ["모바일 환경에 최적화된 항공권 검색 및 스케쥴 UI 개선"],
    },
    {
      category: "publishing",
      src: "/img/img-domestic.png",
      title: "인터파크 투어 - 국내숙소 메인 개편",
      period: "2023/04 ~ 2023/05",
      link: "https://travel.interpark.com/checkinnow",
      stack: ["EJS", "SCSS", "JavaScript"],
      summary: ["메인 비주얼 개편 및 컨텐츠 구조 개선"],
    },
    {
      category: "publishing",
      src: "/img/img-package.png",
      title: "인터파크 투어 - 패키지 메인 개편",
      period: "2022/10 ~ 2023/01",
      link: "https://travel.interpark.com/tour/main/domestic",
      stack: ["EJS", "SCSS", "JavaScript"],
      summary: ["레거시 서비스 개편 및 UI/UX 개선"],
    },
    {
      category: "publishing",
      src: "/img/img-coexartium.png",
      title: "코엑스 아티움",
      period: "2021.01 ~ 2021.10",
      link: "https://www.coexartium.co.kr/",
      stack: ["EJS", "SCSS", "JavaScript"],
      summary: [
        "코엑스 아티움 신규 웹서비스 구축 퍼블리싱 담당",
        "EJS 템플릿 기반 구조 설계 및 모듈화 진행",
        "다양한 브라우저 환경에서 크로스브라우징 최적화",
      ],
    },
    {
      category: "publishing",
      src: "/img/img-music.png",
      title: "KBS 뮤직관",
      period: "2021.01 ~ 2021.03",
      link: "https://music.kbs.co.kr/",
      stack: ["HTML", "CSS", "JavaScript", "jQuery"],
      summary: ["KBS 신규 서비스 뮤직관 웹사이트 퍼블리싱 담당"],
    },
    {
      category: "publishing",
      src: "/img/img-kbs.png",
      title: "KBS 메인",
      period: "2020.10 ~ 2021.01",
      link: "https://www.kbs.co.kr/",
      stack: ["HTML", "SCSS", "JavaScript", "jQuery"],
      summary: [
        "KBS 메인페이지 개편 퍼블리싱 담당",
        "다크모드 기능 추가 및 접근성 개선 반영",
      ],
    },
    {
      category: "publishing",
      src: "/img/img-star.png",
      title: "KBS 스타연예",
      period: "2020.09 ~ 2020.10",
      link: "https://kstar.kbs.co.kr/",
      stack: ["HTML", "CSS", "JavaScript", "jQuery"],
      summary: ["KBS 신규 서비스 스타연예 웹사이트 퍼블리싱 담당"],
    },
    {
      category: "publishing",
      src: "/img/img-about.png",
      title: "KBS 웹 접근성 프로젝트",
      period: "2019.09 ~ 2020.01",
      link: "https://about.kbs.co.kr/",
      stack: ["HTML", "CSS", "JavaScript", "jQuery"],
      summary: [
        "KBS 소개 페이지의 웹접근성 인증마크 획득",
        "2020년 KBS 전체 웹 서비스 웹 접근성 준수율 98.6% 달성",
      ],
    },
  ];

  return (
    <>
      <h2>Portfolio</h2>
      <div className={styles.badge}>Frontend</div>
      <ul className={styles.grid}>
        {FE.map((item, index) => (
          <li key={index} className={styles.card}>
            <Link
              className={styles.link}
              href={item.link || "#"}
              target={item.link ? "_blank" : "_self"}
              title={item.link ? "새 창으로 열림" : ""}
              rel="noopener noreferrer"
            >
              <div className={styles.imageWrap}>
                {item.src ? (
                  <>
                    <Image
                      className={styles.image}
                      src={item.src}
                      alt=""
                      fill
                      priority
                    />
                    {item.link && (
                      <div className={styles.overlay}>
                        <span className={styles.viewProject}>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15,3 21,3 21,9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                          자세히 보기
                        </span>
                      </div>
                    )}
                  </>
                ) : (
                  <div className={styles.noImage}></div>
                )}
              </div>
              <div className={styles.content}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.info}>
                  <div className={styles.period}>{item.period}</div>
                  <div className={styles.stack}>{item.stack.join(" / ")}</div>
                </div>
                <div className={styles.summary}>
                  {item.summary.map((summary, index) => (
                    <p key={index}>{summary}</p>
                  ))}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.badge}>Publishing</div>
      <ul className={styles.grid}>
        {UI.map((item, index) => (
          <li key={index} className={styles.card}>
            <Link
              className={styles.link}
              href={item.link || "#"}
              target={item.link ? "_blank" : "_self"}
              title={item.link ? "새 창으로 열림" : ""}
              rel="noopener noreferrer"
            >
              <div className={styles.imageWrap}>
                {item.src ? (
                  <>
                    <Image
                      className={styles.image}
                      src={item.src}
                      alt=""
                      fill
                      priority
                    />
                    {item.link && (
                      <div className={styles.overlay}>
                        <span className={styles.viewProject}>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15,3 21,3 21,9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                          자세히 보기
                        </span>
                      </div>
                    )}
                  </>
                ) : (
                  <div className={styles.noImage}></div>
                )}
              </div>
              <div className={styles.content}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.info}>
                  <div className={styles.period}>{item.period}</div>
                  <div className={styles.stack}>{item.stack.join(" / ")}</div>
                </div>
                <div className={styles.summary}>
                  {item.summary.map((summary, index) => (
                    <p key={index}>{summary}</p>
                  ))}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
