import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: "",
      };

    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case UserActionTypes.CLEAR_CURRENT_USER:
      return {
        ...state,
        currentUser: null,
        error: null,
      };

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
