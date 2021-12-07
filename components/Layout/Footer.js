import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.Footer_wrapper}>
                <div className={styles.Footer_col_left}>Xetra</div>
                <div className={styles.Footer_col_centre}>
                    <div className={styles.Footer_section}>
                        <div className={styles.Footer_section_title}>Collections</div>
                        <a href="#" className={styles.Footer_section_link}>Aesthetics</a>
                        <a href="#" className={styles.Footer_section_link}>Queer</a>
                        <a href="#" className={styles.Footer_section_link}>Winter</a>
                        <a href="#" className={styles.Footer_section_link}>Shoes</a>
                        <a href="#" className={styles.Footer_section_link}>Goth</a>
                        <a href="#" className={styles.Footer_section_link}>Bags & purses</a>
                    </div>
                    <div className={styles.Footer_section}>
                        <div className={styles.Footer_section_title}>About</div>
                        <a href="#" className={styles.Footer_section_link}>Contact Us</a>
                        <a href="#" className={styles.Footer_section_link}>About Us</a>
                        <a href="#" className={styles.Footer_section_link}>Careers</a>
                        <a href="#" className={styles.Footer_section_link}>Press</a>
                    </div>
                    <div className={styles.Footer_section}>
                        <div className={styles.Footer_section_title}>Policy</div>
                        <a href="#" className={styles.Footer_section_link}>Return Policy </a>
                        <a href="#" className={styles.Footer_section_link}>Terms of Use</a>
                        <a href="#" className={styles.Footer_section_link}>Security</a>
                        <a href="#" className={styles.Footer_section_link}>Privacy</a>
                        <a href="#" className={styles.Footer_section_link}>Sitemap</a>
                    </div>
                    <div className={styles.Footer_section}>
                        <div className={styles.Footer_section_title}>Help</div>
                        <a href="#" className={styles.Footer_section_link}>Shipping</a>
                        <a href="#" className={styles.Footer_section_link}>Payments</a>
                        <a href="#" className={styles.Footer_section_link}>Cancelations</a>
                        <a href="#" className={styles.Footer_section_link}>Returns</a>
                    </div>
                </div>
                <div className={styles.Footer_col_right}>
                    <div className={styles.Footer_col_right_title}>Keep in Touch</div>
                    <div className={styles.Footer_col_socials}>
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5046 6.97437C9.39917 6.97437 6.89429 9.47925 6.89429 12.5847C6.89429 15.6902 9.39917 18.1951 12.5046 18.1951C15.6101 18.1951 18.115 15.6902 18.115 12.5847C18.115 9.47925 15.6101 6.97437 12.5046 6.97437ZM12.5046 16.2322C10.4978 16.2322 8.85718 14.5964 8.85718 12.5847C8.85718 10.573 10.4929 8.93726 12.5046 8.93726C14.5164 8.93726 16.1521 10.573 16.1521 12.5847C16.1521 14.5964 14.5115 16.2322 12.5046 16.2322V16.2322ZM19.6531 6.74487C19.6531 7.47241 19.0671 8.05347 18.3445 8.05347C17.6169 8.05347 17.0359 7.46753 17.0359 6.74487C17.0359 6.02222 17.6218 5.43628 18.3445 5.43628C19.0671 5.43628 19.6531 6.02222 19.6531 6.74487ZM23.3689 8.073C23.2859 6.32007 22.8855 4.76733 21.6013 3.48804C20.322 2.20874 18.7693 1.80835 17.0164 1.72046C15.2097 1.61792 9.79468 1.61792 7.98804 1.72046C6.23999 1.80347 4.68726 2.20386 3.40308 3.48315C2.1189 4.76245 1.72339 6.31519 1.6355 8.06812C1.53296 9.87476 1.53296 15.2898 1.6355 17.0964C1.71851 18.8494 2.1189 20.4021 3.40308 21.6814C4.68726 22.9607 6.23511 23.3611 7.98804 23.449C9.79468 23.5515 15.2097 23.5515 17.0164 23.449C18.7693 23.366 20.322 22.9656 21.6013 21.6814C22.8806 20.4021 23.281 18.8494 23.3689 17.0964C23.4714 15.2898 23.4714 9.87964 23.3689 8.073V8.073ZM21.0349 19.0349C20.6541 19.9919 19.9167 20.7292 18.9548 21.115C17.5144 21.6863 14.0964 21.5544 12.5046 21.5544C10.9128 21.5544 7.48999 21.6814 6.05444 21.115C5.09741 20.7341 4.36011 19.9968 3.97437 19.0349C3.40308 17.5945 3.53491 14.1765 3.53491 12.5847C3.53491 10.9929 3.40796 7.57007 3.97437 6.13452C4.35522 5.17749 5.09253 4.44019 6.05444 4.05444C7.49487 3.48315 10.9128 3.61499 12.5046 3.61499C14.0964 3.61499 17.5193 3.48804 18.9548 4.05444C19.9119 4.4353 20.6492 5.17261 21.0349 6.13452C21.6062 7.57495 21.4744 10.9929 21.4744 12.5847C21.4744 14.1765 21.6062 17.5994 21.0349 19.0349Z" fill="white"/></svg>
                        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_725_731)"><path d="M22.8481 7.40791C22.864 7.62998 22.864 7.8521 22.864 8.07417C22.864 14.8476 17.7086 22.6522 8.28599 22.6522C5.38306 22.6522 2.68638 21.8114 0.417969 20.3521C0.83042 20.3997 1.22695 20.4155 1.65527 20.4155C4.05054 20.4155 6.25552 19.6065 8.01631 18.2265C5.76377 18.1789 3.87607 16.7036 3.22568 14.6731C3.54297 14.7207 3.86021 14.7524 4.19336 14.7524C4.65337 14.7524 5.11343 14.689 5.5417 14.578C3.19399 14.1021 1.43315 12.0399 1.43315 9.54941V9.48599C2.11523 9.8667 2.90845 10.1046 3.74912 10.1363C2.36904 9.21626 1.46489 7.64585 1.46489 5.86919C1.46489 4.91743 1.71865 4.04497 2.16284 3.28354C4.68506 6.39268 8.47632 8.4231 12.7275 8.64521C12.6482 8.2645 12.6006 7.86797 12.6006 7.47139C12.6006 4.64775 14.8849 2.34766 17.7244 2.34766C19.1996 2.34766 20.5321 2.96631 21.468 3.96567C22.626 3.7436 23.7364 3.31528 24.7199 2.72837C24.3392 3.91812 23.5302 4.91748 22.4674 5.55195C23.4985 5.44097 24.4979 5.15537 25.4179 4.75884C24.72 5.77402 23.8475 6.67817 22.8481 7.40791V7.40791Z" fill="white"/></g><defs><clipPath id="clip0_725_731"><rect width="25" height="25" fill="white" transform="translate(0.417969)"/></clipPath></defs></svg>
                        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.5117 1.5625H4.32422C3.70262 1.5625 3.10648 1.80943 2.66694 2.24897C2.2274 2.68851 1.98047 3.28465 1.98047 3.90625L1.98047 21.0938C1.98047 21.7154 2.2274 22.3115 2.66694 22.751C3.10648 23.1906 3.70262 23.4375 4.32422 23.4375H11.0259V16.0005H7.94971V12.5H11.0259V9.83203C11.0259 6.79736 12.8325 5.12109 15.5996 5.12109C16.9248 5.12109 18.3105 5.35742 18.3105 5.35742V8.33594H16.7837C15.2793 8.33594 14.8101 9.26953 14.8101 10.2271V12.5H18.1685L17.6313 16.0005H14.8101V23.4375H21.5117C22.1333 23.4375 22.7295 23.1906 23.169 22.751C23.6085 22.3115 23.8555 21.7154 23.8555 21.0938V3.90625C23.8555 3.28465 23.6085 2.68851 23.169 2.24897C22.7295 1.80943 22.1333 1.5625 21.5117 1.5625V1.5625Z" fill="white"/></svg>
                    </div>
                </div>
            </div>
            <div className={styles.Footer_bottom}>
                <div className={styles.Footer_bottom_left}>
                    <div className={styles.Footer_bottom_left_logo}>Xetra</div>
                    <div className={styles.Footer_bottom_disclaimer}>This is a concept. NOT A BUSINESS/SERVICE</div>
                </div>
                <div className={styles.Footer_bottom_right}>
                    <div className={styles.Footer_bottom_portfolio}>Visit Developer Portfolio <a className={styles.Footer_bottom_portfolio_link} href="#">Here</a></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
