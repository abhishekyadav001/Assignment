import * as types from "./actionTypes";

const initData = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  allUsers: [],
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
      console.log(payload, "j");
      return { ...state, isLoading: false, allUsers: [...state.allUsers, payload] };

    default:
      return state;
  }
};
