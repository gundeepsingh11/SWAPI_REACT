import { combineReducers } from 'redux';
import characters from './reducer';
import login from './login';

export default combineReducers({
  characters,
  login,
});
