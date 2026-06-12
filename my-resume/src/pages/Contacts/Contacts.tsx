import styles from "./Contacts.module.scss";
import { useEffect, useState } from "react";
import Loading from "@/loading";
import { ContactsPage } from "@/components/ContactsPage/ContactsPage";

const Contacts = () => {
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
        <div className={styles["contacts__loading"]}>
          <Loading />
        </div>
      ) : (
        <ContactsPage/>
      )}
    </div>
  );
};

export default Contacts;
