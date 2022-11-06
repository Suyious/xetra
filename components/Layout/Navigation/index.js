import styles from "./style.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Modal from "../Modal/Modal";
import Login from "../Modal/Login";
import Signup from "../Modal/Signup";
import { useSelector } from "react-redux";
import Dropdown from "../Dropdown/Dropdown";
import Logout from "../Modal/Logout";
import Trending from "../../../assets/icons/trending.svg"
import WishList from "../../../assets/icons/heart.svg"
import Cart from "../../../assets/icons/cart.svg"
import CallToAction from "../Buttons/CallToAction";
import SearchBar from "../Inputs/SearchBar";

const Navigation = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const { auth, dropdown } = router.query;
  const [navColor, setNavColor] = useState("transparent");

  const { loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const searchHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      router.push(`/product?keyword=${keyword}`);
    }
  };

  // clearing search bar
  useEffect(() => {
    if (!router.query.keyword) setKeyword("");
  }, [router.pathname]);

  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setNavColor("#000");
    } else {
      setNavColor("transparent");
    }
  };

  useEffect(() => {
    const listen = window.addEventListener("scroll", changeNavbarColor);
    return window.removeEventListener("scroll", listen);
  }, []);

  return (
    <>
      <nav style={{ background: navColor }} className={styles.Navigation}>
        <div className={styles.wrapper}>
          <div className={styles.Nav_left}>
            {/* <div className={styles.Nav_menu}><Hamburger/></div> */}
            <Link href="/"><a title="Xetra - Home" className={styles.Nav_logo}>Xetra.</a></Link>
            <SearchBar onSubmit={searchHandler} placeholder="Search" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
          </div>

          <div className={styles.Nav_right}>
            <Link href="/product">
              <a title="Trending" className={styles.Nav_right_trending}>
                <Trending/> Trending
              </a>
            </Link>
            {loading ? "Wait..." : !isAuthenticated ? (
                <>
              <Link href={{
                  pathname: router.pathname,
                  query: { ...router.query, auth: "login" },
                }} as={{ pathname: "/user/login" }} scroll={false}>
                <a className={styles.Nav_right_button}>Login</a>
              </Link>
              <Link href={{
                  pathname: router.pathname,
                  query: { ...router.query, auth: "signup" },
                }} as={{ pathname: "/user/signup" }} scroll={false}>
                <a><CallToAction className={styles.Nav_right_button} padding="0.6em 1.5em">
                  Sign Up
                </CallToAction> </a>
              </Link> </>
            ) : (
              <div className={styles.Nav_authenticated_buttons}>
                <Link href="/wishlist">
                  <a title="WishList" className={styles.Nav_wishlist_button}> <WishList/> </a>
                </Link>
                <Link href="/cart">
                  <a title="Cart" className={styles.Nav_cart_button}> <Cart/> </a>
                </Link>
                <Link href={{
                    pathname: router.pathname,
                    query: { ...router.query, dropdown: "true" },
                  }} as={{ pathname: "/" }} scroll={false} >
                  <a className={styles.Nav_account_options}>
                    <span>S</span>
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      {auth && (
        <Modal>
          {auth === "login" && <Login />}
          {auth === "signup" && <Signup />}
          {auth === "logout" && <Logout />}
        </Modal>
      )}
      {dropdown && (
        <Dropdown>
          <Link href="/user/suyash"><a><li>Profile</li></a></Link>
          <Link href="/"><a><li>Setting</li></a></Link>
          <Link href="/"><a><li>Dashboard</li></a></Link>
          <Link href={{
              pathname: router.pathname,
              query: { ...router.query, auth: "logout" },
            }} as={{ pathname: "/user/logout" }} scroll={false} >
            <a><li>Logout</li></a>
          </Link>
        </Dropdown>
      )}
    </>
  );
};

export default Navigation;
