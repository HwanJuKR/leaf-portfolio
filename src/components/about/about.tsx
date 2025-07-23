import Image from "next/image";
import styles from "./about.module.scss";

export default function About(): JSX.Element {
  const skills = [
    { src: "/icon/icon-html5.png", alt: "HTML5", label: "HTML5" },
    { src: "/icon/icon-css3.png", alt: "CSS3", label: "CSS3" },
    { src: "/icon/icon-js.png", alt: "JavaScript", label: "JavaScript" },
    { src: "/icon/icon-jquery.png", alt: "jQuery", label: "jQuery" },
    { src: "/icon/icon-ejs.png", alt: "EJS", label: "EJS" },
    { src: "/icon/icon-sass.png", alt: "Sass", label: "Sass" },
    { src: "/icon/icon-a11y.png", alt: "웹접근성", label: "웹접근성" },
    { src: "/icon/icon-vue.png", alt: "Vue.js", label: "Vue.js" },
    { src: "/icon/icon-react.png", alt: "React", label: "React" },
    { src: "/icon/icon-next.png", alt: "Next.js", label: "Next.js" },
    { src: "/icon/icon-git.png", alt: "Git", label: "Git" },
    { src: "/icon/icon-aws.png", alt: "AWS", label: "AWS" },
    { src: "/icon/icon-ps.png", alt: "Photoshop", label: "Photoshop" },
  ];

  return (
    <>
      <h2>About Me</h2>
      <div className={styles.aboutMe}>
        <Image
          src="/me.png"
          alt="의자에 앉아서 웃고있는 서환주 사진"
          width={200}
          height={200}
        />
        <p>
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
          주어진 역할에서 항상 최선을 다하는 성실한 개발자입니다.
        </p>
      </div>
      <h2>Skills</h2>
      <div className={styles.skills}>
        <ul>
          {skills.map((item) => (
            <li key={item.label}>
              <Image src={item.src} alt={item.alt} width={58} height={58} />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
