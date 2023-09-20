import { call, put } from 'redux-saga/effects';
import api from '@/services/api';

import { loadSucces, loadFailure } from './actions';

export function* load(): Generator<any, void, any> {
  try {
    const response = yield call(api.get, '/products');

    yield put(loadSucces(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}





