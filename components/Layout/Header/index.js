import Image from "next/image"
import Background from "../../../public/Background.jpg"
import styles from "./style.module.css";

const Header = () => {

  return (
    <div className={styles.Header}>
      <div className={styles.Header_Background}>
        <Image className={styles.Header_Background_image} placeholder="blur" layout="fill" objectFit="cover" src={Background} alt="" />
        <div className={styles.Header_Background_overlay}/>   
      </div>
      <div className={styles.Header_gradient}/>
    </div>
  );
};

export default Header;
