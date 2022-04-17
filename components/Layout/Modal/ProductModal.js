import { useRouter } from "next/router";
import styles from "./Modal.module.css";

const ProductModal = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <div className={styles.ProductModal_body}>
        <div onClick={() => router.back()} className={styles.clickToExit} />
        <div className={styles.ProductModal_main}>
          <div onClick={() => router.back()} className={styles.ProductModal_closebutton}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="10.8284"
                y1="9"
                x2="29.2132"
                y2="27.3848"
                stroke="#E6E6E6"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <line
                x1="2"
                y1="-2"
                x2="28"
                y2="-2"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 32.2148 9)"
                stroke="#E6E6E6"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          {children}
        </div>
      </div>
      <div className={styles.ProductModal_orderoptions}>
          <button className={styles.ProductModal_addToCartButton}>
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
          <button className={styles.ProductModal_wishListbutton}>
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
    </>
  );
};

export default ProductModal;
