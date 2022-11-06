import styles from "./style.module.css"
import Search from "../../../../assets/icons/search.svg"

const SearchBar = ({onSubmit = () => {}, className = "", placeholder = "", value = "", onChange = () => {}}) => {
  return(
    <form onSubmit={onSubmit} className={styles.Nav_searchbar + " " + className} action="">
      <input className={styles.Nav_searchinput} type="search" placeholder={placeholder} value={value} onChange={onChange}/>
      <button className={styles.Nav_searchbutton}>
        <Search/>
      </button>
    </form>
  )
}

export default SearchBar
