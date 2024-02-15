import { axiosInstance } from "../../utils/axiosInstance";
import * as types from "./actionTypes";

export const getAllUser = () => async (dispatch) => {
  dispatch({ type: types.ACCOUNT_LOADING });
  try {
    const res = await axiosInstance.get("/user/getallusers");
    dispatch({ type: types.ACCOUT_DATA_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.ACCOUNT_ERROR, payload: error.response.data.message });
    return Promise.reject(error.response.data.message);
  }
};
