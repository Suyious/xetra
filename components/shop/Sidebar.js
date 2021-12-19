import styles from "../../styles/Shop.module.css";

const Sidebar = () => {
  const cfilters = [
    "Shirts",
    "T-Shirts",
    "Shorts",
    "Trousers",
    "Skirts",
    "Joggers",
    "Shorts",
  ];
  const pfilters = [
    "less than $100",
    "$100-$500",
    "$500-$1000",
    "$1000-$2000",
    "$2000-$3000",
    "$3000-$5000",
    "$5000 or more",
  ];

  return (
    <div className={styles.Shop_sidebar_body}>
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
      </div>
      <div className={styles.Shop_sidebar_filter}>
        <span className={styles.Shop_sidebar_filter_title}>categories</span>
        {cfilters.map((fil, i) => (
          <div key={i} className={styles.Shop_sidebar_filter_check}>
            <svg
              width="25"
              height="25"
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
            <span>{fil}</span>
          </div>
        ))}
      </div>
      <div className={styles.Shop_sidebar_filter}>
        <span className={styles.Shop_sidebar_filter_title}>price</span>
        {pfilters.map((fil, i) => (
          <div key={i} className={styles.Shop_sidebar_filter_check}>
            <svg
              width="25"
              height="25"
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
            <span>{fil}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
