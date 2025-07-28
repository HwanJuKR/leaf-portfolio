import Link from "next/link";
import styles from "./skipNav.module.scss";

const skipNavList = [
  { id: "content", href: "#content", label: "본문 바로가기" },
];

export default function SkipNav() {
  return (
    <ul className={styles.skipNav}>
      {skipNavList.map(({ id, href, label }) => (
        <li key={id} className={styles.item}>
          <Link
            href={href}
            className={styles.link}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("content")?.focus();
            }}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
