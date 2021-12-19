import { CLEAR_ERRORS, PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../types/productTypes"
import axios from "../../utils/axios"

export const getAllProducts = (keyword="") => async(dispatch) => {
    try{
        dispatch({
            type: PRODUCT_REQUEST
        })

        let link =`/api/v1/products?keyword=${keyword}`

        const {data} = await axios.get(link)

        dispatch({
            type: PRODUCT_SUCCESS,
            payload: data
        })

    } catch(error){
        dispatch({
            type: PRODUCT_FAIL,
            payload: error
        })
    }
}

export const clearErrors = () => async(dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}