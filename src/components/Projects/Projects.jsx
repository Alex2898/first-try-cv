import React from "react"; //useState to check the state of the menu for responsible design
import { ProjectCard } from './ProjectCard';
import styles from "./Projects.module.css";

import projects from "../../data/projects.json";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((projectItem, id) => {
          return (
            <ProjectCard  key={id} projectItem = {projectItem}/> //Render all the code to another component - pass the value needed
          );
        })}
      </div>
    </section>
  );
};
