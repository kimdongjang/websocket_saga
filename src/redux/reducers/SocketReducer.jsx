const initialState = {
    LiveData: []
};

export default function (state = initialState, action) {
    console.log(state);
    console.log(action);

    switch (action.type) {
        case "SOCKET_POST":
            return {
                ...state,
                LiveData: [...state.LiveData, action.data],
                // timeLabels: [...state.timeLabels, new Date().toLocaleTimeString()]
            };
        default:
            return state;
    }
}
