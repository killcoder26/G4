import { takeEvery } from "redux-saga/effects";
import getDataHandler from "./handler/getDataHandler";
import postDataHandler from "./handler/postDataHandler";
import searchDataHandler from "./handler/searchDataHandler";

export  function* sagaWatcher() {
    console.log("GET WATCHER");
    yield takeEvery("FETCH_USER_START", getDataHandler);
}

export  function* sagaWatcher2() {
    console.log("POST WATCHER");
    yield takeEvery("POST_USER_START",postDataHandler);
}
export  function* sagaWatcher3() {
    console.log("SEARCH WATCHER");
    yield takeEvery("SEARCH_USER_START",searchDataHandler);
}