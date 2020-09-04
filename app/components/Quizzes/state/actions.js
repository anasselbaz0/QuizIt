export const SET_TITLE = 'SET_TITLE';
export const OPEN_ADD_QUESTION = 'OPEN_ADD_QUESTION';
export const CLOSE_ADD_QUESTION = 'CLOSE_ADD_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';
export const UPDATE_QUESTIONS = 'UPDATE_QUESTIONS';
export const UPDATE_CORRECTS = 'UPDATE_CORRECTS';
export const UPDATE_ANSWERS = 'UPDATE_ANSWERS';
export const RESET_ALL = 'RESET_ALL';

export const ADD_QUIZ = 'ADD_QUIZ';
export const ADD_QUIZ_SUCCESS = 'ADD_QUIZ_SUCCESS';
export const ADD_QUIZ_FAIL = 'ADD_QUIZ_FAIL';

export const addQuiz = (title, questions, correct, uid) => ({
  type: ADD_QUIZ,
  title,
  questions,
  correct,
  uid
});

export const addQuizSuccess = () => ({
  type: ADD_QUIZ_SUCCESS,
});

export const addQuizFail = (error) => ({
  type: ADD_QUIZ_FAIL,
  error
});

export const resetAll = () => ({
  type: RESET_ALL,
});

export const setTitle = title => ({
  type: SET_TITLE,
  title,
});

export const openAddQuestion = () => ({
  type: OPEN_ADD_QUESTION,
});

export const closeAddQuestion = () => ({
  type: CLOSE_ADD_QUESTION,
});

export const addToQuestions = (question, answers, correct) => ({
  type: ADD_QUESTION,
  question,
  answers,
  correct,
});

export const updateQuestions = newQuestions => ({
  type: UPDATE_QUESTIONS,
  questions: newQuestions,
});

export const updateCorrects = correctArray => ({
  type: UPDATE_CORRECTS,
  correct: correctArray,
});

export const updateAnswers = newAnswers => ({
  type: UPDATE_ANSWERS,
  answers: newAnswers,
});
