import { takeLatest } from 'redux-saga/effects';
import {
  TRY_LOGIN,
  TRY_SIGNUP,
} from './components/Authentication/Auth.constants';
import { login, signup } from './components/Authentication/Auth.saga';
import { ADD_QUIZ } from './components/Quizzes/state/actions';
import { addQuiz } from './components/Quizzes/state/saga';

export default function* rootSaga() {
  yield takeLatest(TRY_LOGIN, login);
  yield takeLatest(TRY_SIGNUP, signup);
  yield takeLatest(ADD_QUIZ, addQuiz);
}
