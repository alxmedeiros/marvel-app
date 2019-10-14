/* 
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './marvelReducer';
import * as errorReducer from './errorReducer';

export default Object.assign(errorReducer, loginReducer, loadingReducer);
