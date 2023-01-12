import styles from "./styles.module.css"
import Image from "next/image"
import Rating from "../../Rating"

const HomeProductCard = ({name, rating, image}) => {
  return(
    <div className={styles.HomeProductCard_main}>
      <div className={styles.HomeProductCard_image}>
        <Image src={image} layout="fill" objectFit="cover"/>
      </div>
      <div className={styles.HomeProductCard_absolute}>
        <Rating rating={rating} size={1.5}/>
        <div className={styles.HomeProductCard_title}>{name}</div>
      </div>
    </div>
  )
}
export default HomeProductCard
