import styles from "../../styles/Shop.module.css";
import ProductCard from "../product/ProductCard";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";

const Catalog = ({ loading, error, products, setSideBarOpen, sideBarOpen }) => {
  return (
    <div className={styles.Shop_catalog}>
      <div className={styles.Shop_catalog_filters}>
        <div onClick={()=>setSideBarOpen(!sideBarOpen)} className={styles.Shop_catalog_filters_button}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2_1768)">
              <path
                d="M26.1554 10H9.84473C9.09527 10 8.71709 10.9094 9.24813 11.4404L15.75 17.9432V25.1875C15.75 25.4628 15.8843 25.7208 16.1099 25.8787L18.9224 27.8468C19.4773 28.2352 20.25 27.8416 20.25 27.1555V17.9432L26.752 11.4404C27.282 10.9104 26.9064 10 26.1554 10Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_1768">
                <rect
                  width="18"
                  height="18"
                  fill="white"
                  transform="translate(9 10)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={styles.Shop_catalog_filters_title}>
          No Filters Applied
        </div>
      </div>
      <div className={`${styles.Shop_catalog_products} ${sideBarOpen? styles.Shop_catalog_products_sidebar_toggled:""}`}>
        {loading ? (
          Array.from({length: 10}, (_, i) => (<div key={i}><ProductCardSkeleton/></div>))
        ) : error ? (
          <div className="">Error Occurred: {error.message}</div>
        ) : products.length > 0 ? (
          products.map((product) => (
            <div key={product._id}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="">No Products Found</div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
