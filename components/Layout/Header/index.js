import Image from "next/image"
import styles from "./style.module.css";

const Header = ({children, background}) => {

  return (
    <div className={styles.Header}>
      <div className={styles.Header_Background}>
        <Image className={styles.Header_Background_image} placeholder="blur" layout="fill" objectFit="cover" src={background} alt="" />
        <div className={styles.Header_Background_overlay}/>   
        <div className={styles.Header_gradient}/>
      </div>
      <div className={styles.Header_content}>
        { children }
      </div>
    </div>
  );
};

export default Header;
