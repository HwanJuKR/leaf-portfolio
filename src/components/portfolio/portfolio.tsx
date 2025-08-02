import Image from "next/image";
import Link from "next/link";
import styles from "./portfolio.module.scss";

interface PortfolioItem {
  src?: string;
  title: string;
  period: string;
  link: string;
  stack: string;
  summary: {
    text1: string;
    text2?: string;
  };
}

export default function Portfolio(): JSX.Element {
  const FE: PortfolioItem[] = [
    {
      src: "/portfolio/img-map.png",
      title: "NOL - 해외지도 개편",
      period: "2025/05 ~ 2025/06",
      link: "https://nol.yanolja.com/results?keyword=%EC%98%A4%EC%82%AC%EC%B9%B4&category=global&pageKey=1753250282069",
      stack: "Next.js / TypeScript / Tailwind / React Query / NestJS",
      summary: {
        text1: "글로벌 숙소 검색 결과 페이지의 지도 UI 및 사용자 동선 개선",
        text2:
          "검색 키워드에 따른 위치 기반 숙소 렌더링 및 지도 인터랙션 대응 구현",
      },
    },
    {
      src: "/portfolio/img-rebranding.png",
      title: "NOL - 리브랜딩",
      period: "2025/03 ~ 2025/04",
      link: "https://nol.yanolja.com/",
      stack: "Next.js / TypeScript / Tailwind",
      summary: {
        text1: "야놀자 플랫폼 'NOL' 리브랜딩 작업 전반 참여",
        text2: "전반적인 디자인 시스템 개편",
      },
    },
    {
      src: "/portfolio/img-mypage.png",
      title: "인터파크 티켓 - 모바일 마이페이지 홈 개편",
      period: "2024/12 ~ 2025/01",
      link: "https://tickets.interpark.com/contents/myPage",
      stack: "Next.js / TypeScript / SCSS / SWR / Spring",
      summary: {
        text1: "NOL포인트, 내 활동, 예매내역 등을 직관적으로 개선",
        text2: "컴포넌트 구조 분리 및 상태 관리 방식을 고도화",
      },
    },
    {
      title: "인터파크 티켓 - 예매 위버스 인증 연동",
      period: "2024/05 ~ 2024/06",
      link: "",
      stack: "Next.js / TypeScript / Spring",
      summary: {
        text1: "Weverse 연동을 통해 팬 인증 기반 티켓 예매 기능 구축",
        text2: "인증 토큰 처리 및 예매 조건 분기처리 로직 구현",
      },
    },
    {
      src: "/portfolio/img-bridge.png",
      title: "인터파크 티켓 - 브릿지 페이지 개편",
      period: "2024/03 ~ 2024/04",
      link: "https://tickets.interpark.com/contents/bridge/25003151",
      stack: "Next.js / TypeScript / SCSS / SWR / Spring",
      summary: {
        text1: "공연 상세페이지 이동 전 중간 브릿지 페이지 UI 개선",
        text2: "UX 향상을 위해 로딩 속도 최적화 및 반응형 디자인 적용",
      },
    },
    {
      src: "/portfolio/img-genre.png",
      title: "인터파크 티켓 - 대장르 개편",
      period: "2023/12 ~ 2024/02",
      link: "https://tickets.interpark.com/contents/genre/musical",
      stack: "Next.js / TypeScript / SCSS / SWR / Spring / Cypress",
      summary: {
        text1: "장르별 공연 리스트 등 UI 전면 개편",
        text2: "캐러셀, 탭 기능 등 UX 개선 작업 수행",
      },
    },
  ];
  const UI: PortfolioItem[] = [
    {
      title: "인터파크 티켓 - 키오스크 UI 개편",
      period: "2024/10 ~ 2024/11",
      link: "",
      stack: "EJS / SCSS / JavaScript",
      summary: {
        text1: "현장 키오스크 환경에 맞는 터치 UI 개편 및 시인성 향상 작업",
        text2: "퍼포먼스를 고려한 모듈화 및 디바이스 대응 UI 개선",
      },
    },
    {
      src: "/portfolio/img-mdshop.png",
      title: "MDShop 개편",
      period: "2024/07 ~ 2024/08",
      link: "https://nolmdshop.com/",
      stack: "Cafe24 / CSS /JavaScript",
      summary: {
        text1: "카페24 기본 템플릿을 커스터마이징하여 UI 개선",
      },
    },
    {
      src: "/portfolio/img-air.png",
      title: "인터파크 투어 - 항공 모바일 개편",
      period: "2023/06 ~ 2023/07",
      link: "https://travel.interpark.com/air",
      stack: "EJS / SCSS / JavaScript",
      summary: {
        text1: "모바일 환경에 최적화된 항공권 검색 및 스케쥴 UI 개선",
      },
    },
    {
      src: "/portfolio/img-domestic.png",
      title: "인터파크 투어 - 국내숙소 메인 개편",
      period: "2023/04 ~ 2023/05",
      link: "https://travel.interpark.com/checkinnow",
      stack: "EJS / SCSS / JavaScript",
      summary: {
        text1: "메인 비주얼 개편 및 컨텐츠 구조 개선",
      },
    },
    {
      src: "/portfolio/img-package.png",
      title: "인터파크 투어 - 패키지 메인 개편",
      period: "2022/10 ~ 2023/01",
      link: "https://travel.interpark.com/tour/main/domestic",
      stack: "EJS / SCSS / JavaScript",
      summary: {
        text1: "레거시 서비스 개편 및 UI/UX 현대화",
      },
    },
    {
      src: "/portfolio/img-coexartium.png",
      title: "코엑스 아티움",
      period: "2021.01 ~ 2021.10",
      link: "https://www.coexartium.co.kr/",
      stack: "EJS / SCSS / JavaScript",
      summary: {
        text1: "신규 웹서비스 구축",
      },
    },
    {
      src: "/portfolio/img-music.png",
      title: "KBS 뮤직관",
      period: "2021.01 ~ 2021.03",
      link: "https://music.kbs.co.kr/",
      stack: "HTML / CSS / JavaScript / jQuery",
      summary: {
        text1: "KBS 신규 웹서비스 구축",
      },
    },
    {
      src: "/portfolio/img-kbs.png",
      title: "KBS 메인",
      period: "2020.10 ~ 2021.01",
      link: "https://www.kbs.co.kr/",
      stack: "HTML / SCSS / JavaScript / jQuery",
      summary: {
        text1: "KBS 메인페이지 개편 웹 퍼블리싱 진행",
        text2: "다크모드 기능 추가 및 접근성 향상 등 UI 개선 작업 수행",
      },
    },
    {
      src: "/portfolio/img-star.png",
      title: "KBS 스타연예",
      period: "2020.09 ~ 2020.10",
      link: "https://kstar.kbs.co.kr/",
      stack: "HTML / CSS / JavaScript / jQuery",
      summary: {
        text1: "KBS 신규 웹서비스 구축",
      },
    },
    {
      src: "/portfolio/img-about.png",
      title: "KBS 웹 접근성 프로젝트",
      period: "2019.09 ~ 2020.01",
      link: "https://about.kbs.co.kr/",
      stack: "HTML / CSS / JavaScript / jQuery",
      summary: {
        text1: "KBS 소개 페이지의 웹접근성 인증마크 획득",
        text2: "2020년 KBS 전체 웹 서비스 웹 접근성 준수율 98.6% 달성",
      },
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
                      sizes="(max-width: 768px) 100vw, 50vw"
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
                  <div className={styles.stack}>{item.stack}</div>
                </div>
                <div className={styles.summary}>
                  <p>{item.summary.text1}</p>
                  {item.summary.text2 && <p>{item.summary.text2}</p>}
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
                      sizes="(max-width: 768px) 100vw, 50vw"
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
                  <div className={styles.stack}>{item.stack}</div>
                </div>
                <div className={styles.summary}>
                  <p>{item.summary.text1}</p>
                  {item.summary.text2 && <p>{item.summary.text2}</p>}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
