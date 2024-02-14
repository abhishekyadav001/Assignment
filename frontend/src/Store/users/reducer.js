import * as types from "./actionTypes";

const initData = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  signupStatus: false,
  usersData: [],
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
        signupStatus: false,
        errorMessage: payload,
      };
    case types.ACCOUT_DATA_SUCCESS:
      return { ...state, isLoading: false, usersData: payload };

    default:
      return state;
  }
};
