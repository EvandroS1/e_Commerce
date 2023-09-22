import { call, put } from 'redux-saga/effects';
import api from '@/services/api';

import { loadSucces, loadFailure } from './actions';

// export function* load() {
export function* load(): Generator<any, void, any> {
  try {
    const response = yield call(api.get, 'products');

    yield put(loadSucces(response.data));

    console.log('resp', response.data);
  } catch (error) {
    yield put(loadFailure());
  }
}
export function* loadMensClothing(): Generator<any, void, any> {
  try {
    const response = yield call(api.get, 'products/category/mensclothing');

    yield put(loadSucces(response.data));

    console.log("Dados da categoria 'men's clothing':", response.data);
  } catch (error) {
    yield put(loadFailure());
  }
}

export function* loadWomensClothing(): Generator<any, void, any> {
  try {
    const response = yield call(api.get, 'products/category/womensclothing');

    yield put(loadSucces(response.data));

    console.log("Dados da categoria 'women's clothing':", response.data);
  } catch (error) {
    yield put(loadFailure());
  }
}

export function* loadJewelery(): Generator<any, void, any> {
  try {
    const response = yield call(api.get, '/products/category/jewelery');

    yield put(loadSucces(response.data));

    console.log('Dados da categoria "jewelery":', response.data);
  } catch (error) {
    yield put(loadFailure());
  }
}

export function* loadElectronics(): Generator<any, void, any> {
  try {
    const response = yield call(api.get, 'products/category/electronics');

    yield put(loadSucces(response.data));

    console.log('Dados da categoria "electronics":', response.data);
  } catch (error) {
    yield put(loadFailure());
  }
}
