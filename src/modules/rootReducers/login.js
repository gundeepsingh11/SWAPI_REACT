import { SET_LOGIN } from '../action';

const initialState = {
  loggedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN: {
      return {
        ...state,
        loggedIn: action.isLogedIn,
      };
    }
    default:
      return state;
  }
};
