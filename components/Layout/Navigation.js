import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.Navigation}>
      <div className={styles.wrapper}>
        <div className={styles.Nav_left}>
          <div className={styles.Nav_menu}>
            <svg width="28" height="28" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="12" width="20.1257" height="2.21637" rx="1.10818" fill="white"/>
              <rect x="8" y="17.9883" width="20.1257" height="2.21636" rx="1.10818" fill="white"/>
              <rect x="8" y="23.9766" width="20.1257" height="2.21636" rx="1.10818" fill="white"/>
            </svg>
          </div>
          <div className={styles.Nav_logo}>Xetra.</div>
        </div>
        <div className={styles.Nav_centre}>
          <form className={styles.Nav_searchbar} action="">
            <input
              className={styles.Nav_searchinput}
              type="search"
              placeholder="Search what you need.."
            />
            <div className={styles.Nav_searchbutton}>
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
            </div>
          </form>
        </div>
        <div className={styles.Nav_right}>
          <div className={styles.Nav_right_trending}>
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
          </div>
          <button className={styles.Nav_right_button}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
