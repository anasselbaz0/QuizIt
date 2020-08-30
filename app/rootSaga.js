import { takeLatest } from 'redux-saga/effects';
import {
  TRY_LOGIN,
  TRY_SIGNUP,
} from './components/Authentication/Auth.constants';
import { login, signup } from './components/Authentication/Auth.saga';

export default function* rootSaga() {
  yield takeLatest(TRY_LOGIN, login);
  yield takeLatest(TRY_SIGNUP, signup);
}
