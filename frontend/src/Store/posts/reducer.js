import * as types from "./actionTypes";

const initData = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  successMessage: "",
  allPosts: [],
  usersPostexist: false,
  name: "",
  company: {},
};

export const postReducer = (state = initData, { type, payload }) => {
  switch (type) {
    case types.POST_LOADING:
      return { ...state, isLoading: true, isError: false, signupStatus: false };
    case types.POST_ERROR:
      return {
        ...state,
        isLoading: false,
        usersPostexist: payload.usersPostexist,
        isError: true,
        errorMessage: payload.message,
      };
    case types.POST_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        usersPostexist: false,
        allPosts: payload.posts,
        name: payload.name,
        company: payload.company,
      };
    case types.BULK_ADD:
      return {
        ...state,
        isLoading: false,
        isUserExist: payload.usersPostexist,
        successMessage: payload.message,
      };
    case types.DOWNLOAD_EXCEL:
      return { ...state, successMessage: payload.message };
    case types.CHECK_DB_POSTS:
      console.log(payload);
      return {
        ...state,
        successMessage: payload.message,
        usersPostexist: payload.isPostsExist,
      };
    default:
      return state;
  }
};
