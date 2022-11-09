import styles from "./style.module.css"

const ImageInput = ({children, name="", padding="0.4em 1em", fontSize="0.9em", disabled = false, onChange=() => {}}) => {

  const u_styles = {
    padding: padding,
    fontSize: fontSize,
  }

  return(
    <>
      <label className={styles.imageinput_main} style={u_styles}  htmlFor="product_images">{children}</label>
      <input style={{ display: "none" }} id="product_images" name={name} onChange={onChange} disabled={disabled} type="file" accept=".jpg, .jpeg, .png" multiple />
    </>
  )
}

export default ImageInput
