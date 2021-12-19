import styles from "../../styles/Shop.module.css"
import Catalog from "./Catalog"
import ShopNav from "./ShopNav"
import Sidebar from "./Sidebar"

const Shop = ({CollectionName, loading, error, products, productCount}) => {

    return (
        <div className={styles.Shop_body}>
            {false && <div className={styles.Shop_banner}>Banner here</div>}
            <ShopNav name={CollectionName} productCount={productCount}/>
            <div className={styles.Shop_list}>
                <Sidebar/>
                <Catalog loading={loading} error={error} products={products}/>
            </div>
        </div>
    )
}

export default Shop
