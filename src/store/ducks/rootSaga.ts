import { all, takeLatest } from 'redux-saga/effects';

import { RepositoriesTypes } from './repositories/types';
import { load } from './repositories/saga';

export default function* rootSaga(): Generator {
  yield all([
    takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
  ]);
}
