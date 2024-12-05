import React from "react"; //useState to check the state of the menu for responsible design
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="About"
          className={styles.aboutImg}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Cursor Icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a front-end developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/serverIcon.png")}
              alt="Server Icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/uiIcon.png")}
              alt="UI Icon"
            />
            <div>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and created design system
                as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
