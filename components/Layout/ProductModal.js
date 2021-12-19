import { useRouter } from "next/router"
import styles from "./ProductModal.module.css"

const ProductModal = ({children}) => {

    const router = useRouter();

    return (
        <div onClick={()=>router.back()} className={styles.ProductModal_body}>
            <div className={styles.clickToExit}/>
            <div className={styles.ProductModal_main}>
                {children}
            </div>
        </div>
    )
}

export default ProductModal
