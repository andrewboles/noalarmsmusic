import styles from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Dots from "../components/Dots";
import Navbar from "../components/Navbar";
import StyledButton from "../components/StyledButton";
import { useRef } from "react";
import ContactSection from "../components/ContactSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import { useScroll  } from "framer-motion";
import { useEffect,useState } from "react";

export default function Home() {
  const aboutRef = useRef(null);
  const { scrollY } = useScroll()

  

  const [pastHeroSection, setPastHeroSection] = useState(false)

useEffect(() => {
  return scrollY.onChange((latest) => {
    if(latest < window.innerHeight*0.7 && pastHeroSection){
      setPastHeroSection(false)
    } else if(latest > window.innerHeight*0.7 && ! pastHeroSection){
      setPastHeroSection(true)
    }
  })
}, [scrollY, pastHeroSection])
  return (
    <>
    <Canvas
          style={{position: 'fixed', height: '100vh', width: '100vw', zIndex: -1}}
          orthographic
          camera={{ zoom: 20 }}
        >
          <color attach="background" args={["black"]} />
          <Dots {...{pastHeroSection}}/>
        </Canvas>
      <div className={styles.hero}>
        
        <div className={styles.heroTextBackground}>
          <h3 className={styles.heroText}>
            no alarms
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
        <ContactSection />
      
    </>
  );
}
