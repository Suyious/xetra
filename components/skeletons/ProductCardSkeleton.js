import styles from "./Skeleton.module.css"

const ProductCardSkeleton = () => {
    return (
        <div className={styles.ProductCardSkeleton}>
            <div className={styles.ProductCardBack}/>
        </div>
    )
}

export default ProductCardSkeleton
