import { put, call, fork, takeEvery, all } from 'redux-saga/effects';
import * as actions from '../action';
import { api } from '../../services';

function* getCharacters() {
  try {
    const user = yield call(api.fetchUser);
    yield put(actions.receiveCharacters({ ...user }));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

export function* watchGetProducts() {
  /*
    takeEvery will fork a new `getCharacters` task on each GET_ALL_PRODUCTS actions
    i.e. concurrent GET_ALL_PRODUCTS actions are allowed
  */
  yield takeEvery(actions.SET_CHARACTERS, getCharacters);
}

export default function* root() {
  yield all([fork(watchGetProducts), fork(getCharacters)]);
}
