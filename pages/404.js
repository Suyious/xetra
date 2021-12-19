import styles from "../styles/error.module.css"
import Link from "next/link"

const Error404 = () => {
    return (
        <div className={styles.ErrorPage}>
            <div className={styles.ErrorMessage}>
                <h1>404</h1>
                <p>This page seems to not exist</p>
                <p>Redirectng you back to{' '}
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Error404
