import * as types from "./actionTypes";

const initData = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  allUsers: [],
  allDBusers: [],
  singleUser: {},
  isUserExist: false,
};

export const userReducer = (state = initData, { type, payload }) => {
  switch (type) {
    case types.ACCOUNT_LOADING:
      return { ...state, isLoading: true, isError: false, signupStatus: false };
    case types.ACCOUNT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload.message,
      };
    case types.ACCOUT_DATA_SUCCESS:
      return { ...state, isLoading: false, allUsers: payload };
    case types.POST_DATA_SUCCESS:
      return { ...state, isLoading: false, singleUser: payload, isUserExist: payload.userExist };
    case types.POST_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload.message,
      };
    case types.DB_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allDBusers: payload.usersData,
      };
    case types.DB_USERS_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isUserExist: payload.userExist,
        errorMessage: payload.message,
      };
    default:
      return state;
  }
};
