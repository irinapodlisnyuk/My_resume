import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Icon from "../types/Icon";

export const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles["header__wrapper"]}>
          <div className={styles["header__logo"]}>
            <Link to="/" className={styles["header__logo-link"]}>
              <Icon name="icon-logo" className={styles["header__logo-icon"]} />
            </Link>
          </div>
          {/* <div className={styles["header__top"]}> */}
          <ul className={styles["header__top"]}>
            <li className={styles["header__top-item"]}>
              <Link to="/" className={styles["header__home"]}>
                Home
              </Link>
            </li>
            <li className={styles["header__top-item"]}>
              <Link to="/aboutMe" className={styles["header__aboutMe"]}>
                About me
              </Link>
            </li>
            <li className={styles["header__top-item"]}>
              <Link to="/projects" className={styles["header__projects"]}>
                My Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
