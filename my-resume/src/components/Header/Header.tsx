import styles from "./Header.module.scss";
import Icon from "../types/Icon";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export const AppHeader = () => {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState<string>("home");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

   useEffect(() => {
    // Находим все секции, за которыми нужно следить
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px", 
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles["header__wrapper"]}>
          <div className={styles["header__logo"]}>
            <a href="#home" className={styles["header__logo-link"]}>
              <Icon name="icon-logo" className={styles["header__logo-icon"]} />
            </a>
          </div>
          <div className={styles["header__top"]}>
            <ul className={styles["header__top-list"]}>
              <li className={styles["header__top-item"]}>
                <a href="#home" className={`${styles["header__top-link"]} ${activeSection === "home" ? styles.active : ""}`}>
                  {t("menu_home")}
                </a>
              </li>
              <li className={styles["header__top-item"]}>
                <a href="#aboutMe"  className={`${styles["header__top-link"]} ${activeSection === "aboutMe" ? styles.active : ""}`}>
                  {t("menu_about")}
                </a>
              </li>
              <li className={styles["header__top-item"]}>
                <a href="#projects"  className={`${styles["header__top-link"]} ${activeSection === "projects" ? styles.active : ""}`}>
                  {t("menu_projects")}
                </a>
              </li>
                <li className={styles["header__top-item"]}>
                <a href="#contacts"  className={`${styles["header__top-link"]} ${activeSection === "contacts" ? styles.active : ""}`}>
                  {t("menu_contacts")}
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["header__lang-switcher"]}>
            <button
              className={styles["header__lang-btn"]}
              onClick={() => changeLanguage("ru")}
              style={{
                fontWeight: i18n.language === "ru" ? "bold" : "normal",
              }}
            >
              RU
            </button>
            <button
              className={styles["header__lang-btn"]}
              onClick={() => changeLanguage("en")}
              style={{
                fontWeight: i18n.language === "en" ? "bold" : "normal",
              }}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
