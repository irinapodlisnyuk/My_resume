import { useTranslation } from "react-i18next";
import styles from "./ContactsPage.module.scss";
import Icon from "../types/Icon";
import { ContactForm } from "../Form/ContactForm";

export const ContactsPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles["contacts__wrapper"]}>
      <img
        className={styles["contacts__image"]}
        src="/images/working.png"
        alt="girl image"
      />
      <div className={styles["contacts__inner"]}>
        <div className={styles["contacts__info"]}>
          <h3 className={styles["contacts__info-title"]}>
            {t("contacts__title")}
          </h3>
          <p className={styles["contacts__info-text"]}>{t("contacts__text")}</p>
          <div className={styles["contacts__contact"]}>
            <a
              href="tel:+79933113848"
              className={styles["contacts__contact-tel"]}
            >
              
              <Icon name="phone" className={styles["contacts__contact-icon"]} />
              <span className={styles["contacts__contact-text"]}>
                +7 (993)-311-38-48
              </span>
            </a>

            <a
              href="mailto:irinapodlisnyuk@gmail.com"
              className={styles["contacts__contact-email"]}
            >
              <Icon name="email" className={styles["contacts__contact-icon"]} />
              <span className={styles["contacts__contact-text"]}>
                irinapodlisnyuk@gmail.com
              </span>
            </a>
          </div>
        </div>

        <div className={styles["contacts__form"]}>
          <h3 className={styles["contacts__form-title"]}>
            {t("contacts__form-title")}
          </h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
