import {useRouter} from "next/router"
import ProductMain from "../../components/product/ProductMain";

const ProductOne = () => {

    const router = useRouter();
    const {product_id} = router.query

    return (
        <div>
            <ProductMain product_id={product_id}/>
        </div>
    )
}

export default ProductOne
