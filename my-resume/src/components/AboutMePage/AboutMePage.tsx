import { useTranslation } from "react-i18next";
import styles from "./AboutMePage.module.scss";
import Icon from "../types/Icon";
import { FC } from "react";

export const AboutMePage: FC = () => {
  const { t } = useTranslation();

  const standards = t("about_standards", { returnObjects: true }) as string[];

  return (
    <div className={styles.about__wrapper}>
      <div className={styles["about__left"]}>
        <h2 className={styles["about__left-title"]}>{t("about_me")}</h2>
        <img
          className={styles["about__left-image"]}
          src="/images/img-girl.png"
          alt="girl image"
        />
      </div>
      <div className={styles["about__right"]}>
        <div className={styles["about__right-info"]}>
          <p className={styles["about__right-greetings"]}>
            {t("about_greetings")}
          </p>
          <h3 className={styles["about__right-subtitle"]}>
            {t("about_standards_title")}
          </h3>
          <ul className={styles["about__right-list"]}>
            {Array.isArray(standards) &&
              standards.map((item, index) => (
                <li
                  key={index}
                  className={styles["about__right-item"]}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
          </ul>

        </div>
        <div className={styles["about__skills"]}>
          <p className={styles["about__skills-title"]}>
            Skills
          </p>

          <ul className={styles["about__skills-list"]}>
            <li className={styles["about__skills-item"]}>
              <Icon name="html" className={`${styles["about__skills-icon"]} ${styles["about__skills-html"]}`} />
              <span className={styles["about__skills-text"]}>HTML</span>
            </li>
            <li className={styles["about__skills-item"]}>
              <Icon
                name="javaScript"
                className={styles["about__skills-icon"]}
              />
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
              <Icon name="react" className={`${styles["about__skills-icon"]} ${styles["about__skills-react"]}`} />
              <span className={styles["about__skills-text"]}>React</span>
            </li>
            <li className={styles["about__skills-item"]}>
              <Icon name="node" className={`${styles["about__skills-icon"]} ${styles["about__skills-node"]}`} />
              <span className={styles["about__skills-text"]}>node.js</span>
            </li>
            <li className={styles["about__skills-item"]}>
              <Icon name="scss" className={`${styles["about__skills-icon"]} ${styles["about__skills-scss"]}`}/>
              <span className={styles["about__skills-text"]}>Scss</span>
            </li>
            <li className={styles["about__skills-item"]}>
              <Icon name="vite" className={`${styles["about__skills-icon"]} ${styles["about__skills-scss"]}`} />
              <span className={styles["about__skills-text"]}>Vite</span>
            </li>
            <li className={styles["about__skills-item"]}>
              <Icon name="webpack" className={`${styles["about__skills-icon"]} ${styles["about__skills-scss"]}`} />
              <span className={styles["about__skills-text"]}>Webpack</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
