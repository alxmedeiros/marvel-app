/*
 * Reducer actions related with login
 */
import * as types from './types';

export function onErrorDispatched(response) {
    return {
        type: types.ERROR_DISPATCHED,
        response
    };
}

export function errorClean() {
    return {
        type: types.ERROR_CLEANED
    };
}