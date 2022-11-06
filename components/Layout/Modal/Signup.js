import styles from "../../../styles/user.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { registerUser } from "../../../redux/actions/userAction";
import Close from "../../../assets/icons/close.svg"

const Signup = () => {
  const router = useRouter();
  const { auth: remove, ...rest } = router.query;
  const routeCheck = router.pathname === `/user/signup`;
  let href = { pathname: router.pathname, query: { ...rest, auth: "login" } };

  if (routeCheck) {
    href = `/user/login`;
  }

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputErrors, setInputErrors] = useState({})
  const [showErrors, setShowErrors] = useState(false);


  const dispatch = useDispatch();
  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );

  const RegisterHandler = (e) => {
    e.preventDefault();

    const errorCheck = !inputErrors.username && !inputErrors.email && !inputErrors.password;
    if(errorCheck){
      const credentials = new FormData();
      credentials.set("name", username);
      credentials.set("email", email);
      credentials.set("password", password);
      dispatch(registerUser(credentials));      
    }
    setShowErrors(true)

  };

  return (
    <form
      className={
        routeCheck ? styles.Auth_container : styles.Auth_modal_container
      }
    >
      {!routeCheck && (
        <div      
          onClick={() =>
            router.push(
              { pathname: router.pathname, query: { ...rest } },
              undefined,
              { scroll: false }
            )
          }
          className={styles.Auth_modal_close_button_container}
        >
      <Close/>
        </div>
      )}
      <div className={styles.Auth_top_label}>
        Your one-stop for casuals is one click away
      </div>
      <div className={styles.Auth_input}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
      </div>
      <div className={styles.Auth_input}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
      </div>
      <div className={styles.Auth_input}>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
      </div>
      <div className={styles.Auth_input}>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="confirm password"
        />
      </div>
      <div className={styles.Auth_MainButton}>
        <button onClick={RegisterHandler} disabled={loading}>
          {loading ? "loading..." : "signup"}
        </button>
      </div>
      {!loading && !isAuthenticated && showErrors && <div className={styles.Auth_ErrorArea}>{error} !</div>}
      <div className={styles.Auth_mid_or}>or</div>
      <div className={styles.Auth_SubButton}>
        <button>Sign up with Google</button>
      </div>
      <div className={styles.Auth_bottom_label}>
        Already have an account?{" "}
        <Link href={href} as={{ pathname: "/user/login" }} scroll={false}>
          <a>Log in</a>
        </Link>
      </div>
    </form>
  );
};

export default Signup;
