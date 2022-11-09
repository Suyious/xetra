import styles from "./style.module.css"
import { footer as data } from "../../../assets/data/footer.js"
import InstagramIcon from "../../../assets/icons/socials/instagram.svg"
import TwitterIcon from "../../../assets/icons/socials/twitter.svg"
import FacebookIcon from "../../../assets/icons/socials/facebook.svg"

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.Footer_container}>
              <div className={styles.Footer_wrapper}>

                  <div className={styles.Footer_col_left}>Xetra</div>

                  <div className={styles.Footer_col_centre}>
                    {Object.keys(data).map((key_i, i) => (
                        <div key={i} className={styles.Footer_section}>
                          <div className={styles.Footer_section_title}>{ key_i }</div>
                          {data[key_i].map((link, i) => (
                            <a href="#" key={i} className={styles.Footer_section_link}>
                              {link}
                            </a>))}
                        </div>
                    ))}
                  </div>

                  <div className={styles.Footer_col_right}>
                      <div className={styles.Footer_col_right_title}>Keep in Touch</div>
                      <div className={styles.Footer_col_socials}>
                        <InstagramIcon/><TwitterIcon/><FacebookIcon/>
                      </div>
                  </div>

              </div>

              <div className={styles.Footer_bottom}>
                  <div className={styles.Footer_bottom_left}>
                      <div className={styles.Footer_bottom_left_logo}>Xetra</div>
                      <div className={styles.Footer_bottom_disclaimer}>This is a concept. NOT A BUSINESS/SERVICE</div>
                  </div>
                  <div className={styles.Footer_bottom_right}>
                    <div className={styles.Footer_bottom_portfolio}>Visit Developer Portfolio <a className={styles.Footer_bottom_portfolio_link} href="https://suyashk.netlify.app">Here</a></div>
                  </div>
              </div>
            </div>
        </div>
    )
}

export default Footer
