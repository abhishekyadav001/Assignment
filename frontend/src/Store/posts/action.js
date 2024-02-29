import { axiosInstance } from "../../utils/axiosInstance";
import * as types from "./actionTypes";
export const getPosts = (userId) => async (dispatch) => {
  dispatch({ type: types.POST_LOADING });
  try {
    const res = await axiosInstance.get(`/post/${userId}`);

    dispatch({ type: types.POST_DATA_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.POST_ERROR, payload: error.response.data });
    return Promise.reject(error.response.data.message);
  }
};
export const BulkAdd = (bulkData) => async (dispatch) => {
  dispatch({ type: types.POST_LOADING });
  try {
    const res = await axiosInstance.post(`/post/bulkadd/`, bulkData);

    dispatch({ type: types.BULK_ADD, payload: res.data });
  } catch (error) {
    dispatch({ type: types.POST_ERROR, payload: error.response.data });
    return Promise.reject(error.response.data.message);
  }
};

export const checkDBposts = (userId) => async (dispatch) => {
  dispatch({ type: types.POST_LOADING });
  try {
    const res = await axiosInstance.get(`post/checkdbposts/${userId}`);
    console.log(res);
    dispatch({ type: types.CHECK_DB_POSTS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.POST_ERROR, payload: error.response.data });
    return Promise.reject(error.response.data.message);
  }
};

export const downloadInexcel = async (userId) => {
  try {
    const response = await axiosInstance.get(`/post/${userId}/download-excel`, {
      responseType: "blob", // Set responseType to 'blob' to receive binary data
    });
    return response.data; // Return the binary data of the Excel file
  } catch (error) {
    console.error("Error downloading Excel file:", error);
    throw error; // Re-throw the error to be caught by the component
  }
};
