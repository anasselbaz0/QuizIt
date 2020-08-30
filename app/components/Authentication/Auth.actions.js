import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  TRY_LOGIN,
  TRY_SIGNUP,
} from './Auth.constants';

export const tryLogin = ({ email, password }) => ({
  type: TRY_LOGIN,
  payload: { email, password },
});

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user,
});

export const loginFail = error => ({
  type: LOGIN_FAIL,
  error: JSON.stringify(error),
});

export const trySignup = ({ email, password }) => ({
  type: TRY_SIGNUP,
  payload: { email, password },
});

export const signupSuccess = user => ({
  type: SIGNUP_SUCCESS,
  user,
});

export const signupFail = error => ({
  type: SIGNUP_FAIL,
  error: JSON.stringify(error),
});
