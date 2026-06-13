import { useTranslation } from "react-i18next";
import styles from "./Footer.module.scss";
export const AppFooter = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <p className={styles["footer__wrapper-text"]}>© 2026</p>

          <a
            className={styles["footer__wrapper-btn"]}
            href={`${import.meta.env.BASE_URL}files/policy.pdf`}
            download="Privacy policy.pdf"
          >
            {t("button_policy")}
          </a>
        </div>
      </div>
    </footer>
  );
};
