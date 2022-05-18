import styles from "../../../styles/user.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../redux/actions/userAction";

const Logout = () => {
  const router = useRouter();
  const {auth: remove, ...rest} = router.query;
  const routeCheck = router.pathname === `/user/login`;

  const {loading, isAuthenticated, error} = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
    const { dropdown: remove, ...rest } = router.query;
    router.push({ pathname: router.pathname, query: { ...rest } }, undefined, {
      scroll: false,
    });
  };

  useEffect(()=>{
    if(!isAuthenticated) router.push({pathname: router.pathname, query: {...rest}},undefined,{scroll: false})
  },[isAuthenticated])

  return (
    <div className={routeCheck?styles.Auth_container:styles.Auth_modal_container}>
      {!routeCheck && <div onClick={()=>router.push({pathname: router.pathname, query: {...rest}},undefined,{scroll: false})} className={styles.Auth_modal_close_button_container}>
        <svg
          width="25"
          height="25"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="10.8284"
            y1="9"
            x2="29.2132"
            y2="27.3848"
            stroke="#aea6a6"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="2"
            y1="-2"
            x2="28"
            y2="-2"
            transform="matrix(-0.707107 0.707107 0.707107 0.707107 32.2148 9)"
            stroke="#aea6a6"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>}
      <div className={styles.Auth_top_label}>
        Do you wish to Logout?
      </div>
      <div className={styles.Auth_MainButton}>
        <button onClick={logoutHandler} disabled={loading}>{loading? "loading...":"logout"}</button>
      </div>
      <div className={styles.Auth_MainButton}>
        <button onClick={()=>router.push({pathname: router.pathname, query: {...rest}},undefined,{scroll: false})} disabled={loading}>Cancel</button>
      </div>
    </div>
  )
}

export default Logout