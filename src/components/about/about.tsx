import Image from "next/image";
import styles from "./about.module.scss";

interface Skill {
  src: string;
  alt: string;
  label: string;
}

interface Experience {
  period: string;
  role: string;
  description: string;
}

export default function About(): JSX.Element {
  const skills: Skill[] = [
    { src: "/icon/icon-html5.png", alt: "HTML5", label: "HTML5" },
    { src: "/icon/icon-css3.png", alt: "CSS3", label: "CSS3" },
    { src: "/icon/icon-js.png", alt: "JavaScript", label: "JavaScript" },
    { src: "/icon/icon-jquery.png", alt: "jQuery", label: "jQuery" },
    { src: "/icon/icon-ejs.png", alt: "EJS", label: "EJS" },
    { src: "/icon/icon-sass.png", alt: "Sass", label: "Sass" },
    { src: "/icon/icon-tailwind.png", alt: "Tailwind CSS", label: "Tailwind CSS" },
    { src: "/icon/icon-a11y.png", alt: "웹접근성", label: "웹접근성" },
    { src: "/icon/icon-vue.png", alt: "Vue.js", label: "Vue.js" },
    { src: "/icon/icon-react.png", alt: "React", label: "React" },
    { src: "/icon/icon-next.png", alt: "Next.js", label: "Next.js" },
    { src: "/icon/icon-typescript.png", alt: "TypeScript", label: "TypeScript" },
    { src: "/icon/icon-zod.png", alt: "Zod", label: "Zod" },
    { src: "/icon/icon-tanstackquery.png", alt: "TanStack Query", label: "TanStack Query" },
    { src: "/icon/icon-swr.png", alt: "SWR", label: "SWR" },
    { src: "/icon/icon-jotai.png", alt: "Jotai", label: "Jotai" },
    { src: "/icon/icon-git.png", alt: "Git", label: "Git" },
    { src: "/icon/icon-aws.png", alt: "AWS", label: "AWS" },
    { src: "/icon/icon-cypress.png", alt: "Cypress", label: "Cypress" },
    { src: "/icon/icon-ps.png", alt: "Photoshop", label: "Photoshop" },
    { src: "/icon/icon-storybook.png", alt: "Storybook", label: "Storybook" },
    { src: "/icon/icon-figma.png", alt: "Figma", label: "Figma" },
    { src: "/icon/icon-zeplin.png", alt: "Zeplin", label: "Zeplin" },
  ];

  const experiences: Experience[] = [
    {
      period: "2021.06 - 현재",
      role: "놀유니버스 | 프론트엔드 개발자",
      description:
        "NOL 플랫폼의 프론트엔드 개발을 담당하며, React/Next.js 기반의 웹 서비스를 구축하고 있습니다. 사용자 경험 개선과 성능 최적화에 중점을 두고 개발하고 있습니다.",
    },
    {
      period: "2019.05 - 2021.05",
      role: "KBS미디어 | 웹 퍼블리셔",
      description:
        "KBS 웹서비스들의 퍼블리싱 업무를 담당했습니다. 메인 페이지 개편, 신규 서비스 구축, 웹 접근성 인증 마크 획득 등의 프로젝트에 참여했습니다.",
    },
    {
      period: "2016.02 - 2018.12",
      role: "카이모바일 | 웹 퍼블리셔",
      description:
        "스타트업으로 다양한 SI 프로젝트에 참여하며 반응형 웹 구축, 크로스 브라우징 대응 등 웹 퍼블리싱 전반을 담당했습니다. 빠르게 변화하는 요구사항에 유연하게 대응하며, 여러 기업의 웹 서비스 구축 경험을 쌓았습니다.",
    },
  ];

  return (
    <>
      <h2>About Me</h2>
      <div className={styles.aboutMe}>
        <div className={styles.profileImage}>
          <Image
            src="/me.png"
            alt="의자에 앉아서 웃고있는 서환주 사진"
            width={200}
            height={200}
            priority
          />
        </div>
        <div className={styles.description}>
          안녕하세요.
          <br />
          웹 퍼블리셔로 7년간 일한 뒤 프론트엔드 개발로 커리어를 확장해 2년째
          경력을 이어가고 있는 서환주입니다.
          <br />
          제 포트폴리오 사이트에 방문해 주셔서 감사합니다 🙂
          <br />
          <br />
          함께 고민하고 협업하며 하나씩 만들어가는 과정을 즐깁니다.
          <br />
          완성된 결과물에서 느끼는 뿌듯함이 저를 더욱 성장하게 만듭니다.
          <br />
          좋아하는 일을 꾸준히 하다 보니 자연스럽게 실력이 쌓여왔고,
          <br />
          생산성을 높이는 일에도 관심이 많아 보다 나은 결과를 만들기 위해
          끊임없이 배우고자 노력합니다.
          <br />
          작은 일에도 책임감을 갖고 꾸준히 임하며, 주어진 역할에 항상 최선을
          다하는 성실한 개발자입니다.
        </div>
      </div>

      <h2>Skills</h2>
      <div className={styles.skills}>
        {skills.map((skills, index) => (
          <div key={index} className={styles.skillsItem}>
            <div className={styles.skillsIcon}>
              <Image src={skills.src} alt="" width={58} height={58} priority />
            </div>
            <span className={styles.skillsLabel}>{skills.label}</span>
          </div>
        ))}
      </div>

      <h2>Experience</h2>
      <div className={styles.experience}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.experienceItem}>
            <div className={styles.period}>{exp.period}</div>
            <div className={styles.role}>{exp.role}</div>
            <div className={styles.description}>{exp.description}</div>
          </div>
        ))}
      </div>
    </>
  );
}
