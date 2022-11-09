import { 
  CLEAR_ERRORS,
  PRODUCTS_FAIL,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_REQUEST
} from "../types/productTypes"
import axios from "../../utils/axios"

export const getAllProducts = (keyword="",page=1,price=[0, 1000000],category,ratings=0) => async(dispatch) => {
  try{
    dispatch({
      type: PRODUCTS_REQUEST
    })

    let link =`/api/v1/products?keyword=${keyword}&page=${page}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`
    if(category){
      link += `&category=${category}`
    }

    const {data} = await axios.get(link)

    dispatch({
      type: PRODUCTS_SUCCESS,
      payload: data
    })

  } catch(error){
    dispatch({
      type: PRODUCTS_FAIL,
      payload: error
    })
  }
}

export const getProductDetails = (id) => async(dispatch) => {
  try{
    dispatch({
      type: PRODUCT_DETAILS_REQUEST
    })

    let link = `/api/v1/product/${id}`
    const {data} = await axios.get(link);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product
    })
  } catch(error){
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error
    })
  }
}

export const createProduct = (body) => async(dispatch) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_REQUEST
    })

    let link = `/api/v1/admin/product/new`
    const config = {
      headers: { "Content-Type": "multipart/form-data", withCredentials: true },
    };

    const { data } = await axios.post(link, body, config);

    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data.product
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload: error
    })
  }
}

export const clearErrors = () => async(dispatch) => {
  dispatch({
    type: CLEAR_ERRORS
  })
}
