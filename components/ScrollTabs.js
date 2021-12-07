import {useEffect, useRef, useState} from "react"
import styles from "../styles/ScrollTabs.module.css";

const arr = [
  "Teen",
  "Queer",
  "Winters",
  "Aesthetics",
  "Goth",
  "Dads",
  "weebs",
  "winters",
  "summers",
  "weebs",
  "goth",
  "Goth",
  "Dads",
  "weebs",
  "winters",
  "summers",
  "weebs",
  "goth",
];

const ScrollTabs = () => {

  const scrollable = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [scrollRight, setScrollRight] = useState(true);

  const scrollHandler = (e) => {
    if(e.target.scrollLeft === 0){
      setScrollLeft(false);
    } else if(e.target.scrollLeft + e.target.offsetWidth === e.target.scrollWidth){
      setScrollRight(false);
    } else {
      setScrollLeft(true);
      setScrollRight(true);
    }
  } 
  
  // useEffect(()=>{
  //   scrollable.current.onscroll = scrollHandler;
  //   return () => {
  //     scrollable.current.onscroll = () => {};
  //   }
  // },[scrollable])
  
  const scroll = (action) =>{
    scrollable.current.scrollLeft+= action*160;
  }

  return (
    <div className={styles.ScrollTabs}>
      <div className={styles.ScrollTabs_label}>
        Categories
      </div>
      <div className={styles.ScrollTabs_scrollwrapper}>
        {scrollLeft && <div className={styles.ScrollTabs_previous} onClick={()=>scroll(-1)}>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.79932 13.3306L14.4399 19.9712C14.8989 20.4302 15.6411 20.4302 16.0952 19.9712L17.1987 18.8677C17.6577 18.4087 17.6577 17.6665 17.1987 17.2124L12.4917 12.5054L17.1987 7.79834C17.6577 7.33936 17.6577 6.59717 17.1987 6.14307L16.1001 5.02979C15.6411 4.5708 14.8989 4.5708 14.4448 5.02979L7.8042 11.6704C7.34033 12.1294 7.34033 12.8716 7.79932 13.3306V13.3306Z" fill="#C0C0C0"/></svg>
        </div>}
        <div ref={scrollable} onScroll={scrollHandler} className={styles.ScrollTabs_scrollable}>
          {arr.map((tab, i) => (
            <div key={i} className={styles.ScrollTabs_tabs}>
              {tab}
            </div>
          ))}
        </div>
        {scrollRight && <div className={styles.ScrollTabs_next} onClick={()=>scroll(1)}>
          <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2007 14.1001L10.5601 20.7407C10.1011 21.1997 9.35889 21.1997 8.90479 20.7407L7.80127 19.6372C7.34229 19.1782 7.34229 18.436 7.80127 17.9819L12.5083 13.2749L7.80127 8.56787C7.34229 8.10889 7.34229 7.3667 7.80127 6.9126L8.8999 5.79932C9.35889 5.34033 10.1011 5.34033 10.5552 5.79932L17.1958 12.4399C17.6597 12.8989 17.6597 13.6411 17.2007 14.1001Z" fill="#C0C0C0"/></svg>
        </div>}
      </div>
    </div>
  );
};

export default ScrollTabs;
