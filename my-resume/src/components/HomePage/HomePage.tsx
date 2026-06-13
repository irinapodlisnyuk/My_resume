import { ResumeStructure } from "@/data/resumeData";
import styles from "./HomePage.module.scss";
import Icon from "../types/Icon";
import { useTranslation } from "react-i18next";

interface CardProps {
  info: ResumeStructure;
}

export const HomePage = ({ info }: CardProps) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.home__wrapper}>
      <div className={styles["home__wrapper-switcher"]}>
        <button
          className={styles["home__wrapper-lang-btn"]}
          onClick={() => changeLanguage("ru")}
          style={{
            fontWeight: i18n.language === "ru" ? "bold" : "normal",
          }}
        >
          RU
        </button>
        <button
          className={styles["home__wrapper-lang-btn"]}
          onClick={() => changeLanguage("en")}
          style={{
            fontWeight: i18n.language === "en" ? "bold" : "normal",
          }}
        >
          EN
        </button>
      </div>
      <div className={styles.home__card}>
        <h2 className={styles["home__card-greetings"]}>
          {t("greetings", { name: info.personal.name })}
        </h2>
        <span className={styles["home__card-prof"]}>{info.personal.title}</span>
        <p className={styles["home__card-text"]}>{t("about_text")}</p>
        <a
          className={`${styles["home__card-btn"]} ${styles.btn}`}
          href="/files/resume.pdf"
          download="Resume_Podlisnyuk_Iriny.pdf"
        >
          {t("button_resume")}
        </a>
      </div>
      <div className={styles.home__inner}>
        {/* <div className={styles["home__inner-block"]}></div> */}
        <div className={styles["home__inner-foto"]}>
          <Icon name="ellipse" className={styles["home__inner-icon"]} />
          <img
            className={styles["home__inner-image"]}
            // src="/images/girl.png"
             src={`${import.meta.env.BASE_URL}images/girl.png`}
            alt="My foto"
          />
        </div>
      </div>
    </div>
  );
};
