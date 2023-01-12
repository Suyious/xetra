import { useEffect, useState } from "react"
import styles from "../../styles/Shop.module.css"
import Pagination from "../Layout/Pagination"
import Catalog from "./Catalog"
import ShopNav from "./ShopNav"
import Sidebar from "./Sidebar"

const Shop = ({CollectionName, loading, error, products, productCount, resultsInQuery}) => {

    const [sideBarOpen, setSideBarOpen] = useState(false);
    
    useEffect(()=>{
        if(sideBarOpen) document.querySelector("body").style.setProperty("overflow","hidden");
        if(!sideBarOpen) document.querySelector("body").style.setProperty("overflow","");
    },[sideBarOpen])

    return (
        <div className={styles.Shop_body}>
            {false && <div className={styles.Shop_banner}>Banner here</div>}
            <ShopNav name={CollectionName} loading={loading} productCount={productCount} resultsInQuery={resultsInQuery}/>
            <div className={styles.Shop_list}>
                <Sidebar open={sideBarOpen} setOpen={setSideBarOpen}/>
                <Catalog loading={loading} error={error} products={products} setSideBarOpen={setSideBarOpen} sideBarOpen={sideBarOpen}/>
            </div>
            <Pagination loading={loading} numOfItems={resultsInQuery} itemsPerPage={7}/>
            {sideBarOpen && <div className={styles.Shop_sidebar_buttons}>
                <button className={styles.Shop_sidebar_applyFiltersButton}>
                Apply Filters
                </button>
                <button className={styles.Shop_sidebar_clearFiltersButton}>
                Clear Filters
                </button>
            </div>}
        </div>
    )
}

export default Shop
