import { useTranslation } from "react-i18next";
import styles from "./AboutMePage.module.scss";
import Icon from "../types/Icon";

export const AboutMePage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.about__wrapper}>
      <div className={styles["about__wrapper-left"]}>
        <h2 className={styles["about__wrapper-left"]}>{t("about_me")}</h2>
        <img
          className={styles["about__wrapper-image"]}
          src="/images/img-girl.png"
          alt="girl image"
        />
      </div>
      <div className={styles["about__wrapper-right"]}>
        <div className={styles["about__wrapper-info"]}>
          <p className={styles["about__wrapper-text"]}>{t("about_me_text")}</p>
        </div>
        <div className={styles["about__wrapper-skills"]}>
          <p className={styles["about__skills-title"]}>
            Skills
            {/* {t("about__skills-title")} */}
          </p>

          <ul className={styles["about__skills-card"]}>
            <li className={styles["about__skills-item"]}>
              <Icon name="ellipse" className={styles["about__skills-icon"]} />
              <span className={styles["about__skills-title"]}></span>
            </li>
            <li className={styles["about__skills-item"]}>
              <Icon name="ellipse" className={styles["about__skills-icon"]} />
              <span className={styles["about__skills-title"]}></span>
            </li>
            <li className={styles["about__skills-item"]}>
              <Icon name="ellipse" className={styles["about__skills-icon"]} />
              <span className={styles["about__skills-title"]}></span>
            </li>
            <li className={styles["about__skills-item"]}>
              <Icon name="ellipse" className={styles["about__skills-icon"]} />
              <span className={styles["about__skills-title"]}></span>
            </li>
            <li className={styles["about__skills-item"]}>
              <Icon name="ellipse" className={styles["about__skills-icon"]} />
              <span className={styles["about__skills-title"]}></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
