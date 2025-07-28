import { useTheme } from "@/context/ThemeContext";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./contact.module.scss";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface Copy {
  text: string;
  type: string;
}

export default function Contact(): JSX.Element {
  const { isDarkMode } = useTheme();
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [dot, setDot] = useState("");

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isLoading) {
      interval = setInterval(() => {
        setDot((prev) => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS 환경변수가 올바르게 설정되지 않았습니다.");
      }

      if (!form.current) {
        throw new Error("폼 요소를 찾을 수 없습니다.");
      }

      const result = await emailjs.sendForm(serviceId, templateId, form.current, publicKey);

      if (result.status === 200) {
        alert("메시지가 성공적으로 전송되었습니다!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      console.error(error);
      alert("전송 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = ({ text, type }: Copy) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${type}이(가) 클립보드에 복사되었습니다.`);
    });
  };

  return (
    <>
      <h2>Contact</h2>
      <div className={styles.contact}>
        <div className={styles.section}>
          <div className={styles.title}>메시지 보내기</div>
          <p className={styles.description}>
            궁금한 점이나 문의사항이 있으시면 언제든지 연락주세요.
            <br />
            최대한 빠른 시일 내에 답변드리겠습니다.
          </p>
          <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">이름 *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="성함을 입력해주세요"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">이메일 *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="이메일 주소를 입력해주세요"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">전화번호 *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="전화번호를 입력해주세요"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">메시지 *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                placeholder="메시지를 입력해주세요"
                required
              />
            </div>
            <button
              type="submit"
              className={styles.btnSubmit}
              disabled={isLoading}
            >
              {isLoading && <div className={styles.loadingSpinner}></div>}
              <span className={styles.buttonText}>
                {isLoading ? `전송 중${dot}` : "메시지 보내기"}
              </span>
            </button>
          </form>
        </div>

        <div className={styles.section}>
          <div className={styles.title}>연락처 정보</div>
          <p className={styles.description}>
            아래 연락처로도 직접 연락하실 수 있습니다.
            <br />
            편하신 방법으로 연락주세요!
          </p>
          <div className={styles.info}>
            <div
              className={styles.item}
              onClick={() =>
                copyToClipboard({ text: "010-8947-2680", type: "전화번호" })
              }
            >
              <div
                className={`${styles.icon} ${styles.call} ${
                  isDarkMode ? styles.on : ""
                }`}
              ></div>
              <div className={styles.detail}>
                <div className={styles.label}>전화번호</div>
                <div className={styles.value}>010-8947-2680</div>
              </div>
            </div>
            <div
              className={styles.item}
              onClick={() =>
                copyToClipboard({ text: "madgekr@gmail.com", type: "이메일" })
              }
            >
              <div
                className={`${styles.icon} ${styles.email} ${
                  isDarkMode ? styles.on : ""
                }`}
              ></div>
              <div className={styles.detail}>
                <div className={styles.label}>이메일</div>
                <div className={styles.value}>madgekr@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.title}>소셜</div>
          <div className={styles.social}>
            <Link
              className={styles.link}
              href="https://github.com/HwanJuKR"
              target="_blank"
              title="새 창으로 열림"
              rel="noopener noreferrer"
            >
              <Image 
                src="/icon/icon-git.png" 
                alt="GitHub" 
                width={48} 
                height={48}
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
