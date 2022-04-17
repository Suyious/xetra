import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  CLEAR_ERRORS,
} from "../types/userTypes";
import axios from "../../utils/axios";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    console.log(email, password);
    const config = {
      headers: { "Content-Type": "application/json", withCredentials: true },
    };

    const { data } = await axios.post(
      `/api/v1/login`,
      { email, password },
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.message,
      });
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.message,
      });
    }
  }
};

export const registerUser = (credentials) => async (dispatch) => {
  try {
    dispatch({
      type: REGISTER_USER_REQUEST,
    });

    // console.log(email, password);
    const config = {
      headers: { "Content-Type": "multipart/form-data", withCredentials: true },
    };

    const { data } = await axios.post(`/api/v1/register`, credentials, config);

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    } else {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error,
      });
    }
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_USER_REQUEST,
    });

    const { data } = await axios.get(`/api/v1/me`);

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: LOAD_USER_FAIL,
        payload: error.response.data.message,
      });
    } else {
      dispatch({
        type: LOAD_USER_FAIL,
        payload: error.message,
      });
    }
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
