import { useRouter } from "next/router";
import ProductMain from "../../../components/product/ProductMain";
import styles from "./style.module.css";

const ProductOne = () => {
  const router = useRouter();
  // product_id can initially be undefined
  const { product_id } = router.query;

  return (
    <div className={styles.ProductPage_body}>
      <div className={styles.ProductPage_wrapper}>
        {product_id && <ProductMain product_id={product_id} /> }
      </div>
    </div>
  );
};

export default ProductOne;
