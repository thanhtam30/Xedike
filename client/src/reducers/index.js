import {combineReducers} from 'redux';
import userReducer from './usersReducer';
import driverReducer from './driverReducer';
import carReducer from './carReducer';
import errorsReducer from './errorsReducer';
import carmanufatureReducer from './carmanufactureReducer';
import isAddNewTask from './isAddNewTask'
export default combineReducers({
users:userReducer,
driver:driverReducer,
car:carReducer,
errors:errorsReducer,
isAddNewTask:isAddNewTask,
carmanufature:carmanufatureReducer
})