import styles from  "./style.module.css"
import Link from "next/link"

const NotFound = () => {
  return(
    <div className={styles.NotFound_main}>
      <div className={styles.NotFound_container}>
        <span className={styles.NotFound_message}>Not Found</span>
        <div>
          <h1>404</h1>
          <p>This page seems to not exist</p>
          <p>Redirectng you back to{' '}
            <Link href="/">
              <a className={styles.NotFoundLink}>Home</a>
            </Link>
          </p>
        </div>
      </div> 
    </div>
  )
}
export default NotFound
