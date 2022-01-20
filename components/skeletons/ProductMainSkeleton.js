import styles from "./Skeleton.module.css";

const RatingSkeleton = ({size}) => {
  // return(
  //   Array[5].fill(<svg
  //     width={`${size*25}`}
  //     height={`${size*25}`}
  //     viewBox="0 0 18 18"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <g clipPath="url(#clip0_42_17)">
  //       <path
  //         d="M8.44823 4.37209L7.19875 6.90549L4.4032 7.31306C3.90188 7.38577 3.70096 8.00382 4.06452 8.3578L6.08704 10.3287L5.60867 13.1127C5.52257 13.616 6.05259 13.9929 6.49652 13.7576L8.9974 12.443L11.4983 13.7576C11.9422 13.991 12.4722 13.616 12.3861 13.1127L11.9078 10.3287L13.9303 8.3578C14.2938 8.00382 14.0929 7.38577 13.5916 7.31306L10.796 6.90549L9.54656 4.37209C9.32268 3.92051 8.67402 3.91477 8.44823 4.37209Z"
  //         fill="white"
  //       />
  //     </g>
  //     <defs>
  //       <clipPath id="clip0_42_17">
  //         <rect
  //           width="11.0215"
  //           height="11.0215"
  //           fill="white"
  //           transform="translate(3.48438 3.41895)"
  //         />
  //       </clipPath>
  //     </defs>
  //   </svg>)
  // )
  return(
    Array(5).fill(<svg width={`${size*25}`} height={`${size*25}`} viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5409 7.53148L12.3563 11.961L7.46845 12.6736C6.59192 12.8007 6.24064 13.8813 6.87629 14.5002L10.4125 17.9461L9.57614 22.8139C9.42559 23.6937 10.3523 24.3528 11.1285 23.9413L15.5011 21.6429L19.8737 23.9413C20.6499 24.3495 21.5766 23.6937 21.426 22.8139L20.5896 17.9461L24.1259 14.5002C24.7615 13.8813 24.4102 12.8007 23.5337 12.6736L18.6459 11.961L16.4612 7.53148C16.0698 6.74193 14.9357 6.73189 14.5409 7.53148Z" fill="#171717"/>
    </svg>)
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
          {Array(3).fill(<div className={styles.ProductMainSkeleton_right_product_detail_description+" "+styles.ProductMainSkeleton_smallrectangle}/>)}
          <div className={styles.ProductMainSkeleton_right_product_detail_description_label+" "+styles.ProductMainSkeleton_smallrectangle}/>
          {Array(2).fill(<div className={styles.ProductMainSkeleton_right_product_detail_description+" "+styles.ProductMainSkeleton_smallrectangle}/>)}
          <div className={styles.ProductMainSkeleton_right_product_detail_description_label+" "+styles.ProductMainSkeleton_smallrectangle}/>
        </div>
        <div className={styles.ProductMainSkeleton_right_product_reviews}></div>
      </div>
    </div>
  );
};

export default ProductMainSkeleton;
