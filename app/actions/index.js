// export action creators
import * as loginActions from './marvelActions';
import * as navigationActions from './navigationActions';
import * as errorActions from './errorActions';

export const ActionCreators = Object.assign(
    {},
    loginActions,
    navigationActions,
    errorActions
);
