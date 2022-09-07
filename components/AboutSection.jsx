import styles from "../styles/AboutSection.module.css";
import { Icon } from "@iconify/react";
import RevealAnimatedDiv from "./RevealAnimatedDiv";

const AboutSection = ({ aboutRef }) => {
  return (
    <section id="about" ref={aboutRef} className={styles.about}>
      <RevealAnimatedDiv>
      <iframe
       className={styles.theBlueVid}
        src="https://www.youtube.com/embed/x-dmUNnpey0?controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      </RevealAnimatedDiv>
      <RevealAnimatedDiv>
      <iframe
      className={styles.badAdviceVid}
        src="https://www.youtube.com/embed/v8FShmztRgo?controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
     </RevealAnimatedDiv>
    </section>
  );
};

export default AboutSection;
