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
          <div className={styles["projects__card-inner"]}>
            <img
              className={styles["projects__card-image"]}
              src="/images/studio.png"
              alt="Изображение сайта подкастов"
            />
          </div>
          <div className={styles["projects__card-wrapper"]}>
            <div className={styles["projects__card-top"]}>
              <h3 className={styles["projects__card-title"]}>
                {t("projects__card-title1")}
              </h3>
              <p className={styles["projects__card-text"]}>
                {t("projects__card-text1")}
              </p>
              <span className={styles["projects__card-stack"]}>
                Tech stack : HTML, JavaScript, TypeScript, SASS, Webpack
              </span>
            </div>
            <div className={styles["projects__card-links"]}>
              <a
                href="https://vibecast-frontend.vercel.app/"
                className={styles["projects__link"]}
                target="_blank"
                rel="noreferrer"
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
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="git" className={styles["projects__link-icon"]} />
                <span className={styles["projects__link-text"]}>View Code</span>
              </a>
            </div>
          </div>
        </li>

        <li className={styles["projects__card-item"]}>
          <div className={styles["projects__card-inner"]}>
            <img
              className={styles["projects__card-image"]}
              src="/images/travel.png"
              alt="Изображение сайта путешествий"
            />
          </div>
          <div className={styles["projects__card-wrapper"]}>
            <div className={styles["projects__card-top"]}>
              <h3 className={styles["projects__card-title"]}>
                {t("projects__card-title2")}
              </h3>
              <p className={styles["projects__card-text"]}>
                {t("projects__card-text2")}
              </p>
              <span className={styles["projects__card-stack"]}>
                Tech stack : HTML ,TypeScript, React, Vite, SASS
              </span>
            </div>
            <div className={styles["projects__card-links"]}>
              <a
                href="https://travel-blog-hy17.onrender.com"
                className={styles["projects__link"]}
                target="_blank"
                rel="noreferrer"
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
                href="https://github.com/irinapodlisnyuk/Travel__blog"
                className={styles["projects__link"]}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="git" className={styles["projects__link-icon"]} />
                <span className={styles["projects__link-text"]}>View Code</span>
              </a>
            </div>
          </div>
        </li>

        <li className={styles["projects__card-item"]}>
          <div className={styles["projects__card-inner"]}>
            <img
              className={styles["projects__card-image"]}
              src="/images/vk.png"
              alt="Изображение сайта vk-маруся"
            />
          </div>
          <div className={styles["projects__card-wrapper"]}>
            <div className={styles["projects__card-top"]}>
              <h3 className={styles["projects__card-title"]}>
                {t("projects__card-title3")}
              </h3>
              <p className={styles["projects__card-text"]}>
                {t("projects__card-text3")}
              </p>
              <span className={styles["projects__card-stack"]}>
                Tech stack : HTML, TypeScript, React,Vite, SASS
              </span>
            </div>
            <div className={styles["projects__card-links"]}>
              <a
                href="https://my-project-vk.onrender.com"
                className={styles["projects__link"]}
                target="_blank"
                rel="noreferrer"
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
                href="https://github.com/irinapodlisnyuk/my-project-vk"
                className={styles["projects__link"]}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="git" className={styles["projects__link-icon"]} />
                <span className={styles["projects__link-text"]}>View Code</span>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
