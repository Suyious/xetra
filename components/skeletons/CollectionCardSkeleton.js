import React from "react";
import styles from "./Skeleton.module.css";

const CollectionCard = ({size, src}) => {

  const cards = [];
  for (let i = 0; i < size; i++) {
    cards.push(
      <div className={styles.CollectionCard_container_card}></div>
    );
  }

  return (
    <div className={styles.CollectionCard_main}>
      <div className={styles.CollectionCard_container + " " + sizestyle(size)}>{cards}</div>
    </div>
  );
};




export default CollectionCard;
