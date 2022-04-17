import styles from "../../styles/products.module.css";
import Image from "next/image";
import Rating from "./Rating";
import { useState } from "react";
import Link from "next/link"
import Price from "./Price";
import { useRouter } from "next/router";

const ProductCard = ({ product }) => {
  const { name, price, ratings, description } = product;
  const [liked, setLiked] = useState(false);
  
  const {pathname, query} = useRouter();
  const prefix = ""

  const queryParams = Object.keys(query);
  queryParams.forEach((key,i)=>{
      prefix+=`${key}=${query[key]}&`;
  })

  return (
    <div className={styles.Product_card}>
      <div className={styles.Product_card_container}>
        <Link key={product._id} href={`${pathname}?${prefix}product_id=${product._id}`} as={`products/${product._id}`} scroll={false}>
          <a><div className={styles.Product_card_image_container}>
            <Image src="/ProductImage.jpg" objectFit="cover" width="273z" height="377" />
            <div className={styles.Product_card_image_overlay} />
          </div></a>
        </Link>
        <div className={styles.Product_card_rating}>
          <div className={styles.Product_card_rating_overlay} />
          <div className={styles.Product_card_rating_stars}>
            <Rating rating={ratings} />
          </div>
        </div>
        <div className={styles.Product_card_details}>
          <div className={styles.Product_card_details_overlay} />
          <div className={styles.Product_card_details_text}>
            <div className={styles.Product_card_details_top}>
              <div className={styles.Product_card_details_price}>
                <Price price={price}/>
              </div>
              <div
                onClick={() => setLiked(!liked)}
                className={styles.Product_card_details_like}
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill={liked ? "#fff" : "none"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.0544 10.9251L18.0546 10.9249C19.6617 9.24031 22.2248 8.99981 23.9254 10.4719C25.9138 12.196 26.0211 15.3019 24.2356 17.1738L24.2355 17.1739L17.433 24.3094C17.1905 24.5635 16.8065 24.5635 16.564 24.3094L9.76173 17.1741C7.97936 15.3022 8.08668 12.1961 10.0751 10.4719C11.7759 8.99964 14.3423 9.24061 15.9456 10.9245L15.9461 10.9251L16.6387 11.6501L17.0003 12.0286L17.3618 11.6501L18.0544 10.9251Z"
                    stroke="white"
                    strokeWidth="1.3"
                  />
                </svg>
              </div>
            </div>
            <div className={styles.Product_card_details_bottom}>
              <span>
                {name} : {description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
