import Link from "next/link";
import styles from "./error.module.scss";

export default function Error() {
  return (
    <>
      <h2>404</h2>
      <div className={styles.error}>
        <p>페이지를 찾을 수 없습니다</p>
        <Link href="/" className={styles.link}>
          홈으로 돌아가기
        </Link>
      </div>
    </>
  );
}
