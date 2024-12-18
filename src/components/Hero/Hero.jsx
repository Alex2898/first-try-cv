import React from "react"; //useState to check the state of the menu for responsible design
import { getImageUrl } from "../../utils";
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Alessia</h1>
        <p className={styles.description}>I'm a full-stack developer.</p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>Contact me</a> {/* Allow to mail  */}
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero" className={styles.heroImg}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
