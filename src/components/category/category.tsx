import { useTheme } from "@/context/ThemeContext";
import { useMobile } from "@/hooks/useMobile";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./category.module.scss";

const menuList = [
  { id: "main", href: "/", label: "main", className: styles.main },
  { id: "about", href: "/about", label: "about", className: styles.about },
  {
    id: "portfolio",
    href: "/portfolio",
    label: "portfolio",
    className: styles.portfolio,
  },
  {
    id: "contact",
    href: "/contact",
    label: "contact",
    className: styles.contact,
  },
];

export default function Category() {
  const router = useRouter();
  const { isDarkMode, toggleTheme } = useTheme();
  const { isMobile } = useMobile();
  const [currentMenu, setCurrentMenu] = useState("main");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLAnchorElement>(null);
  const btnMobileMenuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const path = router.pathname;
    const selectedMenu = menuList.find((item) => item.href === path);
    setCurrentMenu(selectedMenu ? selectedMenu.id : "main");
  }, [router.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      mobileMenuRef.current?.focus();
    } else {
      btnMobileMenuRef.current?.focus();
    }
  }, [isMobileMenuOpen]);

  const handleMenuClick = (menuId: string) => {
    setCurrentMenu(menuId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {!isMobile ? (
        <nav className={styles.pcList}>
          <ul>
            <li className={styles.logo}>
              <Image
                src="/leaf.png"
                alt="leaf 프로필 이미지"
                width={36}
                height={36}
              />
            </li>
            {menuList.map(({ id, href, label, className }) => (
              <li key={id}>
                <Link
                  href={href}
                  className={`${className} ${
                    currentMenu === id ? styles.on : ""
                  }`}
                  onClick={() => handleMenuClick(id)}
                  aria-current={currentMenu === id ? "page" : undefined}
                  title={currentMenu === id ? "선택됨" : ""}
                >
                  <span>{label}</span>
                </Link>
              </li>
            ))}
            <li className={styles.mode}>
              <button
                type="button"
                onClick={toggleTheme}
                aria-pressed={isDarkMode}
                aria-label={
                  isDarkMode ? "라이트 모드로 전환" : "다크 모드로 전환"
                }
                className={isDarkMode ? styles.on : ""}
              />
            </li>
          </ul>
        </nav>
      ) : (
        <>
          <button
            ref={btnMobileMenuRef}
            type="button"
            className={styles.mobileMenu}
            aria-label="메뉴 열기"
            aria-haspopup="true"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(true)}
          />
          {isMobileMenuOpen && 
            createPortal(
              <nav className={styles.mobileList} aria-hidden={!isMobileMenuOpen}>
                <button
                  type="button"
                  className={styles.close}
                  aria-label="메뉴 닫기"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                <ul>
                  {menuList.map(({ id, href, label }) => (
                    <li key={id}>
                      <Link
                        href={href}
                        onClick={() => handleMenuClick(id)}
                        ref={id === "main" ? mobileMenuRef : undefined}
                        aria-current={currentMenu === id ? "page" : undefined}
                        title={currentMenu === id ? "선택됨" : ""}
                      >
                        <span>{label}</span>
                      </Link>
                    </li>
                  ))}
                  <li className={styles.mode}>
                    <button
                      type="button"
                      onClick={() => {
                        toggleTheme();
                        setIsMobileMenuOpen(false);
                      }}
                      aria-pressed={isDarkMode}
                      aria-label={
                        isDarkMode ? "라이트 모드로 전환" : "다크 모드로 전환"
                      }
                    >
                      mode
                    </button>
                  </li>
                </ul>
                <button
                  type="button"
                  className={`${styles.close} blind`}
                  aria-label="메뉴 닫기"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              </nav>,
              document.body
            )
          }
        </>
      )}
    </>
  );
}
