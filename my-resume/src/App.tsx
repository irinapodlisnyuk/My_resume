import styles from "./App.module.scss";
import { AppHeader } from "@/components/Header/Header";
import Home from "./pages/Home/Home";
import { AboutMe } from "./pages/AboutMe/AboutMe";
import { Projects } from "./pages/Projects/Projects";

function App() {
  return (
    <div className="root-wrapper">
      <AppHeader />

      <main>
        <section id="home" className={styles.home}>
          <Home />
        </section>

        <section id="aboutMe" className={styles.about}>
          <AboutMe />
        </section>

        <section id="projects">
          <Projects />
        </section>
      </main>
    </div>
  );
}

export default App;
