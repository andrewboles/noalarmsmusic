import styles from "../styles/ProjectsSection.module.css";
import MusicCard from "./MusicCard";

const theBlueLinks = {
  spotify: "",
  appleMusic: "",
  bandcamp: "",
  merchStore:"https://noalarms.store"
}
const dejaViewLinks = {
  spotify: "",
  appleMusic: "",
  bandcamp: "",
  merchStore:"https://noalarms.store"
}

const selfTitledLinks = {
  spotify: "",
  appleMusic: "",
  bandcamp: "",
  merchStore:"https://noalarms.store"
}

const ProjectsSection = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>music</h2>
        <MusicCard title="The Blue" imgUrl="/theblue.jpg" links={theBlueLinks} />
        <MusicCard title="Deja View" imgUrl="/dejaview.jpg" links={dejaViewLinks} />
        <MusicCard title="No Alarms" imgUrl="/noalarms.jpg" links={selfTitledLinks} />
    </section>
  );
};

export default ProjectsSection;
