import styles from "../../../styles/user.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { loginUser } from "../../../redux/actions/userAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Close from "../../../assets/icons/close.svg"

const Login = () => {
  const router = useRouter();
  const {auth: remove, ...rest} = router.query;
  const routeCheck = router.pathname === `/user/login`;
  let href = { pathname: router.pathname, query: {...rest, auth: "signup" } };
  if(routeCheck){
    href = `/user/signup`;
  }

  const dispatch = useDispatch();
  const {loading, isAuthenticated, error} = useSelector(
    (state) => state.user
  );

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginEmail,loginPassword));
    setShowErrors(true)
  }

  useEffect(()=>{
    if(isAuthenticated) router.push({pathname: router.pathname, query: {...rest}},undefined,{scroll: false})
  },[isAuthenticated])

  return (
    <form className={routeCheck?styles.Auth_container:styles.Auth_modal_container}>
      {!routeCheck && <div onClick={()=>router.push({pathname: router.pathname, query: {...rest}},undefined,{scroll: false})} className={styles.Auth_modal_close_button_container}>
      <Close/>
      </div>}
      <div className={styles.Auth_top_label}>
        Your one-stop for casuals is one click away
      </div>
      <div className={styles.Auth_input}>
        <input value={loginEmail} onChange={e=>setLoginEmail(e.target.value)} type="email" placeholder="email" />
      </div>
      <div className={styles.Auth_input}>
        <input value={loginPassword} onChange={e=>setLoginPassword(e.target.value)} type="password" placeholder="password" />
      </div>
      <div className={styles.Auth_MainButton}>
        <button onClick={loginHandler} disabled={loading}>{loading? "loading...":"login"}</button>
      </div>
      {!loading && !isAuthenticated && showErrors && <div className={styles.Auth_ErrorArea}>{error} !</div>}
      <div className={styles.Auth_mid_or}>or</div>
      <div className={styles.Auth_SubButton}>
        <button>Login with Google</button>
      </div>
      <div className={styles.Auth_bottom_label}>
        Don{"'"}t have an account?{" "}
        <Link
          href={href}
          as={{ pathname: "/user/signup" }}
          scroll={false}
        >
        <a>Sign in</a>
        </Link>
      </div>
    </form>
  );
};

export default Login;
