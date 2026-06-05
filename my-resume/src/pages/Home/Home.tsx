import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import Loading from "@/loading";
import { HomePage } from "@/components/HomePage/HomePage";
import { resumeData } from "@/data/resumeData";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className={styles["home__loading"]}>
          <Loading />
        </div>
      ) : (
        <HomePage info={resumeData} />
      )}
    </div>
  );
};

export default Home;
