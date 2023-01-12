import {useState} from "react"
import styles from "./style.module.css"
import Image from "next/image"
import Head from "next/head"
import ImageIcon from "../../../assets/icons/image.svg"
import CallToAction from "../../../components/Layout/Buttons/CallToAction"
import ImageInput from "../../../components/Layout/Inputs/ImageInput"
import ContentEditable from "../../../components/Layout/Inputs/ContentEditable"
import {useDispatch, useSelector} from "react-redux"
import {createProduct} from "../../../redux/actions/productAction"

const ProductCreate = () => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const dispatch = useDispatch();
  const {loading, product, error} = useSelector((state) => state.productCreate);

  const submitHandler = (e) => {
    e.preventDefault();

    const publish = new FormData();
    publish.set('name', name);
    publish.set('price', price);
    publish.set('description', description);
    publish.set('category', "test");
    images.forEach((image) => {
      publish.append("images", image);
    });
    
    for (const key of publish.keys()) {
      console.log(key, " : ", publish.get(key));
    }
    dispatch(createProduct( publish ));
  }

  const imageHandler = (e) => {
    // console.log(e.target.files);
    // setImages((p_images) => [...p_images, ...e.target.files]);

    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if(reader.readyState === 2) {
          setImages((p_images) => [...p_images, reader.result]);
        }
      }

      reader.readAsDataURL(file);
    })
  }

  return(
    <div className={styles.product_create_main}>
      <Head>
        <title>Create New Product | Xetra</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta property="og:title" content="Create New Product | Xetra | Your Fashion One Stop"/>
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://xetra.netlify.app/OG-IMAGE.jpg"/>
        <meta property="og:url" content="https://xetra.netlify.app"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="og:description" content="Shop for the best fashion deal. Choose from several categories. Have what you deserve. At Xetra"/>
        <meta property="og:site_name" content="Xetra | E-Commerce"/>
        <meta name="twitter:image:alt" content="Xetra | Fashion One Stop"/>
        <meta property="fb:app_id" content="suyashk" />
        <meta name="twitter:site" content="@suyashk"/>
      </Head>
      <div className={styles.product_create_wrapper}>
        <div className={styles.product_create_left}>
          <div className={styles.product_create_images}>{images.map((image, index) => (
              <div className={styles.product_create_image} key={index}>
                {/*<Image src={URL.createObjectURL(image)} layout="fill" objectFit="contain"/> */}
                <Image src={image} layout="fill" objectFit="contain"/>
              </div>
          ))}</div>
          <div className={styles.product_create_absolute}>
            <ImageInput name="images" onChange={imageHandler}>
              <ImageIcon/> Add Image(s)
            </ImageInput>
          </div>
        </div>
        <div className={styles.product_create_right}>
          <form encType="multipart/form-data" className={styles.product_create_form}>

            <div className={styles.product_create_form_section}>
              <label className={styles.product_create_form_label} htmlFor="product_title">Product Title</label>
              <input className={styles.product_create_form_input} placeholder="Add Product Title" name="product_title" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className={styles.product_create_form_section}>
              <label className={styles.product_create_form_label}  htmlFor="product_price">Product Price</label>
              <div className={styles.product_create_form_input_price_wrapper}>
                <span>$</span><ContentEditable className={styles.product_create_form_input}placeholder="000" name="product_price" value={price} onChange={(e) => setPrice(e.target.innerText.trim())}/><span>00</span>
              </div>
            </div>

            <div className={styles.product_create_form_section} id="product_section_description">
              <label className={styles.product_create_form_label}  htmlFor="product_details">Product Details</label>
              <textarea className={styles.product_create_form_input} placeholder="Add Product Description ..." name="product_details" type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>

            <div className={styles.product_create_form_button}>
              <CallToAction onClick={submitHandler} disabled={loading}>
                {loading ? "loading..." : "Publish"}
              </CallToAction>
            </div>
            
            <div className={styles.product_create_form_section}>
              Errors: {error?.message}<br/>
              Product: {product && product._id && `Published: ${ product._id }`}
            </div>
          </form>
        </div>
    </div>
    </div>
  )
}
export default ProductCreate
