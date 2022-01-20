import styles from "./ProductMain.module.css";
import Rating from "./Rating";
import Image from "next/image";
import Price from "./Price";
import Dropdown from "./Dropdown";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productAction"
import ProductMainSkeleton from "../skeletons/ProductMainSkeleton";

const ProductMain = ({ product_id }) => {
  const sizes = ["S", "M", "L", "XL", "XXL"];

  const dispatch = useDispatch();
  const {loading, product: {name, description, ratings, price} = {}} = useSelector((state) => state.productDetails);
  useEffect(()=>{
      dispatch(getProductDetails(product_id));
  },[dispatch, product_id])

  return (
    loading? <ProductMainSkeleton/>
    :<div className={styles.ProductMain_body}>
      <div className={styles.ProductMain_left}>
        <Image src="/ProductImageBig.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.ProductMain_right}>
        <div className={styles.ProductMain_right_title}>
          <div className={styles.ProductMain_right_pretitle}>
            Collection/Aesthetics
          </div>
          <div className={styles.ProductMain_right_maintitle}>
            {name}
          </div>
        </div>
        <div className={styles.ProductMain_right_ratings}>
          <Rating rating={ratings} size={1.3} />
          <span>Rated {ratings}</span>
        </div>
        <div className={styles.ProductMain_right_price}>
          <Price price={price} size={1.5} />
          <span>Inclusive of all taxes</span>
        </div>
        <div className={styles.ProductMain_right_product_variables}>
          <Dropdown name="size" options={sizes} />
        </div>
        <div className={styles.ProductMain_right_orderoptions}>
          <button className={styles.ProductMain_right_addToCartButton}>
            Add To Cart
            <svg
              width="25"
              height="25"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.76172 22.2637C8.38672 22.2637 7.27422 23.3887 7.27422 24.7637C7.27422 26.1387 8.38672 27.2637 9.76172 27.2637C11.1367 27.2637 12.2617 26.1387 12.2617 24.7637C12.2617 23.3887 11.1367 22.2637 9.76172 22.2637ZM3.51172 2.26367C2.82136 2.26367 2.26172 2.82332 2.26172 3.51367C2.26172 4.20403 2.82136 4.76367 3.51172 4.76367H3.79314C4.38467 4.76367 4.9233 5.10435 5.1768 5.63881L7.76324 11.0919C8.70413 13.0756 8.6338 15.3907 7.57422 17.3137C7.37422 17.6637 7.26172 18.0762 7.26172 18.5137C7.26172 19.8887 8.38672 21.0137 9.76172 21.0137H23.5117C24.2021 21.0137 24.7617 20.454 24.7617 19.7637C24.7617 19.0733 24.2021 18.5137 23.5117 18.5137H10.2867C10.1374 18.5137 10.0154 18.4136 9.98281 18.2756C9.97134 18.2271 9.98033 18.1767 9.99242 18.1284C10.0052 18.0771 10.0246 18.0278 10.0502 17.9815L10.2154 17.6822C10.7838 16.6528 11.8668 16.0137 13.0427 16.0137H20.4492C21.3867 16.0137 22.2117 15.5012 22.6367 14.7262L27.1117 6.61367C27.2117 6.43867 27.2617 6.22617 27.2617 6.01367C27.2617 5.32617 26.6992 4.76367 26.0117 4.76367H8.9054C8.0624 4.76367 7.2953 4.27661 6.93672 3.51367C6.57814 2.75074 5.81104 2.26367 4.96804 2.26367H3.51172ZM22.2617 22.2637C20.8867 22.2637 19.7742 23.3887 19.7742 24.7637C19.7742 26.1387 20.8867 27.2637 22.2617 27.2637C23.6367 27.2637 24.7617 26.1387 24.7617 24.7637C24.7617 23.3887 23.6367 22.2637 22.2617 22.2637Z"
                fill="black"
              />
            </svg>
          </button>
          <button className={styles.ProductMain_right_wishListbutton}>
            WishList
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0544 10.9251L18.0546 10.9249C19.6617 9.24031 22.2248 8.99981 23.9254 10.4719C25.9138 12.196 26.0211 15.3019 24.2356 17.1738L24.2355 17.1739L17.433 24.3094C17.1905 24.5635 16.8065 24.5635 16.564 24.3094L9.76173 17.1741C7.97936 15.3022 8.08668 12.1961 10.0751 10.4719C11.7759 8.99964 14.3423 9.24061 15.9456 10.9245L15.9461 10.9251L16.6387 11.6501L17.0003 12.0286L17.3618 11.6501L18.0544 10.9251Z"
                stroke="#cdcdcd"
                strokeWidth="1.3"
              />
            </svg>
          </button>
        </div>
        <div className={styles.ProductMain_right_deliveryoptions}>
          <div className={styles.ProductMain_right_pincodeinput_container}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2_2745)">
                <path
                  d="M11.5365 24.4956C4.44189 14.2105 3.125 13.1549 3.125 9.375C3.125 4.19731 7.32231 0 12.5 0C17.6777 0 21.875 4.19731 21.875 9.375C21.875 13.1549 20.5581 14.2105 13.4635 24.4956C12.9979 25.1682 12.0021 25.1681 11.5365 24.4956ZM12.5 13.2812C14.6574 13.2812 16.4062 11.5324 16.4062 9.375C16.4062 7.21763 14.6574 5.46875 12.5 5.46875C10.3426 5.46875 8.59375 7.21763 8.59375 9.375C8.59375 11.5324 10.3426 13.2812 12.5 13.2812Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_2745">
                  <rect width="25" height="25" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <input
              className={styles.ProductMain_right_pincodeinput}
              placeholder="Pincode"
              type="text"
            />
          </div>
          <button className={styles.ProductMain_right_buybutton}>
            Buy Now
          </button>
        </div>
        <div className={styles.ProductMain_right_product_details}>
          <span className={styles.ProductMain_right_product_detail_title}>
            Product Details
          </span>
          <div className={styles.ProductMain_right_product_detail_description}>
            <p>{description}</p>
          </div>
        </div>
        <div className={styles.ProductMain_right_product_reviews}></div>
      </div>
    </div>
  );
};

export default ProductMain;
