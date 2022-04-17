import styles from "../../styles/Shop.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const ShopNav = ({ name, productCount,resultsInQuery, loading }) => {
  const router = useRouter();
  const { keyword } = router.query;

  
  return (
    <div className={styles.ShopNav_body}>
      <div className={styles.ShopNav_tree}>
        <Link href="/">
          <a className={styles.ShopNav_link}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2_1765)">
                <path
                  d="M18.1959 14.1979L10.8339 20.2614V26.8056C10.8339 26.9751 10.9012 27.1376 11.0211 27.2574C11.1409 27.3772 11.3034 27.4445 11.4728 27.4445L15.9474 27.4329C16.1163 27.4321 16.278 27.3644 16.3971 27.2447C16.5163 27.125 16.5831 26.9629 16.5831 26.794V22.9723C16.5831 22.8028 16.6504 22.6403 16.7703 22.5205C16.8901 22.4007 17.0526 22.3334 17.222 22.3334H19.7776C19.947 22.3334 20.1095 22.4007 20.2293 22.5205C20.3492 22.6403 20.4165 22.8028 20.4165 22.9723V26.7912C20.4162 26.8753 20.4325 26.9586 20.4645 27.0364C20.4965 27.1141 20.5435 27.1848 20.6029 27.2443C20.6622 27.3038 20.7328 27.3511 20.8104 27.3833C20.888 27.4155 20.9713 27.4321 21.0554 27.4321L25.5284 27.4445C25.6978 27.4445 25.8603 27.3772 25.9801 27.2574C26.1 27.1376 26.1673 26.9751 26.1673 26.8056V20.257L18.8069 14.1979C18.7203 14.1282 18.6125 14.0902 18.5014 14.0902C18.3903 14.0902 18.2825 14.1282 18.1959 14.1979ZM29.8249 18.3192L26.4867 15.5676V10.0368C26.4867 9.9097 26.4362 9.78782 26.3464 9.69796C26.2565 9.6081 26.1346 9.55762 26.0075 9.55762H23.7714C23.6443 9.55762 23.5225 9.6081 23.4326 9.69796C23.3427 9.78782 23.2923 9.9097 23.2923 10.0368V12.9361L19.7173 9.99486C19.3742 9.71254 18.9437 9.55818 18.4994 9.55818C18.0551 9.55818 17.6246 9.71254 17.2815 9.99486L7.1739 18.3192C7.12538 18.3593 7.08523 18.4086 7.05576 18.4642C7.02629 18.5198 7.00807 18.5807 7.00213 18.6434C6.9962 18.706 7.00267 18.7692 7.02118 18.8294C7.03969 18.8896 7.06988 18.9455 7.11001 18.994L8.12824 20.2319C8.16826 20.2805 8.21749 20.3208 8.2731 20.3504C8.32872 20.38 8.38963 20.3984 8.45235 20.4044C8.51507 20.4105 8.57836 20.4041 8.63861 20.3857C8.69886 20.3672 8.75488 20.3371 8.80346 20.2969L18.1959 12.5608C18.2825 12.491 18.3903 12.453 18.5014 12.453C18.6125 12.453 18.7203 12.491 18.8069 12.5608L28.1997 20.2969C28.2482 20.3371 28.3042 20.3673 28.3643 20.3858C28.4245 20.4043 28.4877 20.4107 28.5504 20.4048C28.6131 20.3989 28.6739 20.3807 28.7296 20.3512C28.7852 20.3217 28.8345 20.2816 28.8746 20.2331L29.8928 18.9952C29.9329 18.9464 29.9629 18.8902 29.9812 18.8298C29.9995 18.7694 30.0057 18.7059 29.9994 18.6431C29.9931 18.5803 29.9744 18.5193 29.9445 18.4637C29.9145 18.4081 29.8739 18.359 29.8249 18.3192Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_1765">
                  <rect
                    width="23"
                    height="23"
                    fill="white"
                    transform="translate(7 7)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </Link>
        {router.pathname === "/products" && (
          <Link href="/products">
            <a className={styles.ShopNav_link}>
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 19.5L16.25 25.9952L16.25 13.0048L23 19.5Z"
                  fill="white"
                />
              </svg>
              Products
            </a>
          </Link>
        )}
        {name && (
          <>
            <Link href="/">
              <a className={styles.ShopNav_link}>
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 19.5L16.25 25.9952L16.25 13.0048L23 19.5Z"
                    fill="white"
                  />
                </svg>
                Collection
              </a>
            </Link>
            <Link href="#">
              <a className={styles.ShopNav_link}>
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 19.5L16.25 25.9952L16.25 13.0048L23 19.5Z"
                    fill="white"
                  />
                </svg>
                {name}
              </a>
            </Link>
          </>
        )}
        {keyword && (
          <>
            <Link href="/">
              <a className={styles.ShopNav_link}>
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 19.5L16.25 25.9952L16.25 13.0048L23 19.5Z"
                    fill="white"
                  />
                </svg>
                Search
              </a>
            </Link>
            <Link href="#">
              <a className={styles.ShopNav_link}>
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 19.5L16.25 25.9952L16.25 13.0048L23 19.5Z"
                    fill="white"
                  />
                </svg>
                {keyword}
              </a>
            </Link>
          </>
        )}
      </div>
      {loading ?
        <div className={styles.ShopNav_count}>Fetching Products...</div>
        :<div className={styles.ShopNav_count}>{resultsInQuery} items</div>
      }
    </div>
  );
};

export default ShopNav;
