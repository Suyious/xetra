import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../../styles/Shop.module.css"
import ProductCard from "../product/ProductCard"

const Catalog = ({loading, error, products}) => {

    const {pathname, query} = useRouter();
    // const {keyword} = query
    // const prefix = keyword?`keyword=${keyword}&`: "";
    const prefix = ""

    const queryParams = Object.keys(query);
    queryParams.forEach((key,i)=>{
        prefix+=`${key}=${query[key]}&`;
        // if(i!==queryParams.length-1) prefix+="&";
    })

    return (
        <div className={styles.Shop_catalog}>
            <div className={styles.Shop_catalog_title}>
                No Filters Applied
            </div>
            <div className={styles.Shop_catalog_products}>
            {loading?
            <div className="">
                loading...
            </div>
            : error?
            <div className="">Error Occurred: {error.message}</div>
            : products.length>0 ? products.map((product)=>(
                <Link key={product._id} href={`${pathname}?${prefix}product_id=${product._id}`} as={`products/${product._id}`} scroll={false}>
                    <a><ProductCard  product={product}/></a>
                </Link>
            )) : <div className="">No Products Found</div>
            }</div>
        </div>
    )
}

export default Catalog
