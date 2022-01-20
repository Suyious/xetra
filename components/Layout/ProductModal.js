import { useRouter } from "next/router";
import styles from "./ProductModal.module.css";

const ProductModal = ({ children }) => {
  const router = useRouter();

  return (
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
  );
};

export default ProductModal;
