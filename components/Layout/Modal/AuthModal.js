import { useRouter } from "next/router";
import styles from "./Modal.module.css";

const AuthModal = ({ children }) => {
  const router = useRouter();
  const { auth: remove, ...rest } = router.query;

  return (
    <div className={styles.AuthModal_body}>
      <div
        onClick={() =>
          router.push({ pathname: router.pathname, query: { ...rest } },undefined,{scroll: false})
        }
        className={styles.clickToExit}
      />
      {children}
    </div>
  );
};

export default AuthModal;
