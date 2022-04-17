import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/Shop.module.css";
import { useRouter } from "next/router";

const Sidebar = ({ open, setOpen }) => {
  const router = useRouter();
  const { pathname, query } = router;

  const categories = ["Laptop", "Mobile"];
  const prices = [
    { label: "less than $100", range: [1, 100] },
    { label: "$100 - $500", range: [100, 500] },
    { label: "$500 - $1000", range: [500, 1000] },
    { label: "$1000 - $2000", range: [1000, 2000] },
    { label: "$2000 - $3000", range: [2000, 3000] },
    { label: "$3000 - $5000", range: [3000, 5000] },
    { label: "$5000 or more", range: [5000, 100000] },
  ];
  const ratings = [1, 2, 3, 4, 5];

  const [filters, setFilters] = useState({});

  useEffect(() => {
    setFilters({
      ...(query.category ? { category: query.category } : {}),
      ...(query["price[gte]"] ? { "price[gte]": query["price[gte]"] } : {}),
      ...(query["price[lte]"] ? { "price[lte]": query["price[lte]"] } : {}),
      ...(query.ratings ? { ratings: query.ratings } : {}),
    });
  }, [query]);

  // Used "==" and "!=" for comparing strings and numbers for example 1=="1" and 2!="1"
  // This use is intended here: L52,L63,L111
  const getfilterquery = (key, value) => {
    let q = {
      ...filters,
    };
    if (q[key] != value) {
      q[key] = value;
    } else {
      delete q[key];
    }
    return q;
  };

  const getpricefilterquery = (gte, lte) => {
    let q = {
      ...filters,
    };
    if (q["price[gte]"] != gte && q["price[lte]"] != lte) {
      q["price[gte]"] = gte;
      q["price[lte]"] = lte;
    } else {
      delete q["price[gte]"];
      delete q["price[lte]"];
    }
    return q;
  };

  const comparePriceToQuery = (price) => {
    return (
      price.range[0] == query["price[gte]"] &&
      price.range[1] == query["price[lte]"]
    );
  };

  return (
    <div
      className={`${styles.Shop_sidebar_body} ${
        open ? styles.Shop_sidebar_body_toggle : ""
      }`}
    >
      <div className={styles.Shop_sidebar_title}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2_1768)">
            <path
              d="M26.1554 10H9.84473C9.09527 10 8.71709 10.9094 9.24813 11.4404L15.75 17.9432V25.1875C15.75 25.4628 15.8843 25.7208 16.1099 25.8787L18.9224 27.8468C19.4773 28.2352 20.25 27.8416 20.25 27.1555V17.9432L26.752 11.4404C27.282 10.9104 26.9064 10 26.1554 10Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_1768">
              <rect
                width="18"
                height="18"
                fill="white"
                transform="translate(9 10)"
              />
            </clipPath>
          </defs>
        </svg>
        <span>Apply Filters</span>
        <span
          className={styles.Shop_sidebar_cancel}
          onClick={() => setOpen(!open)}
        >
          Cancel
        </span>
      </div>

      <div className={styles.Shop_sidebar_filter}>
        <span className={styles.Shop_sidebar_filter_title}>categories</span>
        {categories.map((category, i) => (
          <div key={i} className={styles.Shop_sidebar_filter_check}>
            <Link
              href={{
                pathname: pathname,
                query: getfilterquery("category", category),
              }}
            >
              <a>
                {query.category == category ? (
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.3214 25H2.67857C1.19922 25 0 23.8008 0 22.3214V2.67857C0 1.19922 1.19922 0 2.67857 0H22.3214C23.8008 0 25 1.19922 25 2.67857V22.3214C25 23.8008 23.8008 25 22.3214 25ZM10.8992 19.528L21.1671 9.2601C21.5157 8.91144 21.5157 8.34609 21.1671 7.99743L19.9044 6.73477C19.5558 6.3861 18.9904 6.38605 18.6417 6.73477L10.2679 15.1085L6.35832 11.199C6.00965 10.8503 5.44431 10.8503 5.09559 11.199L3.83292 12.4617C3.48426 12.8103 3.48426 13.3757 3.83292 13.7243L9.6365 19.5279C9.98521 19.8767 10.5505 19.8767 10.8992 19.528Z"
                      fill="#EDEDED"
                    />
                  </svg>
                ) : (
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.75"
                      y="0.75"
                      width="23.5"
                      height="23.5"
                      rx="3.25"
                      stroke="#C0C0C0"
                      strokeWidth="1.5"
                    />
                  </svg>
                )}
              </a>
            </Link>
            <span>{category}</span>
          </div>
        ))}
      </div>

      <div className={styles.Shop_sidebar_filter}>
        <span className={styles.Shop_sidebar_filter_title}>price</span>
        {prices.map((price, i) => (
          <div key={i} className={styles.Shop_sidebar_filter_check}>
            <Link
              href={{
                pathname: pathname,
                query: getpricefilterquery(price.range[0], price.range[1]),
              }}
            >
              <a>
                {comparePriceToQuery(price) ? (
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.3214 25H2.67857C1.19922 25 0 23.8008 0 22.3214V2.67857C0 1.19922 1.19922 0 2.67857 0H22.3214C23.8008 0 25 1.19922 25 2.67857V22.3214C25 23.8008 23.8008 25 22.3214 25ZM10.8992 19.528L21.1671 9.2601C21.5157 8.91144 21.5157 8.34609 21.1671 7.99743L19.9044 6.73477C19.5558 6.3861 18.9904 6.38605 18.6417 6.73477L10.2679 15.1085L6.35832 11.199C6.00965 10.8503 5.44431 10.8503 5.09559 11.199L3.83292 12.4617C3.48426 12.8103 3.48426 13.3757 3.83292 13.7243L9.6365 19.5279C9.98521 19.8767 10.5505 19.8767 10.8992 19.528Z"
                      fill="#EDEDED"
                    />
                  </svg>
                ) : (
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.75"
                      y="0.75"
                      width="23.5"
                      height="23.5"
                      rx="3.25"
                      stroke="#C0C0C0"
                      strokeWidth="1.5"
                    />
                  </svg>
                )}
              </a>
            </Link>
            <span>{price.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.Shop_sidebar_filter}>
        <span className={styles.Shop_sidebar_filter_title}>ratings</span>
        <div className={styles.Shop_sidebar_filter_horizon}>
          {ratings.map((rating, i) => (
            <div key={i} className={styles.Shop_sidebar_filter_check}>
              <Link
                href={{
                  pathname: pathname,
                  query: getfilterquery("ratings", rating),
                }}
              >
                <a>
                  {query.ratings >= rating ? (
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.4527 17.3177L17.7127 17.2797L17.829 17.0441L20.9015 10.8144C20.9015 10.8143 20.9015 10.8143 20.9016 10.8142C21.2708 10.0667 22.3363 10.0701 22.7058 10.8147C22.7059 10.8149 22.706 10.815 22.706 10.8151L25.7782 17.0441L25.8944 17.2797L26.1545 17.3177L33.0289 18.3199L33.0293 18.3199C33.8515 18.4392 34.1823 19.4545 33.5851 20.036L33.585 20.0361L28.6114 24.8826L28.4231 25.0662L28.4676 25.3254L29.6439 32.1713C29.7846 32.9937 28.9171 33.6145 28.1862 33.2301L28.1861 33.2301L22.0362 29.9975L21.8036 29.8752L21.5709 29.9975L15.4211 33.2301L15.4195 33.2309C14.6921 33.6166 13.822 32.9967 13.9633 32.1713L15.1395 25.3254L15.1841 25.0662L14.9957 24.8826L10.0222 20.0361L10.022 20.036C9.42484 19.4545 9.7557 18.4392 10.5778 18.3199L10.5782 18.3199L17.4527 17.3177Z"
                        fill="white"
                        stroke="white"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="45"
                      height="44"
                      viewBox="0 0 45 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_234_35)">
                        <path
                          d="M21.0532 10.593L17.9807 16.8229L11.1062 17.8251C9.87338 18.0039 9.37932 19.5237 10.2733 20.3942L15.2469 25.2407L14.0705 32.087C13.8588 33.3245 15.1622 34.2514 16.2538 33.6727L22.4037 30.4401L28.5535 33.6727C29.6452 34.2467 30.9486 33.3245 30.7368 32.087L29.5605 25.2407L34.534 20.3942C35.428 19.5237 34.934 18.0039 33.7012 17.8251L26.8267 16.8229L23.7541 10.593C23.2036 9.48257 21.6085 9.46845 21.0532 10.593Z"
                          stroke="white"
                          strokeWidth="0.816479"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_234_35">
                          <rect
                            width="27.1027"
                            height="27.1027"
                            fill="white"
                            transform="translate(8.84863 8.24805)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
