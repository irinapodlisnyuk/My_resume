import { useTranslation } from "react-i18next";
import styles from "./ProjectsPage.module.scss";
import Icon from "../types/Icon";
import { FC } from "react";

export const ProjectsPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.about__wrapper}>
      <div className={styles["about__left"]}>
        <h2 className={styles["about__left-title"]}>{t("about_me")}</h2>
      </div>

      <ul className={styles["about__skills-list"]}>
        <li className={styles["about__skills-item"]}>
          <Icon
            name="html"
            className={`${styles["about__skills-icon"]} ${styles["about__skills-html"]}`}
          />
          <span className={styles["about__skills-text"]}>HTML</span>
        </li>
        <li className={styles["about__skills-item"]}>
          <Icon name="javaScript" className={styles["about__skills-icon"]} />
          <span className={styles["about__skills-text"]}>JavaScript</span>
        </li>
        <li className={styles["about__skills-item"]}>
          <Icon
            name="typeScript"
            className={`${styles["about__skills-icon"]} ${styles["about__skills-ts"]}`}
          />
          <span className={styles["about__skills-text"]}>TypeScript</span>
        </li>
        <li className={styles["about__skills-item"]}>
          <Icon
            name="react"
            className={`${styles["about__skills-icon"]} ${styles["about__skills-react"]}`}
          />
          <span className={styles["about__skills-text"]}>React</span>
        </li>
  
    
    
      </ul>
    </div>
  );
};
