import { call, put } from 'redux-saga/effects';
import postMyUser from '../requests/post';

export default function* postDataHandler(action) {
console.log("Post Handler");
    try {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const response= yield call(postMyUser,action.payload);
        const {data}=response;
        yield put({type:"POST_USER",payload:data});
        
    }
    catch (error) {
        console.log(error);
    }

}