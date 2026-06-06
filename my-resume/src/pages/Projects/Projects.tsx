import styles from "./Projects.module.scss";
import { ProjectsPage} from "@/components/ProjectsPage/ProjectsPage";
import Loading from "@/loading";
import { useEffect, useState } from "react";

export const Projects = () => {
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
          <div className={styles["projects__loading"]}>
            <Loading />
          </div>
        ) : (
            <ProjectsPage />
        )}
      </div>
  );
};
