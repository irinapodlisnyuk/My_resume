import styles from "./AboutMe.module.scss";
import { AboutMePage } from "@/components/AboutMePage/AboutMePage";
import Loading from "@/loading";
import { useEffect, useState } from "react";

export const AboutMe = () => {
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
          <div className={styles["about__loading"]}>
            <Loading />
          </div>
        ) : (
            <AboutMePage />
        )}
      </div>
  );
};
