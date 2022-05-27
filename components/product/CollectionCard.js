import React from "react";
import styles from "../../styles/Collections.module.css";
import Link from "next/link";
import Image from "next/image";

const CollectionCard = ({size, src}) => {
  return (
    <div className={styles.CollectionCard_main}>
      <div className={styles.CollectionCard_container}>
        <Link href={`/collection/`}>
          <a><div className={styles.CollectionsCard_image_container}>
              <Image src={src} objectFit="cover" width={1680 * (size/4)} height="360"/>
              <div className={styles.Collection_card_image_overlay} />
          </div></a>
        </Link>
        {/* <div className={styles.CollectionCard_Text}>
          <Link href="/">
            <a><div className={styles.CollectionCard_Title}>Winter Collections</div></a>
          </Link>
          <div className={styles.CollectionCard_bottom}>
            <div className={styles.CollectionCard_bottom_left}>70% off</div>
            <Link href="/"><a className={styles.CollectionCard_bottom_button}>Explore</a></Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};




export default CollectionCard;
