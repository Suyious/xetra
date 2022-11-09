import styles from "./style.module.css"

const SecondayCTA = ({children, padding="0.5em 1em", fontSize="0.9em", disabled = false, onClick=() => {}}) => {

  const button_styles = {
    "padding": padding,
    "fontSize": fontSize
  }

  return(
    <button style={button_styles} className={styles.calltoaction_main} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default SecondayCTA
