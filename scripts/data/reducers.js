
import { ADD_TRACKING_ITEM, REMOVE_TRACING_ITEM, MODIFY_TRACKING_ITEM } from "./actionTypes";

const initialState = {
    items: [{
        id: 'hello-world-id',
        value: 'Hello World',
        startTime: new Date(),
        stopTime: new Date(),
        tags: [],
    }]
};


function trackingReducer(state, action) {

    if (state == undefined) {
        return initialState;
    }
    switch (action.type) {
        case ADD_TRACKING_ITEM:
            return Object.assign({}, state, { items: state.items.concat(action.item) });
        case REMOVE_TRACING_ITEM:
            return Object.assign({}, state, { items: state.items.filter((i) => i != action.item.id) });
        case MODIFY_TRACKING_ITEM:
            return Object.assign({}, state, { items: state.items.map((i) => i.id == action.item.id ? action.item : i) });
        default:
            return state;
    }
}

export { trackingReducer };