import * as types from "./actionTypes";

const initData = {
  isLoading: false,
  isError: false,
  successMessage: "",
  errorMessage: "",
  matchedUsers: [],
  unmatchedUsers: [],
  singleUser: {},
};

export const userReducer = (state = initData, { type, payload }) => {
  switch (type) {
    case types.ACCOUNT_LOADING:
      return { ...state, isLoading: true, isError: false };
    case types.ACCOUNT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    case types.ACCOUT_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        matchedUsers: payload.matchedUsers,
        unmatchedUsers: payload.unmatchedUsers,
        successMessage: payload.message,
      };

    default:
      return state;
  }
};
