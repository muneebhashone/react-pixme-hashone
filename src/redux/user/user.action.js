import { UserActionTypes } from "./user.types";

export const setCurrentUser = (state) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: state,
});

export const signInStart = (credentials) => ({
  type: UserActionTypes.SIGN_IN_START,
  payload: credentials,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const clearCurrentUser = () => ({
  type: UserActionTypes.CLEAR_CURRENT_USER,
});