import { call, put } from 'redux-saga/effects';
import getMyUser2 from '../requests/search';

export default function* searchDataHandler(action) {
console.log("Handler");
    try {
        const response = yield call(getMyUser2,action.payload);
        const { data } = response;
        yield put({ type: "SET_USER", payload: data }); 
    }
    catch (error) {
        console.log(error);
    }

}