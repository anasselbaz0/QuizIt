import produce from 'immer';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {},
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      // case LOAD_REPOS_ERROR:
      //   draft.error = action.error;
      //   draft.loading = false;
      //   break;
      default:
        break;
    }
  });

export default appReducer;
