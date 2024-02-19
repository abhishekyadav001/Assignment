import { axiosInstance } from "../../utils/axiosInstance";
import * as types from "./actionTypes";

export const getAllUser = () => async (dispatch) => {
  dispatch({ type: types.ACCOUNT_LOADING });
  try {
    const res = await axiosInstance.get("/user/getallusers");
    console.log(res);
    dispatch({ type: types.ACCOUT_DATA_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.ACCOUNT_ERROR, payload: error });
    throw new Error(error);
  }
};

export const addSingleUser = (userData) => async (dispatch) => {
  dispatch({ type: types.ACCOUNT_LOADING });
  try {
    console.log(userData);
    dispatch({ type: types.SINGLE_USER_SUCCESS, payload: { ...userData } });
  } catch (error) {
    dispatch({ type: types.ACCOUNT_ERROR, payload: error });
    throw new Error(error);
  }
};

export const postUser = (userData) => async (dispatch) => {
  dispatch({ type: types.ACCOUNT_LOADING });
  try {
    const res = await axiosInstance.post("/user/postuser", { ...userData });
    console.log(res);
    dispatch({ type: types.POST_DATA_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.POST_DATA_FAIL, payload: error.response.data });
    return Promise.reject(error.response.data.message);
  }
};
