
import { ADD_TRACKING_ITEM, REMOVE_TRACING_ITEM, MODIFY_TRACKING_ITEM, ADD_OR_MODIFY_TRACKING_ITEM } from "./actionTypes";
import { curry } from "lodash";


const _basisAction = (actionType, item) => {
    return {
        type: actionType,
        item,
    };
}

const addTrackingItem = curry(_basisAction)(ADD_TRACKING_ITEM);
const removeTrackingItem = curry(_basisAction)(REMOVE_TRACING_ITEM);
const modifyTrackingItem = curry(_basisAction)(MODIFY_TRACKING_ITEM);
const addOrModifyTrackingItem = item => curry(_basisAction)(ADD_OR_MODIFY_TRACKING_ITEM);

export { addTrackingItem, removeTrackingItem, modifyTrackingItem, addOrModifyTrackingItem };