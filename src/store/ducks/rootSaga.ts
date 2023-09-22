import { all, takeLatest } from 'redux-saga/effects';

import { RepositoriesTypes } from './repositories/types';
import {
  load,
  loadElectronics,
  loadJewelery,
  loadMensClothing,
  loadWomensClothing,
} from './repositories/saga';

export default function* rootSaga(): Generator {
  yield all([
    takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
    takeLatest(RepositoriesTypes.LOAD_REQUEST_MENS_CLOTHING, loadMensClothing),
    takeLatest(
      RepositoriesTypes.LOAD_REQUEST_WOMENS_CLOTHING,
      loadWomensClothing,
    ),
    takeLatest(RepositoriesTypes.LOAD_REQUEST_JEWELERY, loadJewelery),
    takeLatest(RepositoriesTypes.LOAD_REQUEST_ELECTRONICS, loadElectronics),
  ]);
}
