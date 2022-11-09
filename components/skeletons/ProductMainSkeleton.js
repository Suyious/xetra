import styles from "./Skeleton.module.css";

const RatingSkeleton = ({size}) => {
  const tmp = [1, 2, 3, 4, 5];
  return(
    <>
      {tmp.map((t) => <svg key={t} width={`${size*25}`} height={`${size*25}`} viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5409 7.53148L12.3563 11.961L7.46845 12.6736C6.59192 12.8007 6.24064 13.8813 6.87629 14.5002L10.4125 17.9461L9.57614 22.8139C9.42559 23.6937 10.3523 24.3528 11.1285 23.9413L15.5011 21.6429L19.8737 23.9413C20.6499 24.3495 21.5766 23.6937 21.426 22.8139L20.5896 17.9461L24.1259 14.5002C24.7615 13.8813 24.4102 12.8007 23.5337 12.6736L18.6459 11.961L16.4612 7.53148C16.0698 6.74193 14.9357 6.73189 14.5409 7.53148Z" fill="#171717"/>
    </svg>)}</>
  )
}

const ProductMainSkeleton = () => {
  return (
    <div className={styles.ProductMainSkeleton_body}>
      <div className={styles.ProductMainSkeleton_left}/>
      <div className={styles.ProductMainSkeleton_right}>
        <div className={styles.ProductMainSkeleton_right_title}>
          <div className={styles.ProductMainSkeleton_right_pretitle+" "+styles.ProductMainSkeleton_smallrectangle}/>
          <div className={styles.ProductMainSkeleton_right_maintitle+" "+styles.ProductMainSkeleton_largerectangle}/>
          <div className={styles.ProductMainSkeleton_right_maintitle+" "+styles.ProductMainSkeleton_largerectangle}/>
        </div>
        <div className={styles.ProductMainSkeleton_right_ratings}>
          <RatingSkeleton size={1.3} />
          <div className={styles.ProductMainSkeleton_right_ratings_text+" "+styles.ProductMainSkeleton_smallrectangle}/>
        </div>
        <div className={styles.ProductMainSkeleton_right_price}>
          <div className={styles.ProductMainSkeleton_right_price_big+" "+styles.ProductMainSkeleton_largerectangle}/>
          <div className={styles.ProductMainSkeleton_right_price_disclaimer+" "+styles.ProductMainSkeleton_smallrectangle}/>
        </div>
        <div className={styles.ProductMainSkeleton_right_product_variables}>
          <div className={styles.ProductMainSkeleton_right_product_variables_title+" "+styles.ProductMainSkeleton_smallrectangle}/>
          <div className={styles.ProductMainSkeleton_right_product_variables_drowdown+" "+styles.ProductMainSkeleton_largerectangle}/>
        </div>
        <div className={styles.ProductMainSkeleton_right_orderoptions}>
          <div className={styles.ProductMainSkeleton_right_addToCartButton+" "+styles.ProductMainSkeleton_largerectangle}/>
          <div className={styles.ProductMainSkeleton_right_wishListbutton+" "+styles.ProductMainSkeleton_largehollowrectangle}/>
        </div>
        <div className={styles.ProductMainSkeleton_right_deliveryoptions}>
          <div className={styles.ProductMainSkeleton_right_pincodeinput_container+" "+styles.ProductMainSkeleton_largehollowrectangle}/>
          <div className={styles.ProductMainSkeleton_right_buybutton+" "+styles.ProductMainSkeleton_largerectangle}/>
        </div>
        <div className={styles.ProductMainSkeleton_right_product_details}>
          <div className={styles.ProductMainSkeleton_right_product_detail_title}/>
          {Array(3).fill(1).map((_, i) => <div key={i} className={styles.ProductMainSkeleton_right_product_detail_description+" "+styles.ProductMainSkeleton_smallrectangle}/>)}
          <div className={styles.ProductMainSkeleton_right_product_detail_description_label+" "+styles.ProductMainSkeleton_smallrectangle}/>
          {Array(2).fill(1).map((_,i) => <div key={i} className={styles.ProductMainSkeleton_right_product_detail_description+" "+styles.ProductMainSkeleton_smallrectangle}/>)}
          <div className={styles.ProductMainSkeleton_right_product_detail_description_label+" "+styles.ProductMainSkeleton_smallrectangle}/>
        </div>
        <div className={styles.ProductMainSkeleton_right_product_reviews}></div>
      </div>
    </div>
  );
};

export default ProductMainSkeleton;
