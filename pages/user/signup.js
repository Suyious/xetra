import styles from "../../styles/user.module.css";
import Link from "next/link"

const signup = () => {
    return (
        <div className={styles.Auth_Main}>
            <form className={styles.Auth_container}>
                <div className={styles.Auth_top_label}>Your one-stop for casuals is one click away</div>
                <div className={styles.Auth_input}>
                    <input type="text" placeholder="username"/>
                </div>
                <div className={styles.Auth_input}>
                    <input type="email" placeholder="email" />
                </div>
                <div className={styles.Auth_input}>
                    <input type="password" placeholder="password"/>
                </div>
                <div className={styles.Auth_input}>
                    <input type="password" placeholder="confirm password"/>
                </div>
                <div className={styles.Auth_MainButton}>
                    <button>sign up</button>
                </div>
                <div className={styles.Auth_mid_or}>or</div>
                <div className={styles.Auth_SubButton}>
                    <button>Sign up with Google</button>
                </div>
                <div className={styles.Auth_bottom_label}>Already have an account? <Link href="/user/login"><a>Log in</a></Link></div>
            </form>
        </div>
    )
}

export default signup
