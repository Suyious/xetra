import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";

const CollectionCard = ({size, src}) => {

  const cards = Array.from({length: size}, (_, i) => (
    <Link key={i} href={`/collection/`}>
      <a><div className={styles.CollectionsCard_image_container}>
        <Image src={src} objectFit="cover" width={1920 / size} height="360"/>
        <div className={styles.Collection_card_image_overlay} />
      </div></a>
    </Link>))

  const sizestyle = (size) => {
    if(size == 1) return styles.CollectionCard_container_size1;
    if(size == 2) return styles.CollectionCard_container_size2;
    if(size == 3) return styles.CollectionCard_container_size3;
    if(size == 4) return styles.CollectionCard_container_size4;
    else return "";
  }

  return (
    <div className={styles.CollectionCard_main}>
      <div className={styles.CollectionCard_container + " " + sizestyle(size)}>{cards}</div>
    </div>
  );
};




export default CollectionCard;
