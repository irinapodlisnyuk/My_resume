import { useTranslation } from "react-i18next";
import styles from "./ContactsPage.module.scss";

export const ContactsPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles["contacts__wrapper"]}>
      <h2 className={styles["contacts__wrapper__title"]}>
        {t("contacts__title")}
      </h2>

      <div className={styles["contacts__info"]}>

      </div>

      <div className={styles["contacts__forma"]}>

      </div>
    </div>
  );
};
