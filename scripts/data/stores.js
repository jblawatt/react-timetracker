import { createStore } from "redux";
import { trackingReducer } from "./reducers";


const store = createStore(trackingReducer);

export { store };
