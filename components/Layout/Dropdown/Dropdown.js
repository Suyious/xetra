import { useRouter } from "next/router";
import styles from "./Dropdown.module.css";

const Dropdown = ({children}) => {
  const router = useRouter();
  const { dropdown: remove, ...rest } = router.query;

  return (
    <div className={styles.Dropdown_body}>
      <div
        onClick={() =>
          router.push(
            { pathname: router.pathname, query: { ...rest } },
            undefined,
            { scroll: false }
          )
        }
        className={styles.clickToExit}
      />
      <ul className={styles.Dropdown_main}>
        {children}
      </ul>
    </div>
  );
};

export default Dropdown;
