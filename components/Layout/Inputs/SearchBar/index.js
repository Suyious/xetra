import styles from "./style.module.css"
import Search from "../../../../assets/icons/search.svg"

const SearchBar = ({onSubmit = () => {}, className = "", placeholder = "", value = "", onChange = () => {}}) => {
  return(
    <form onSubmit={onSubmit} className={styles.Searchbar + " " + className} action="">
      <input className={styles.Searchinput} type="search" placeholder={placeholder} value={value} onChange={onChange}/>
      <button className={styles.Searchbutton}>
        <Search/>
      </button>
    </form>
  )
}

export default SearchBar
