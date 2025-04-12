import styles from './ProjectsStyles.module.css';
import viberr from '../../../assets/viberr.png';
import freshBurger from '../../../assets/fresh-burger.png';
import hipsster from '../../../assets/hipsster.png';
import ProjectCard from '../../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">projects </h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={viberr} link="https://github.com/DARK-SPORT/Email/tree/main/transactional%20email"
        h3="viberr"
        p="Streaming App"
        />
        <ProjectCard src={freshBurger} link="https://github.com/DARK-SPORT/Email/tree/main/transactional%20email"
        h3="fresh burger"
        p="Streaming App"
        />
        <ProjectCard src={hipsster} link="https://github.com/DARK-SPORT/Email/tree/main/transactional%20email"
        h3="Hipsster"
        p="glasses shop"
        />
      </div>
    </section>
  );
}

export default Projects;
