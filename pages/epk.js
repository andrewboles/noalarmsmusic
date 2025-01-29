import styles from "../styles/EPK.module.css";
import RevealAnimatedDiv from "../components/RevealAnimatedDiv";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Canvas } from "@react-three/fiber";
import Dots from "../components/Dots";

const EPK = () => {
  return (
    <>
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
        <Dots pastHeroSection={true} />
      </Canvas>
      <div className={styles.container}>
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={180} height={65} />
        </Link>
        <div className={styles.highlightContainer}>
          <div className={styles.highlight}>
            <Image
              src="/live1.jpg"
              layout="responsive"
              width={2000}
              height={1333}
              alt="band photo"
            />
          </div>
          <div className={styles.accomp}>
            <p className={styles.highlightText}>
              {`No Alarms is an Austin-based band blending the lines between
              modern indie/alt pop and new wave revival. Currently a 2-piece
              outfit with an exploration of live-looping and powerful LED-based
              visual effects, they've built an engrossing live show from the
              ground up.`}
            </p>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <li>
                <h2 className={styles.accompHead}>
                  <Icon
                    icon="solar:tv-line-duotone"
                    style={{ marginRight: 5 }}
                  />
                  Songs Featured on FOX, NBC, & ABC TV Shows
                </h2>
                <h2 className={styles.accompHead}>
                  <Icon icon="codicon:radio-tower" style={{ marginRight: 5 }} />
                  Charted on NACC College Radio
                </h2>
                <h2 className={styles.accompHead}>
                  <Icon icon="cil:bus-alt" style={{ marginRight: 5 }} />
                  Toured Midwest/Northeast US in 2019
                </h2>
              </li>
            </ul>
            <ul>
              <li>
                <a href="mailto:booking@noalarmsmusic.com">
                  booking@noalarmsmusic.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/noalarmsmusic"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon
                    icon="icon-park-outline:instagram"
                    style={{ marginRight: 5 }}
                  />
                  @noalarmsmusic
                  <Icon icon="material-symbols:verified" color="#0095f6" />
                </a>
              </li>
              <li>
                <a
                  href="https://urlgeni.us/facebook/pLEG"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon="akar-icons:facebook-fill" fontSize={42} />
                </a>
              </li>
              <li>
                <a href="https://urlgeni.us/spotify/ENu3">
                  <Icon icon="bi:spotify" fontSize={42} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>LIVE VIDEO</h1>
        </div>
        <div className={styles.musicVidContainer}>
          <RevealAnimatedDiv>
            <iframe
              className={styles.liveVid}
              src="https://www.youtube.com/embed/DuisN-nptkU?si=g8iMf9ZRqIaH9THH?controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </RevealAnimatedDiv>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>MUSIC VIDEOS</h1>
          </div>
          <RevealAnimatedDiv>
            <iframe
              className={styles.atVid}
              src="https://www.youtube.com/embed/pDQ5YKkrn6I?si=bPUoiR7T-k3WREyP?controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            />
          </RevealAnimatedDiv>
          <RevealAnimatedDiv>
            <iframe
              className={styles.theBlueVid}
              src="https://www.youtube.com/embed/x-dmUNnpey0?controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            />
          </RevealAnimatedDiv>
          <RevealAnimatedDiv>
            <iframe
              className={styles.badAdviceVid}
              src="https://www.youtube.com/embed/v8FShmztRgo?controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            />
          </RevealAnimatedDiv>
          <RevealAnimatedDiv>
            <iframe
              className={styles.badAdviceVid}
              src="https://www.youtube.com/embed/0MPA5pv903o?controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            />
          </RevealAnimatedDiv>
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>MUSIC</h1>
        </div>
        <div className={styles.musicContainer}>
          <iframe
            src="https://open.spotify.com/embed/playlist/2Ugf5ukRjL85N9lgwl5u53?utm_source=generator"
            width="80%"
            height="450"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: "12px" }}
          />
          <iframe
            id="embedPlayer"
            src="https://embed.music.apple.com/us/album/deja-view-ep/1457570382?app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto"
            height="450px"
            frameBorder="0"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
            allow="autoplay *; encrypted-media *; clipboard-write"
            style={{
              width: "80%",
              maxwidth: "660px",
              overflow: "hidden",
              borderRadius: "10px",
              transform: 'translateZ("0px")',
              animation: "2s ease 0s 6 normal none running loading-indicator",
              backgroundColor: "rgb(228, 228, 228)",
            }}
          />
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>BIO</h1>
        </div>
        <div className={styles.band} id="band">
          <p>
            No Alarms was born in Texas as the solo passion project of
            multi-instrumentalist Andrew Boles, bloomed into a Detroit-based,
            fully-fledged, five-piece, and is now based Austin as a two-piece
            integrating live-looping. No Alarms is blending the lines between
            modern indie/alt pop and new wave revival, and building an
            engrossing live show from the ground up. Their 2018 debut No Alarms
            EP according to Paste Magazine and Skope, &quot;delivers infectious,
            arena sized pop hooks supported by an electro-pop-rockin
            foundation…and is an album you NEED to hear.&quot; Songs from their
            debut No Alarms EP have appeared on ABC, NBC, and FOX TV shows, and
            the EP was the 13th most added record on NACC college radio charts
            its debut week, peaking at #132 on the NACC 200.{" "}
          </p>
          <h4>Vocals, Guitar, Synth, Bass / Andrew Boles</h4>
          <h4>Drums, Percussion / Jack Reedy</h4>
          <div className={styles.imageContainer}></div>
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>PHOTOS</h1>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imgFrame}>
            <Image
              src="/img1.jpg"
              layout="responsive"
              width={7704}
              height={5139}
              alt="band photo"
            />
          </div>
          <div className={styles.imgFrame}>
            <Image
              src="/img2.jpg"
              layout="responsive"
              width={7704}
              height={5139}
              alt="band photo"
            />
          </div>
          <div className={styles.imgFrame}>
            <Image
              src="/img3.jpg"
              layout="responsive"
              width={6424}
              height={5139}
              alt="band photo"
            />
          </div>
          <div className={styles.imgFrame}>
            <Image
              src="/img4.jpg"
              layout="responsive"
              width={3300}
              height={2550}
              alt="band photo"
            />
          </div>
          <div className={styles.imgFrame}>
            <Image
              src="/img5.jpg"
              layout="responsive"
              width={7704}
              height={5139}
              alt="band photo"
            />
          </div>
          <div className={styles.imgFrame}>
            <Image
              src="/img6.jpg"
              layout="responsive"
              width={7704}
              height={5139}
              alt="band photo"
            />
          </div>
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>TOUR</h1>
        </div>
        <a
          href="https://www.songkick.com/artists/9522224"
          className="songkick-widget"
          data-theme="dark"
          data-track-button="on"
          data-detect-style="off"
          data-background-color="rgb(0,0,0,1)"
          data-font-color="rgb(255,255,255,1)"
          data-button-bg-color="rgb(255,255,255,1)"
          data-button-text-color="rgb(0,0,0,1)"
          data-locale="en"
          data-other-artists="on"
          data-share-button="on"
          data-country-filter="on"
          data-rsvp="on"
          data-request-show="on"
          data-past-events="on"
          data-past-events-offtour="on"
          data-remind-me="off"
        ></a>
        <script async src="//widget-app.songkick.com/injector/9522224" />
      </div>
    </>
  );
};

export default EPK;
