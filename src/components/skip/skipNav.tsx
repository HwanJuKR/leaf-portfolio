import Link from "next/link";
import { RefObject } from "react";
import styles from "./skipNav.module.scss";

const skipNavList = [
  { id: "content", label: "본문 바로가기" },
];

interface SkipNavProps {
  contentRef: RefObject<HTMLDivElement>;
}

export default function SkipNav({ contentRef }: SkipNavProps) {
  const handleSkipClick = (e: React.MouseEvent) => {
    e.preventDefault();
    contentRef.current?.focus();
    contentRef.current?.scrollIntoView({ behavior: 'instant' });
  };

  return (
    <ul className={styles.skipNav}>
      {skipNavList.map(({ id, label }) => (
        <li key={id} className={styles.item}>
          <button
            type="button"
            className={styles.link}
            onClick={handleSkipClick}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}
