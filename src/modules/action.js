export const SET_CHARACTERS = 'SET_CHARACTERS';
export const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS';

export const SET_LOGIN = 'SET_LOGIN';

export const receiveCharacters = characters => {
  return {
    type: RECEIVE_CHARACTERS,
    characters,
  };
};

export const setLogin = isLogedIn => {
  return dispatch => {
    dispatch({ type: SET_LOGIN, isLogedIn });
  };
};

export default {
  receiveCharacters,
  SET_CHARACTERS,
  RECEIVE_CHARACTERS,
  SET_LOGIN,
};
