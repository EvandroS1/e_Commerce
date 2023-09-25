import { call, put } from 'redux-saga/effects';
import api from '@/services/api';
import { ActionType } from 'typesafe-actions';
import { loadSucces, loadFailure, loadRequest } from './actions';

// export function* load() {
  // No arquivo saga.ts
export function* load(action: ActionType<typeof loadRequest>): Generator<any, void, any> {
  try {
    const category = action.payload;
    const response = yield call(api.get, `products${category}`);

    yield put(loadSucces(response.data));
    console.log(response.data);

    console.log('Produtos da categoria', category);
  } catch (error) {
    yield put(loadFailure());
  }
}
