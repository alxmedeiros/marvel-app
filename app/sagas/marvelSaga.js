import { put, call } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import { fetchCaracters, getCharacterDetails } from 'app/api/methods/marvel';
import * as marvelActions from 'app/actions/marvelActions';
import * as navigationActions from 'app/actions/navigationActions';
// import * as errorActions from 'app/actions/errorActions';

export function * fetchCharacters(params) {

    try {

        const response = yield call(fetchCaracters, params);

        yield put(marvelActions.onRequestResponse(response.data));

    } catch(error) {
        console.log( 'error', error );
    }

}

export function * getCharDetails(params) {

    try {

        const response = yield call(getCharacterDetails, params.characterId);

        yield put(marvelActions.onGetDetails(response.data));
        navigationActions.navigateToDetail();

    } catch(error) {
        console.log( 'error', error );
    }

}
