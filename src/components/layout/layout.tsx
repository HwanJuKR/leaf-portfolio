import Category from "@/components/category/category";
import { ReactNode } from "react";
import styles from "./layout.module.scss";
import SkipNav from "../skip/skipNav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <SkipNav />
      <Category />
      <div id="content" className={styles.content}>
        {children}
      </div>
    </div>
  );
}
