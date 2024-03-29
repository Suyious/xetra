import styles from "./style.module.css";
import Head from "next/head";
import Shop from "../../components/Shop";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/productAction";
import { useRouter } from "next/router";
import ProductMain from "../../components/product/ProductMain";
import ProductModal from "../../components/Layout/Modal/ProductModal";

const Products = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productCount, resultsInQuery } = useSelector(
    (state) => state.products
  );

  const router = useRouter();
  const { keyword, product_id, page, category, ratings } = router.query;
  const { "price[gte]": priceg, "price[lte]": pricel } = router.query;

  useEffect(() => {
    dispatch(
      getAllProducts(
        keyword || "",
        page || 1,
        [priceg || "0", pricel || "1000000"],
        category || "",
        ratings || 0
      )
    );
  }, [dispatch, keyword, page, priceg, pricel, category, ratings]);

  // useEffect(()=>{
  //   if(product_id) document.querySelector("body").style.setProperty("overflow","hidden");
  //   if(!product_id) document.querySelector("body").style.setProperty("overflow","");
  // },[product_id])

  return (
    <div className={styles.Products_body}>
      <Head>
        <title>Trending - Xetra</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Shop
        loading={loading}
        error={error}
        products={products}
        productCount={productCount}
        resultsInQuery={resultsInQuery}
      />
      {product_id && (
        <ProductModal>
          <ProductMain product_id={product_id} />
        </ProductModal>
      )}
    </div>
  );
};

export default Products;
