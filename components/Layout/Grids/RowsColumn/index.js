import styles from "./style.module.css"

const RowsColumnGrid = ({ children, rows = 4, columns = 4, gap = "1em" }) => {
  return(
    <div className={styles.RowsColumn_main}>
      { children.map(( child, index ) => (
          <div className={styles.RowsColumn_element} key={index}>{child}</div>
      )) }
      <style jsx>{ `
        .${styles.RowsColumn_main} {
          grid-template-columns: repeat(${columns}, 1fr);
          gap: ${gap};
        }` }
      </style>
    </div>
  )
}
export default RowsColumnGrid
