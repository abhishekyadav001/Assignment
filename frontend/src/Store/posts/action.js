import { useSelector } from "react-redux";
import { axiosInstance } from "../../utils/axiosInstance";
import * as types from "./actionTypes";
const { allPosts } = useSelector((store) => store.post);
export const getPosts = (userId) => async (dispatch) => {
  dispatch({ type: types.POST_LOADING });
  try {
    console.log(userId);
    const res = await axiosInstance.get(`/post/${userId}`);
    console.log(res);
    dispatch({ type: types.POST_DATA_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.POST_ERROR, payload: error.response.data });
    return Promise.reject(error.response.data.message);
  }
};
export const BulkAdd = () => async (dispatch) => {
  dispatch({ type: types.POST_LOADING });
  try {
    console.log(userId);
    const res = await axiosInstance.post(`/post/dbposts/`, allPosts);
    console.log(res);
    dispatch({ type: types.BULK_ADD, payload: res.data });
  } catch (error) {
    dispatch({ type: types.POST_ERROR, payload: error.response.data });
    return Promise.reject(error.response.data.message);
  }
};
