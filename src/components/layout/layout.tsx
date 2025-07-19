import Category from "@/components/category/category";
import styles from "./layout.module.scss";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <Category />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
