import * as types from "./actionTypes";

const initData = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  matchedUsers: [],
  unmatchedUsers: [],
  singleUser: {},
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
        errorMessage: payload,
      };
    case types.ACCOUT_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        matchedUsers: payload.matchedUsers,
        unmatchedUsers: payload.unmatchedUsers,
      };
    case types.DB_USERS_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    case types.SINGLE_USER_SUCCESS:
      console.log(payload);
      return {
        ...state,
        isLoading: false,
        singleUser: payload,
      };
    default:
      return state;
  }
};
