import {combineReducers} from 'redux';
import {userManage} from './user';
import {path} from './pathRoute';
import {reportManage} from './reports';
const rootReducer = combineReducers({
  path,userManage,reportManage
})


export default rootReducer
