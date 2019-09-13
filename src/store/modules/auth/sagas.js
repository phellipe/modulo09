import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';

export function* singIN({ payload }) {
  const { email, password } = payload;
  const response = yield call(api.post, 'sessions');
}

export default all([takeLatest('@auth/SING_IN_REQUEST', singIN)]);
