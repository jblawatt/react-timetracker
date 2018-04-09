import { createStore } from "redux";
import { trackingReducer } from "./reducers";


const trackingStore = createStore(trackingReducer);

export { trackingStore };
