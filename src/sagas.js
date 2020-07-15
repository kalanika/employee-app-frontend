import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receiveApiData } from "./actions";


function* getApiData(action) {

  try {
    const endpoint = 'http://localhost:8081/employee/' + action.value;
    const response = yield call(fetch, endpoint)
    const data = yield response.json();
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}


export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
