import CallToAction from "../../Buttons/CallToAction";
import styles from "./style.module.css";

const Tabs = ({children, selected = 0, setSelected = () => {}, fontSize="0.9em", padding="0.5em 1em"}) => {
  return (
    <div className={styles.Tabs_main}>
      {children.map((child, index) => {
        if (index === selected) {
          return (
            <CallToAction key={index} padding={padding} fontSize={fontSize}>{child}</CallToAction>
          )
        } else {
          return(
            <div onClick={() => setSelected(index)} key={index} className={styles.Tabs_unselected}>{child}</div>
          )
        }
      })}
      <style jsx>{`
        .${ styles.Tabs_unselected } {
          padding: ${padding};
          font-size: ${fontSize};
        }
        `}</style>
    </div>
  )
}
export default Tabs
