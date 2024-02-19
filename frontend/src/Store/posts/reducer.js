import * as types from "./actionTypes";

const initData = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  allPosts: [],
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
        isError: true,
        errorMessage: payload,
      };
    case types.POST_DATA_SUCCESS:
      console.log(payload.name);
      return {
        ...state,
        isLoading: false,
        allPosts: payload.posts,
        name: payload.name,
        company: payload.company,
      };
    case types.BULK_ADD:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    case types.DOWNLOAD_EXCEL:
      return { ...state };
    default:
      return state;
  }
};
