import styles from "./ProductMain.module.css"

const ProductMain = ({product_id}) => {
    return (
        <div className={styles.ProductMain_body}>
            This is the product with id {product_id}
        </div>
    )
}

export default ProductMain
