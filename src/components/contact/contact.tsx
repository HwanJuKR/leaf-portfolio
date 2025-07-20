import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.scss";

export default function Contact(): JSX.Element {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dot, setDot] = useState("");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isLoading) {
      interval = setInterval(() => {
        setDot(prev => {
          if (prev === "...") return "";

          return prev + ".";
        });
      }, 500);
    } else {
      setDot("");
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isLoading]);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setIsLoading(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS 환경변수가 올바르게 설정되지 않았습니다.");
      }

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );

      if (result.status === 200) {
        alert("메일이 전송되었습니다!");
        form.current.reset();
      }
    } catch (error) {
      console.error(error);
      alert("전송 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h2>contact</h2>
      <form ref={form} onSubmit={sendEmail} className={styles.contact}>
        <input
          type="text"
          name="name"
          title="name"
          placeholder="name"
          required
        />
        <input
          type="email"
          name="email"
          title="email"
          placeholder="email"
          required
        />
        <input type="tel" name="phone" title="phone" placeholder="phone" />
        <textarea
          name="message"
          rows={5}
          title="message"
          placeholder="message"
          required
        />
        <button type="submit" className={styles.send} disabled={isLoading}>
          {isLoading ? `sending${dot}` : "send"}
        </button>
      </form>
      <ul className={styles.info}>
        <li>
          <span className={styles.call} aria-label="전화"></span>
          010-8947-2680
        </li>
        <li>
          <span className={styles.email} aria-label="이메일"></span>
          madgekr@gmail.com
        </li>
      </ul>
    </>
  );
}
