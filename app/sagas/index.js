/**
 *  Redux saga class init
 */
import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import { fetchCharacters, getCharDetails } from './marvelSaga';

export default function* watch() {
    yield all([takeLatest(types.REQUEST_CHARACTERS, fetchCharacters)]);
    yield all([takeLatest(types.REQUEST_CHARACTER_DETAIL, getCharDetails)]);
    // yield all([takeLatest(types.ERROR_DISPATCHED, errorHandler)]);
}
