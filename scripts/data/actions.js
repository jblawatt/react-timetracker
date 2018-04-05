import { ADD_TRACKING_ITEM, REMOVE_TRACING_ITEM, MODIFY_TRACKING_ITEM } from "./actionTypes";

const addTrackingItem = (item) => {
    return {
        type: ADD_TRACKING_ITEM,
        item,
    };
}

const removeTrackingItem = (item) => {
    return {
        type: REMOVE_TRACING_ITEM,
        item,
    };
}

const modifyTrackingItem = (item) => {
    return {
        type: MODIFY_TRACKING_ITEM,
        item,
    };
}

export { addTrackingItem, removeTrackingItem, modifyTrackingItem };