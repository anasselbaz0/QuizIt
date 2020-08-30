import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  TRY_LOGIN,
  TRY_SIGNUP,
} from './Auth.constants';

const initialState = {
  loading: false,
  message: '',
  error: '',
  profile: {
    username: '',
    email: '',
  },
  loggedIn: false,
};

// eslint-disable-next-line consistent-return
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case TRY_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loading: false,
        error: '',
        message: 'Logged In Successfully',
        profile: action.user.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        message: '',
      };
    case TRY_SIGNUP:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        message: 'Signed Up Successfully',
        error: '',
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        message: '',
      };
    default:
      return state;
  }
}
