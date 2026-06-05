import { ResumeStructure } from "@/data/resumeData";
import styles from "./HomePage.module.scss";
import Icon from "../types/Icon";
import { useTranslation } from "react-i18next";

interface CardProps {
  info: ResumeStructure;
}

export const HomePage = ({ info }: CardProps) => {
  const { t } = useTranslation();

  return (
 <div className={styles.home__wrapper}>
      <div className={styles.home__card}>
        <h2 className={styles["home__card-greetings"]}>
          {/* Привет, меня зовут {info.personal.name} */}
          {t("greetings", { name: info.personal.name })}
        </h2>
        <span className={styles["home__card-prof"]}>{info.personal.title}</span>
        <p className={styles["home__card-text"]}>
          {t("about_text")}
        </p>
        <button className={`${styles["home__card-btn"]} ${styles.btn}`}>
          {t("button_resume")}
        </button>
      </div>
      <div className={styles.home__inner}>
        <div className={styles["home__inner-block"]}></div>
        <div className={styles["home__inner-foto"]}>
          <Icon name="ellipse" className={styles["home__inner-icon"]} />
          <img
            className={styles["home__inner-image"]}
            src="/images/girl.png"
            alt="My foto"
          />
        </div>
      </div>
    </div>
  );
};
