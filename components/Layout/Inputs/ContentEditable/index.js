import styles from "./style.module.css";

const ContentEditable = (
  {className, placeholder="", role="text", name="", value, onChange}
) => {

  return(
    <div
      className={`${styles.content_editable_main} ${value === '' ? styles.empty : "" } ${className}`}
      contentEditable="true"
      role={role}
      placeholder={placeholder}
      name={name}
      value={value}
      onInput={onChange}
      onBlur={onChange}
    ></div>
  )
}
export default ContentEditable
