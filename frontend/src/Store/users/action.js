import { axiosInstance } from "../../utils/axiosInstance";
import * as types from "./actionTypes";

export const getAllUser = () => async (dispatch) => {
  dispatch({ type: types.ACCOUNT_LOADING });
  try {
    const res = await axiosInstance.get("/user/getallusers");
    dispatch({ type: types.ACCOUT_DATA_SUCCESS, payload: res.data.users });
  } catch (error) {
    dispatch({ type: types.ACCOUNT_ERROR, payload: error.response.data.message });
    return Promise.reject(error.response.data.message);
  }
};
export const postUser = (userInfo) => async (dispatch) => {
  dispatch({ type: types.ACCOUNT_LOADING });
  try {
    const res = await axiosInstance.post("/user/postuser", userInfo);

    dispatch({ type: types.POST_DATA_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.POST_DATA_FAIL, payload: error.response.data });
    return Promise.reject(error.response.data.message);
  }
};
