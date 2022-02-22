import { all, fork } from "@redux-saga/core/effects";
import { watchLiveDataSaga } from "./SocketSaga";


export default function* WatcherSaga() {
  yield all([fork(watchLiveDataSaga)]);
}
