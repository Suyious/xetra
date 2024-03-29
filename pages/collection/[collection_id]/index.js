import styles from "./style.module.css";
import Head from "next/head"
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Shop from "../../../components/Shop";
import { useEffect } from "react";
import { getCollectionProducts } from "../../../redux/actions/collectionAction";
import ProductModal from "../../../components/Layout/Modal/ProductModal";
import ProductMain from "../../../components/product/ProductMain";

const Collection = () => {

  const router = useRouter();
  const {collection_id, product_id} = router.query;

  const dispatch = useDispatch();
  const {loading, error, products, name, productCount } = useSelector(
    (state) => state.collectionProducts
  )

  useEffect(() => {
    if(collection_id) dispatch(getCollectionProducts(collection_id))
  },[dispatch, collection_id])

  return (
    <div className={styles.Collection_Shop_body}>
      <Head>
        <title>{name? name: "Loading"} - Xetra</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Shop CollectionName={name} loading={loading} error={error} products={products} productCount={productCount}/>
      {product_id && <ProductModal>
        <ProductMain product_id={product_id}/>
      </ProductModal>}
    </div>
  );
};

export default Collection;
