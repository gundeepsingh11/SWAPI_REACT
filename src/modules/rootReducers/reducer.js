import { RECEIVE_CHARACTERS } from '../action';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CHARACTERS: {
      return {
        ...state,
        ...action.characters.data,
      };
    }
    default:
      return state;
  }
};
