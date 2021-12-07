import { useState } from "react";
import Image from "next/image"
import Background from "../public/Background.jpg"
import styles from "../styles/Header.module.css";

const Header = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className={styles.Header}>
      <div className={styles.Header_Background}>
        <Image className={styles.Header_Background_image} placeholder="blur" layout="fill" objectFit="cover" src={Background} alt="" />
        <div className={styles.Header_Background_overlay}/>   
      </div>
      {login ? (
        <div className={styles.Header_container}>
            <div className={styles.Header_container_heading}>Your one-stop for casuals is one click away</div>
            <button className={styles.Header_container_button}>
                Sign up with Google
                <svg width="30" height="28" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_707:301)"><path d="M39.8119 21.5521C39.8119 32.8248 32.0501 40.8471 20.5877 40.8471C9.59783 40.8471 0.722656 32.0202 0.722656 21.09C0.722656 10.1599 9.59783 1.33301 20.5877 1.33301C25.9384 1.33301 30.4401 3.28481 33.9084 6.5033L28.5016 11.6736C21.4287 4.88609 8.27616 9.98468 8.27616 21.09C8.27616 27.9811 13.8111 33.5657 20.5877 33.5657C28.4536 33.5657 31.4013 27.9572 31.8659 25.0494H20.5877V18.254H39.4995C39.6837 19.2657 39.8119 20.2376 39.8119 21.5521Z" fill="#1F2123"/></g><defs><clipPath id="clip0_707:301"><rect width="39.0892" height="40.7887" fill="white" transform="translate(0.722656 0.695312)"/></clipPath></defs></svg>
            </button>
            <div className={styles.Header_container_subtext}>or use email to <span className={styles.Header_subtext_span}>Sign up</span></div>
        </div>
      ) : (
        <div className={styles.Header_container}>
            <div className={styles.Header_container_searchbox}>
                <input type="text" className={styles.Header_container_searchbar} placeholder="Search what you need.."/>
                <div className={styles.Header_container_searchicon}>
                  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_664:1777)"><path d="M29.7129 26.1576L25.6236 22.0684C25.4391 21.8838 25.1889 21.7812 24.9264 21.7812H24.2578C25.3898 20.3334 26.0625 18.5123 26.0625 16.5312C26.0625 11.8186 22.2439 8 17.5312 8C12.8186 8 9 11.8186 9 16.5312C9 21.2439 12.8186 25.0625 17.5312 25.0625C19.5123 25.0625 21.3334 24.3898 22.7812 23.2578V23.9264C22.7812 24.1889 22.8838 24.4391 23.0684 24.6236L27.1576 28.7129C27.5432 29.0984 28.1666 29.0984 28.548 28.7129L29.7088 27.5521C30.0943 27.1666 30.0943 26.5432 29.7129 26.1576ZM17.5312 21.7812C14.6314 21.7812 12.2812 19.4352 12.2812 16.5312C12.2812 13.6314 14.6273 11.2812 17.5312 11.2812C20.4311 11.2812 22.7812 13.6273 22.7812 16.5312C22.7812 19.4311 20.4352 21.7812 17.5312 21.7812Z" fill="#4B4B4B"/></g><defs><clipPath id="clip0_664:1777"><rect width="21" height="21" fill="white" transform="translate(9 8)"/></clipPath></defs></svg>
                </div>
            </div>
            <div className={styles.Header_container_subtext}></div>
        </div>
      )}
      <div className={styles.Header_gradient}/>
    </div>
  );
};

export default Header;
