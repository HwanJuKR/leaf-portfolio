import { useCallback, useEffect, useState } from "react";
import styles from "./main.module.scss";
import { useMobile } from "@/hooks/useMobile";

type addZero = (num: number, digit: number) => string;

export default function Main(): JSX.Element {
  const { isMobile } = useMobile();
  const [dateTime, setDateTime] = useState({ date: "", time: "" });

  const updateDateTime = useCallback(() => {
    const addZero: addZero = (num, digit) => {
      return num.toString().padStart(digit, "0");
    };
    const d = new Date();
    const date = `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
    const time = `${addZero(d.getHours(), 2)}:${addZero(
      d.getMinutes(),
      2
    )}:${addZero(d.getSeconds(), 2)}`;
    setDateTime({ date, time });
  }, []);

  useEffect(() => {
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    console.log(
      "%c🌿 Leaf Portfolio",
      "background: linear-gradient(45deg, #10b981, #059669); color: white; padding: 8px 16px; border-radius: 8px; font-size: 18px; font-weight: bold;"
    );
    console.log(
      "%c안녕하세요! 서환주입니다",
      "color: #374151; font-size: 16px; font-weight: 600;"
    );
    console.log(
      "%c포트폴리오 사이트에 오신 것을 환영합니다! 🚀",
      "color: #6b7280; font-size: 14px;"
    );

    return () => clearInterval(interval);
  }, [updateDateTime]);

  return (
    <>
      {!isMobile && (
        <time className={styles.time}>
          {dateTime.date} {dateTime.time}
        </time>
      )}
      <div className={styles.title}>
        <h1>Seo Hwan Ju</h1>
        <p>Front-end Developer</p>
      </div>
      <div className={styles.floatingElement}>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
      </div>
      <footer className={styles.footer}>
        <p>© 2025 Leaf v.3.0.5</p>
      </footer>
    </>
  );
}
