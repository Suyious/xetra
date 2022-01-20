import { CLEAR_ERRORS, PRODUCTS_FAIL, PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from "../types/productTypes"
import axios from "../../utils/axios"

export const getAllProducts = (keyword="",page=1) => async(dispatch) => {
    try{
        dispatch({
            type: PRODUCTS_REQUEST
        })

        let link =`/api/v1/products?keyword=${keyword}&page=${page}`

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

export const clearErrors = () => async(dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}