import styles from "../../styles/Redeem.module.css";
import StyledButton from "../../components/StyledButton";

const RedeemPage = () => {
  return (
    <div className={styles.container}>
      
        <StyledButton
          style={{margin: '1em'}}
          text="Download Deja View EP"
          type="link"
          href="https://drive.google.com/drive/folders/1efOcQAISw-DZvMXFaAW0smyi9V_or_j-?usp=share_link"
        />
        <StyledButton
          style={{margin: '1em'}}
          text="Download No Alarms EP"
          type="link"
          href="https://drive.google.com/drive/folders/1e2-XoXBwoG4tm84bv-wqSmqopA4TJ9J8?usp=sharing"
        />
        <StyledButton
          style={{margin: '1em'}}
          text="Download The Blue Single"
          type="link"
          href="https://drive.google.com/drive/folders/1--XdV0rNZDMFFAMqMpAc8y0ohCe0FKlr?usp=sharing"
        />
      </div>
  );
};

export default RedeemPage;
