import Category from "@/components/category/category";
import { ReactNode, useRef } from "react";
import SkipNav from "../skip/skipNav";
import styles from "./layout.module.scss";

export default function Layout({ children }: { children: ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <div className={styles.container}>
      <SkipNav contentRef={contentRef} />
      <Category onMenuClick={scrollToTop} />
      <div ref={contentRef} id="content" className={styles.content}>
        {children}
      </div>
    </div>
  );
}
