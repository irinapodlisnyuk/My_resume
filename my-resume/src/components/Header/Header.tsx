import styles from "./Header.module.scss";
import Icon from "../types/Icon";
import { useTranslation } from "react-i18next";

export const AppHeader = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

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
                <a href="#home"className={styles["header__top-link"]}>
                  {t("menu_home")}
                </a>
              </li>
              <li className={styles["header__top-item"]}>
                    <a href="#aboutMe"  className={styles["header__top-link"]}>
                  {t("menu_about")}
                </a>
              </li>
              <li className={styles["header__top-item"]}>
                 <a href="#projects" className={styles["header__top-link"]}>
                  {t("menu_projects")}
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
