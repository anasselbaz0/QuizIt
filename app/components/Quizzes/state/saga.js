import { put, call } from 'redux-saga/effects';
import { addQuizFail, addQuizSuccess } from './actions';
import { addQuizToCollection } from '../../../../firebase';

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

