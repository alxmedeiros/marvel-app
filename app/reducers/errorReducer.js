/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    code: 0,
    message: '',
    error: '',
    isError: false
};

export const errorReducer = createReducer(initialState, {
    [types.ERROR_DISPATCHED](state, action) {
        return {
            ...state,
            isError: true,
            message: action.response.message,
            error: action.response.error,
            code: action.response.code
        };
    },
    [types.ERROR_CLEANED](state) {
        return {
            ...state,
            code: 0,
            message: '',
            error: '',
            isError: false
        };
    }
});
