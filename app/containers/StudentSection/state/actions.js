export const SET_PIN = 'SET_PIN';
export const LOAD_QUIZ_REQUEST = 'LOAD_QUIZ_REQUEST';
export const LOAD_QUIZ_SUCCESS = 'LOAD_QUIZ_SUCCESS';
export const LOAD_QUIZ_FAIL = 'LOAD_QUIZ_FAIL';

export const setPin = pin => ({
  type: SET_PIN,
  pin,
});

export const loadQuizRequest = pin => ({
  type: LOAD_QUIZ_REQUEST,
  pin,
});

export const loadQuizSuccess = quiz => ({
  type: LOAD_QUIZ_SUCCESS,
  quiz,
});

export const loadQuizFail = error => ({
  type: LOAD_QUIZ_FAIL,
  error,
});
