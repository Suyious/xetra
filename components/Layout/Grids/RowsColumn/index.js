import styles from "./style.module.css"

const RowsColumnGrid = ({ children }) => {
  return(
    <div className={styles.RowsColumn_main}>
      { children.map(( child, index ) => (
          <div className={styles.RowsColumn_element} key={index}>{child}</div>
      )) }
    </div>
  )
}
export default RowsColumnGrid
