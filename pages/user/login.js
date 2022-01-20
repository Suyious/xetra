import styles from "../../styles/user.module.css";
import Link from "next/link"

const login = () => {
    return (
        <div className={styles.Auth_Main}>
            <div className={styles.Auth_container}>
                <div className={styles.Auth_top_label}>Your one-stop for casuals is one click away</div>
                <div className={styles.Auth_input}>
                    <input type="email" placeholder="email" />
                </div>
                <div className={styles.Auth_input}>
                    <input type="password" placeholder="password"/>
                </div>
                <div className={styles.Auth_MainButton}>
                    <button>login</button>
                </div>
                <div className={styles.Auth_mid_or}>or</div>
                <div className={styles.Auth_SubButton}>
                    <button>Login with Google</button>
                </div>
                <div className={styles.Auth_bottom_label}>Don't have an account? <Link href="/user/signup"><a>Sign in</a></Link></div>
            </div>
        </div>
    )
}

export default login
