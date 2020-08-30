import { put, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {
  loginFail,
  loginSuccess,
  signupFail,
  signupSuccess,
} from './Auth.actions';
import { fbSignup, fbLogin } from '../../../firebase';

export function* signup(action) {
  try {
    const user = yield call(
      fbSignup,
      action.payload.email,
      action.payload.password,
    );
    sessionStorage.setItem('in', 'true');
    yield put(push('/home'));
    yield put(signupSuccess(user));
  } catch (error) {
    yield put(signupFail(error.message));
  }
}

export function* login(action) {
  try {
    const user = yield call(
      fbLogin,
      action.payload.email,
      action.payload.password,
    );
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFail(error.message));
  }
}
