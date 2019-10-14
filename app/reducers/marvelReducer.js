/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    currentPage: 1,
    offset: 0,
    limit: 4,
    total: '',
    count: 4,
    results: [],
    selected: '',
    error: false
};

export const marvelReducer = createReducer(initialState, {
    [types.REQUEST_CHARACTERS](state, action) {
        return {
            ...state,
            params: action.params
        };
    },
    [types.RESPONSE_CHARACTERS](state, action) {
        return {
            ...state,
            offset: action.response.offset,
            limit: action.response.limit,
            total: action.response.total,
            count: action.response.count,
            results: action.response.results
        };
    },
    [types.FAILED_CHARACTERS](state, action) {
        return {
            ...state,
            offset: 0,
            limit: 4,
            total: '',
            count: 4,
            results: [],
            error: action.response.message
        };
    },
    [types.CHANGE_PAGE](state, action) {
        return {
            ...state,
            currentPage: action.page
        };
    },
    [types.REQUEST_CHARACTER_DETAIL](state, action) {
        return {
            ...state,
            characterId: action.characterId
        };
    },
    [types.RESPONSE_CHARACTER_DETAIL](state, action) {
        return {
            ...state,
            selected: action.response.results[0]
        };
    },
});
