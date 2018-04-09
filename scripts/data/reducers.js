
import * as actions from "./actionTypes";
import { curry } from "lodash";


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
        case actions.ADD_TRACKING_ITEM:
            return Object.assign({}, state, { items: state.items.concat(action.item) });
        case actions.REMOVE_TRACING_ITEM:
            return Object.assign({}, state, { items: state.items.filter((i) => i != action.item.id) });
        case actions.MODIFY_TRACKING_ITEM:
            return Object.assign({}, state, { items: state.items.map((i) => i.id == action.item.id ? action.item : i) });
        case actions.ADD_OR_MODIFY_TRACKING_ITEM:
            let items = state.items;
            if (state.items.some(i => i.id == action.item.id)) {
                items = items.map((i) => {
                    if (i.id == action.item.id) {
                        return action.item;
                    } else {
                        return i;
                    }
                });
            } else {
                items.push(action.item);
            }
            return Object.assign({}, state, {
                items: items
            })
        default:
            return state;
    }
}

export { trackingReducer };