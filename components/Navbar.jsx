import styles from "../styles/Navbar.module.css";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="#music">music</a>
        </li>
        <li>
          <a href="#tour">tour</a>
        </li>
        <li>
          <a href="#band">band</a>
        </li>
        <li>
          <a href="https://noalarms.store">store</a>
        </li>
        <li>
          <a href="https://urlgeni.us/spotify/ENu3">
            <Icon icon="bi:spotify"/>

          </a>
        </li>
        <li>
          <a href="https://instagram.com/noalarmsmusic">
            <Icon
              icon="icon-park-outline:instagram"/>
          </a>
        </li>
        <li>
          <a href="https://urlgeni.us/facebook/pLEG">
            <Icon icon="akar-icons:facebook-fill"/>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
