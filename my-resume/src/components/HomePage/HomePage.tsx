import { ResumeStructure } from "@/data/resumeData";
import styles from "./HomePage.module.scss";
import Icon from "../types/Icon";

interface CardProps {
  info: ResumeStructure;
}

export const HomePage = ({ info }: CardProps) => {
  return (
    <>
      <div className={styles.home__card}>
        <h2 className={styles["home__card-greetings"]}>
          Привет, меня зовут {info.personal.name}
        </h2>
        <span className={styles["home__card-prof"]}>{info.personal.title}</span>
        <p className={styles["home__card-text"]}>
          Я&nbsp;&mdash; фрилансер, Frontend разработчик, проживаю
          в&nbsp;Новороссийске, Россия. Мне нравится создавать современные,
          адаптивные и&nbsp;интуитивно понятные веб-сайты и&nbsp;приложения,
          которые превращают ваши идеи в&nbsp;успешные цифровые продукты.
        </p>

        <button className={`${styles["home__card-btn"]} ${styles.btn}`}>
          Моё резюме
        </button>
      </div>
      <div className={styles.home__inner}>
        <div className={styles["home__inner-block"]}></div>
        <div className={styles["home__inner-foto"]}>
          <Icon name="ellipse" className={styles["home__inner-icon"]} />
          <img
            className={styles["home__inner-image"]}
            src="../../../public/images/dev-girl 1.png"
            alt="My foto"
          />
        </div>
      </div>
    </>
  );
};
