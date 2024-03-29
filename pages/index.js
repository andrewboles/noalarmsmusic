import styles from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Dots from "../components/Dots";
import Navbar from "../components/Navbar";
import StyledButton from "../components/StyledButton";
import { useRef } from "react";
import ContactSection from "../components/ContactSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import TourSection from "../components/TourSection";
import BandSection from "../components/BandSection";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home({ contest }) {
  const aboutRef = useRef(null);
  const { scrollY } = useScroll();
  const [showThanks, setShowThanks] = useState(false);

  const [pastHeroSection, setPastHeroSection] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowThanks(true);
    }, 3000);
  }, []);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest < window.innerHeight * 0.65 && pastHeroSection) {
        setPastHeroSection(false);
      } else if (latest > window.innerHeight * 0.65 && !pastHeroSection) {
        setPastHeroSection(true);
      }
    });
  }, [scrollY, pastHeroSection]);
  return (
    <>
      <script
        async
        type="text/javascript"
        src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=VE8yCQ"
      />
      <Canvas
        style={{
          position: "fixed",
          height: "100vh",
          width: "100vw",
          zIndex: -1,
        }}
        orthographic
        camera={{ zoom: 20 }}
      >
        <color attach="background" args={["black"]} />
        <Dots {...{ pastHeroSection }} />
      </Canvas>
      <div className={styles.hero}>
        <div className={styles.heroTextBackground}>
          <h3 className={styles.heroText}>
            {!contest
              ? "no alarms"
              : showThanks
              ? "thanks for entering, good luck!"
              : ""}
          </h3>
        </div>

        <StyledButton
          text="listen"
          style={{ position: "absolute", zIndex: 1, bottom: "10vh" }}
          onClick={() => aboutRef.current.scrollIntoView()}
        />
      </div>
      <Navbar />
      <AboutSection {...{ aboutRef }} />
      <ProjectsSection />
      <BandSection />
      <TourSection />
      <ContactSection />
    </>
  );
}
