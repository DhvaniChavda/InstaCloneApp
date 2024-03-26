import {combineReducers} from 'redux';
import commonReducer from 'src/redux/reducer/commonReducer';

const appReducer = combineReducers({commonReducer});

export default appReducer;
