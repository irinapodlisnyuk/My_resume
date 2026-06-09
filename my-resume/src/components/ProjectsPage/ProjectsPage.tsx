import { useTranslation } from "react-i18next";
import styles from "./ProjectsPage.module.scss";
import Icon from "../types/Icon";
import { FC } from "react";

export const ProjectsPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.projects__wrapper}>
      <h2 className={styles["projects__wrapper-title"]}>
        {t("menu_projects")}
      </h2>

      <ul className={styles["projects__card-list"]}>
        <li className={styles["projects__card-item"]}>
          <img
            className={styles["projects__card-image"]}
            src="/images/studio.png"
            alt="Изображение сайта подкастов"
          />
          <div className={styles["projects__card-wrapper"]}>
            <div className={styles["projects__card-top"]}>
              <h3 className={styles["projects__card-title"]}>
                {t("projects__card-title")}
              </h3>
              <p className={styles["projects__card-text"]}>
                {t("projects__card-text1")}
              </p>
              <span className={styles["projects__card-stack"]}>
                Tech stack : HTML , JavaScript,TypeScript, SASS
              </span>
            </div>
            <div className={styles["projects__card-links"]}>
              <a
                href="https://irinapodlisnyuk.github.io/VibeCast-Studio/"
                className={styles["projects__link"]}
              >
                <Icon
                  name="preview"
                  className={styles["projects__link-icon"]}
                />
                <span className={styles["projects__link-text"]}>
                  Live Preview
                </span>
              </a>

              <a
                href="https://github.com/irinapodlisnyuk/VibeCast-Studio"
                className={styles["projects__link"]}
              >
                <Icon name="git" className={styles["projects__link-icon"]} />
                <span className={styles["projects__link-text"]}>View Code</span>
              </a>
            </div>
          </div>
        </li>
        <li className={styles["projects__card-item"]}>
          <img
            className={styles["projects__card-image"]}
            src="/images/studio.png"
            alt="Изображение сайта подкастов"
          />

          <div className={styles["projects__card-top"]}>
            <h3 className={styles["projects__card-title"]}>
              {t("projects__card-title")}
            </h3>
            <p className={styles["projects__card-text"]}>
              {t("projects__card-text1")}
            </p>
          </div>
          <div className={styles["projects__card-links"]}>
            <a href="#" className={styles["projects__link"]}>
              <Icon name="preview" className={styles["projects__link-icon"]} />
              <span className={styles["projects__link-text"]}>
                Live Preview
              </span>
            </a>

            <a href="#" className={styles["projects__link"]}>
              <Icon name="git" className={styles["projects__link-icon"]} />
              <span className={styles["projects__link-text"]}>View Code</span>
            </a>
          </div>
        </li>
        <li className={styles["projects__card-item"]}>
          <img
            className={styles["projects__card-image"]}
            src="/images/studio.png"
            alt="Изображение сайта подкастов"
          />

          <div className={styles["projects__card-top"]}>
            <h3 className={styles["projects__card-title"]}>
              {t("projects__card-title")}
            </h3>
            <p className={styles["projects__card-text"]}>
              {t("projects__card-text1")}
            </p>
          </div>
          <div className={styles["projects__card-links"]}>
            <a href="#" className={styles["projects__link"]}>
              <Icon name="preview" className={styles["projects__link-icon"]} />
              <span className={styles["projects__link-text"]}>
                Live Preview
              </span>
            </a>

            <a href="#" className={styles["projects__link"]}>
              <Icon name="git" className={styles["projects__link-icon"]} />
              <span className={styles["projects__link-text"]}>View Code</span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};
