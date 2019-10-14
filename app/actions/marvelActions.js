/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestCharacters(params) {
    return {
        type: types.REQUEST_CHARACTERS,
        params
    };
}

export function failedCharacters(response) {
    return {
        type: types.FAILED_CHARACTERS,
        response
    };
}

export function onRequestResponse(response) {
    return {
        type: types.RESPONSE_CHARACTERS,
        response
    };
}

export function onChangePage(page) {
    return {
        type: types.CHANGE_PAGE,
        page
    };
}

export function requestCharacterDetails(characterId) {
    return {
        type: types.REQUEST_CHARACTER_DETAIL,
        characterId
    };
}

export function onGetDetails(response) {
    return {
        type: types.RESPONSE_CHARACTER_DETAIL,
        response
    };
}
