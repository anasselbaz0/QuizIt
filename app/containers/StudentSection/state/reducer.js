import { SET_PIN } from './actions';

const initialState = {
  pin: '',
};

export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PIN:
      return {
        ...state,
        pin: action.pin,
      };
    default:
      return state;
  }
}
