import {
  ADD_QUESTION,
  ADD_QUIZ,
  CLOSE_ADD_QUESTION,
  GET_MY_QUIZZES,
  GET_MY_QUIZZES_FAIL,
  GET_MY_QUIZZES_SUCCESS,
  OPEN_ADD_QUESTION,
  RESET_ALL,
  SET_TITLE,
  UPDATE_ANSWERS,
  UPDATE_CORRECTS,
  UPDATE_QUESTIONS,
} from './actions';

const initialState = {
  title: '',
  quizzes: [],
  questions: [],
  answers: [],
  correct: [],
  addQuestion: false,
  loading: false,
  error: '',
};

// eslint-disable-next-line consistent-return
export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case RESET_ALL:
      return {
        ...state,
        title: '',
        questions: [],
        answers: [],
        correct: [],
        addQuestion: false,
      };
    case OPEN_ADD_QUESTION:
      return {
        ...state,
        addQuestion: true,
      };
    case CLOSE_ADD_QUESTION:
      return {
        ...state,
        addQuestion: false,
      };
    case ADD_QUESTION:
      return {
        ...state,
        questions: [
          ...state.questions,
          {
            question: action.question,
            answers: action.answers,
            correct: action.correct,
          },
        ],
        answers: [],
        correct: [],
      };
    case UPDATE_QUESTIONS:
      return {
        ...state,
        questions: [...action.questions],
      };
    case UPDATE_CORRECTS:
      return {
        ...state,
        correct: [...action.correct],
      };
    case UPDATE_ANSWERS:
      return {
        ...state,
        answers: [...action.answers],
      };
    case ADD_QUIZ:
      return {
        ...state,
        quizzes: [
          ...state.quizzes,
          {
            id: Date.now(),
            uid: action.uid,
            title: action.title,
            questions: action.questions,
            correct: action.correct,
          },
        ],
        title: '',
        questions: [],
        answers: [],
        correct: [],
      };
    case GET_MY_QUIZZES:
      return {
        ...state,
        loading: true,
      };
    case GET_MY_QUIZZES_SUCCESS:
      console.log(action);
      return {
        ...state,
        loading: false,
        quizzes: [...action.quizzes],
      };
    case GET_MY_QUIZZES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
