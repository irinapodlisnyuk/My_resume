import { useLocation } from "react-router-dom";
import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import Loading from "@/loading";
import { HomePage } from "@/components/HomePage/HomePage";
import { resumeData } from "@/data/resumeData"; 

const Home = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <section className={styles.home}>
      <div className="container">
        {loading ? (
          <div className={styles["home__loading"]}>
            <Loading />
          </div>
        ) : (
          <div className={styles.home__wrapper}>
          <HomePage info={resumeData} /> 
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
