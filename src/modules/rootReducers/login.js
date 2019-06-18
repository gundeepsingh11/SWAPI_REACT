import ACTIONS from '../action';

const initialState = {
  loggedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_LOGIN: {
      return {
        ...state,
        loggedIn: action.isLogedIn,
      };
    }
    default:
      return state;
  }
};
