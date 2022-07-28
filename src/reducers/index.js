import UserReducer from './userReducer';
const { combineReducers } = require("redux");


export default combineReducers(
    {
        user: UserReducer,
        post:UserReducer
    })