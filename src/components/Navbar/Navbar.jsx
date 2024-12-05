import React, { useState } from "react"; //useState to check the state of the menu for responsible design
import { getImageUrl } from "../../utils";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); //set navbar close by default
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen// if menu is true 
              ? getImageUrl("nav/closeIcon.png") //show close icon
              : getImageUrl("nav/menuIcon.png") //otherwise show menu button
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
