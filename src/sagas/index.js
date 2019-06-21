import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_TODO_LIST, RENDER_TODO_LIST } from '../actions';
import { getMembersFactory } from '../service/cm_mdmm/api';

export function* fetchToDoList() {
  // const { companyName } = action.payload;

  const api = getMembersFactory();

  const response = yield call(api, 22222222);
  const data = yield response.json();
  yield put({ type: RENDER_TODO_LIST, toDoList: data });
}

export function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}

export default function* rootSaga() {
  yield all([loadToDoList()]);
}
