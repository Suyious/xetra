import styles from "./Navigation.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Modal from "./Modal/Modal";
import Login from "./Modal/Login";
import Signup from "./Modal/Signup";
import { useSelector } from "react-redux";
import Dropdown from "./Dropdown/Dropdown";
import Logout from "./Modal/Logout";

const Navigation = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const { auth, dropdown } = router.query;
  const [navColor, setNavColor] = useState("transparent");

  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );

  const searchHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      router.push(`/products?keyword=${keyword}`);
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
            <div className={styles.Nav_menu}>
              {/* <svg
                width="28"
                height="28"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8"
                  y="12"
                  width="20.1257"
                  height="2.21637"
                  rx="1.10818"
                  fill="white"
                />
                <rect
                  x="8"
                  y="17.9883"
                  width="20.1257"
                  height="2.21636"
                  rx="1.10818"
                  fill="white"
                />
                <rect
                  x="8"
                  y="23.9766"
                  width="20.1257"
                  height="2.21636"
                  rx="1.10818"
                  fill="white"
                />
              </svg> */}
            </div>
            <Link href="/">
              <a title="Xetra - Home" className={styles.Nav_logo}>
                Xetra.
              </a>
            </Link>
          </div>
          <div className={styles.Nav_centre}>
            <form
              onSubmit={searchHandler}
              className={styles.Nav_searchbar}
              action=""
            >
              <input
                className={styles.Nav_searchinput}
                type="search"
                placeholder="Search what you need.."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button className={styles.Nav_searchbutton}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_662:1088)">
                    <path
                      d="M29.7129 26.1576L25.6236 22.0684C25.4391 21.8838 25.1889 21.7812 24.9264 21.7812H24.2578C25.3898 20.3334 26.0625 18.5123 26.0625 16.5312C26.0625 11.8186 22.2439 8 17.5312 8C12.8186 8 9 11.8186 9 16.5312C9 21.2439 12.8186 25.0625 17.5312 25.0625C19.5123 25.0625 21.3334 24.3898 22.7812 23.2578V23.9264C22.7812 24.1889 22.8838 24.4391 23.0684 24.6236L27.1576 28.7129C27.5432 29.0984 28.1666 29.0984 28.548 28.7129L29.7088 27.5521C30.0943 27.1666 30.0943 26.5432 29.7129 26.1576ZM17.5312 21.7812C14.6314 21.7812 12.2812 19.4352 12.2812 16.5312C12.2812 13.6314 14.6273 11.2812 17.5312 11.2812C20.4311 11.2812 22.7812 13.6273 22.7812 16.5312C22.7812 19.4311 20.4352 21.7812 17.5312 21.7812Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_662:1088">
                      <rect
                        width="21"
                        height="21"
                        fill="white"
                        transform="translate(9 8)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </form>
          </div>
          <div className={styles.Nav_right}>
            <Link href="/products">
              <a title="Trending" className={styles.Nav_right_trending}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_662:1078)">
                    <path
                      d="M19.7893 6.96589C19.7893 5.70633 18.1957 5.23162 17.4938 6.27578C11.0543 15.8563 20.2053 16.2877 20.2053 20.9448C20.2053 22.8305 18.6917 24.3562 16.8334 24.3314C15.0048 24.3075 13.55 22.7559 13.55 20.8946V16.3692C13.55 15.2207 12.1737 14.6635 11.3959 15.4959C10.004 16.9841 8.55859 19.5334 8.55859 22.6384C8.55859 28.2413 13.0368 32.7995 18.5415 32.7995C24.0461 32.7995 28.5243 28.2413 28.5243 22.6384C28.5243 13.6262 19.7893 12.4243 19.7893 6.96589V6.96589Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_662:1078">
                      <rect
                        width="19.9657"
                        height="27.0963"
                        fill="white"
                        transform="translate(8.55859 5.7041)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </Link>
            {loading ? (
              "Wait..."
            ) : !isAuthenticated ? (
              <Link
                href={{
                  pathname: router.pathname,
                  query: { ...router.query, auth: "login" },
                }}
                as={{ pathname: "/user/login" }}
                scroll={false}
              >
                <a>
                  <button className={styles.Nav_right_button}>Sign Up</button>
                </a>
              </Link>
            ) : (
              <div className={styles.Nav_authenticated_buttons}>
                <Link href="/wishlist">
                  <a title="WishList" className={styles.Nav_wishlist_button}>
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.0544 10.9251L18.0546 10.9249C19.6617 9.24031 22.2248 8.99981 23.9254 10.4719C25.9138 12.196 26.0211 15.3019 24.2356 17.1738L24.2355 17.1739L17.433 24.3094C17.1905 24.5635 16.8065 24.5635 16.564 24.3094L9.76173 17.1741C7.97936 15.3022 8.08668 12.1961 10.0751 10.4719C11.7759 8.99964 14.3423 9.24061 15.9456 10.9245L15.9461 10.9251L16.6387 11.6501L17.0003 12.0286L17.3618 11.6501L18.0544 10.9251Z"
                        stroke="white"
                        strokeWidth="1.3"
                      />
                    </svg>
                  </a>
                </Link>
                <Link href="/cart">
                  <a title="Cart" className={styles.Nav_cart_button}>
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8352 19.585C9.87271 19.585 9.09396 20.3725 9.09396 21.335C9.09396 22.2975 9.87271 23.085 10.8352 23.085C11.7977 23.085 12.5852 22.2975 12.5852 21.335C12.5852 20.3725 11.7977 19.585 10.8352 19.585ZM6.4602 5.58496C5.97696 5.58496 5.58521 5.97671 5.58521 6.45996V6.45996C5.58521 6.94321 5.97696 7.33496 6.46021 7.33496H6.6572C7.07127 7.33496 7.44831 7.57343 7.62576 7.94755L9.43627 11.7647C10.0949 13.1533 10.0457 14.7739 9.30396 16.12V16.12C9.16396 16.365 9.08521 16.6537 9.08521 16.96C9.08521 17.9225 9.87271 18.71 10.8352 18.71H20.4602C20.9435 18.71 21.3352 18.3182 21.3352 17.835V17.835C21.3352 17.3517 20.9435 16.96 20.4602 16.96H11.2027C11.0982 16.96 11.0128 16.8899 10.99 16.7933C10.9819 16.7593 10.9882 16.7241 10.9967 16.6902V16.6902C11.0057 16.6544 11.0193 16.6198 11.0371 16.5875L11.1528 16.378C11.5507 15.6574 12.3088 15.21 13.1319 15.21H18.3165C18.9727 15.21 19.5502 14.8512 19.8477 14.3087L22.9802 8.62996C23.0502 8.50746 23.0852 8.35871 23.0852 8.20996C23.0852 7.72871 22.6915 7.33496 22.2102 7.33496H10.2358C9.64568 7.33496 9.10871 6.99402 8.85771 6.45996V6.45996C8.6067 5.92591 8.06973 5.58496 7.47963 5.58496H6.4602ZM19.5852 19.585C18.6227 19.585 17.844 20.3725 17.844 21.335C17.844 22.2975 18.6227 23.085 19.5852 23.085C20.5477 23.085 21.3352 22.2975 21.3352 21.335C21.3352 20.3725 20.5477 19.585 19.5852 19.585Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </Link>
                <Link
                  href={{
                    pathname: router.pathname,
                    query: { ...router.query, dropdown: "true" },
                  }}
                  as={{ pathname: "/" }}
                  scroll={false}
                >
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
          <Link href="/user/suyash">
            <a>
              <li>Profile</li>
            </a>
          </Link>
          <Link href="/">
            <a>
              <li>Setting</li>
            </a>
          </Link>
          <Link href="/">
            <a>
              <li>Dashboard</li>
            </a>
          </Link>
          <Link
            href={{
              pathname: router.pathname,
              query: { ...router.query, auth: "logout" },
            }}
            as={{ pathname: "/user/logout" }}
            scroll={false}
          >
            <a>
              <li>Logout</li>
            </a>
          </Link>
        </Dropdown>
      )}
    </>
  );
};

export default Navigation;
