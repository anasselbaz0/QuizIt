import { put, call } from 'redux-saga/effects';
import {
  addQuizFail,
  addQuizSuccess,
  getMyQuizzesFail,
  getMyQuizzesSuccess,
} from './actions';
import { addQuizToCollection, fbGetMyQuizzes } from '../../../../firebase';

export function* addQuiz(action) {
  const quiz = {
    id: Date.now(),
    uid: action.uid,
    title: action.title,
    questions: action.questions,
    correct: action.correct,
  };
  try {
    const rep = yield call(addQuizToCollection, quiz);
    yield put(addQuizSuccess());
  } catch (error) {
    yield put(addQuizFail(error));
  }
}

export function* getMyQuizzes(action) {
  try {
    const quizzes = yield call(fbGetMyQuizzes);
    yield put(getMyQuizzesSuccess(quizzes));
  } catch (error) {
    yield put(getMyQuizzesFail(error));
  }
}
