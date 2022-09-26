import styles from '../styles/BandSection.module.css'
import Image from 'next/image'

const BandSection = () => {

  return (
    <div className={styles.band} id="band">
      <p>No Alarms was born in Texas as the solo passion project of multi-instrumentalist Andrew Boles, bloomed into a Detroit-based, fully-fledged, four-piece, and is now straddling Detroit and Austin. No Alarms is blending the lines between modern indie/alt pop and new wave revival, and building an engrossing live show from the ground up. Their 2018 debut No Alarms EP according to Paste Magazine and Skope, &quot;delivers infectious, arena sized pop hooks supported by an electro-pop-rockin foundation…and is an album you NEED to hear.&quot; Songs from their debut No Alarms EP have appeared on ABC and FOX TV shows, and the EP was the 13th most added record on NACC college radio charts its debut week, peaking at #132 on the NACC 200. </p>
      <h4>Vocals, Guitar, Synth / Andrew Boles</h4>
      <h4>Drums, Percussion / Jack Reedy</h4>
      <h4>Bass, Bass Synth, Percussion / Jordan McLanson</h4>
      <div className={styles.imageContainer}>
      <Image src='/band1.jpeg' layout="responsive" width={7704} height={5139} alt="band photo"/>
      <Image src='/band2.jpeg' layout="responsive" width={3350} height={2550} alt="band photo"/>
      <Image src='/band3.jpeg' layout="responsive" width={7394} height={5292} alt="band photo"/>
      <Image src='/band4.jpeg' layout="responsive" width={7272} height={4850} alt="band photo"/>
      </div>
    </div>
  )
}

export default BandSection