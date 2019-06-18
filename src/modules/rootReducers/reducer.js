import ACTIONS from '../action';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_CHARACTERS: {
      return {
        ...state,
        ...action.characters.data,
      };
    }
    default:
      return state;
  }
};
