import styles from "./Footer.module.scss";
export const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">

         <div className={styles.footer__wrapper}>

            <p className={styles["footer__wrapper-text"]}>© 2026</p>

         </div>
      </div>
    </footer>
  );
};
