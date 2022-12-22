import styles from "../styles/ContactSection.module.css";
import StyledButton from "./StyledButton";
import { useForm, ValidationError } from "@formspree/react";
import RevealAnimatedDiv from "./RevealAnimatedDiv";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect} from 'react'

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mzbwrvaa");
  const [loaded, setLoaded] = useState(false)

 useEffect(()=>{

    setLoaded(true)
  
 },[])

  return (
    <footer id="contact" className={styles.contact}>
      <AnimatePresence>
          <RevealAnimatedDiv
            key={"contactForm"}
            className={styles.mainContainer}
          >
            <p>
             join our email list to stay in the know on shows, videos, new music, and merch
              <svg
                viewBox="0 0 20 20"
                stroke="#cf9535"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="css-i6dzq1"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </p>
            {/* <form onSubmit={handleSubmit}>
              <label htmlFor="name">name</label>
              <input id="contactname" type="text" name="contactname" required />
              <ValidationError
                prefix="contactname"
                field="contactname"
                errors={state.errors}
              />
              <label htmlFor="email">email address</label>
              <input id="email" type="email" name="email" required/>
              <ValidationError
                prefix="email"
                field="email"
                errors={state.errors}
              />
              <StyledButton
                text="submit"
                type="submit"
                disabled={state.submitting}
              />
            </form> */}
           {loaded ? <div className="klaviyo-form-Rqqdqw"/> : null}
          </RevealAnimatedDiv>
  
      </AnimatePresence>
          <a className={styles.contactEmail} href="mailto:booking@noalarmsmusic.com">booking@noalarmsmusic.com</a>
          <a className={styles.signature} href="https://andrewboles.com" target="_blank" rel="noreferrer">©2022 andrew boles</a>
    </footer>
  );
};

export default ContactSection;
