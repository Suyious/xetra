import {useRouter} from "next/router"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductMain from "../../components/product/ProductMain";
import styles from "../../components/product/ProductMain.module.css"
import { getProductDetails } from "../../redux/actions/productAction";

const ProductOne = () => {

    const router = useRouter();
    const {product_id} = router.query

    return (
        <div className={styles.ProductPage_body}>
            <div className={styles.ProductPage_wrapper}>
                <ProductMain product_id={product_id}/>
            </div>
        </div>
    )
}

export default ProductOne
