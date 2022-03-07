import { eventChannel } from "redux-saga";
import { call, put, take, takeEvery } from "@redux-saga/core/effects";

function initWebsocket() {
    console.log("initWebsocket");
    return eventChannel((emitter) => {
        //Subscription Data
        const subscribe = {
            type: "subscribe",
            channels: [
                {
                    name: "ticker",
                    product_ids: ["BTC-USD"]
                }
            ]
        };

        //Subscribe to websocket
        let ws = new WebSocket("wss://ws.channels.honeycombpizza.link/ws/notify/");
        console.log("ws", ws);

        ws.onopen = () => {
            console.log("Opening Websocket");
            ws.send(JSON.stringify(subscribe));
        };

        ws.onerror = (error) => {
            console.log("ERROR: ", error);
            console.dir(error);
        };

        ws.onmessage = (e) => {
            let value = null;
            try {
                value = JSON.parse(e.data);
            } catch (e) {
                console.error(`Error Parsing Data: ${e.data}`);
            }
            // console.log("value", value);
            if(value.test === "test"){
                // console.log("test 확인")
            }
            // console.log("value.test", value.test);
            // console.log("e data", e);

            // emitter({
            //     type: "ANY",
            //     data: value
            // });

            emitter({
                type: "SOCKET_POST",
                data: value
            });

            // if (value && value.type === "ticker") {
            //     emitter({
            //         type: "SOCKET_POST",
            //         data: value.price
            //     });
            // }
        };

        return () => {
            ws.close();
        };
    });
}

function* wsSaga() {
    const channel = yield call(initWebsocket);
    while (true) {
        const action = yield take(channel);
        yield put(action);
    }
}

export function* watchLiveDataSaga() {
    yield takeEvery("SOCKET_START", wsSaga);
}
