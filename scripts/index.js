import { render } from "react-dom";
import { AppComponent } from "./components/app-component";
import { Provider } from "react-redux";
import { store } from "./data/stores";
import { addTrackingItem } from "./data/actions";

render(
    <Provider store={store}>
        <AppComponent />
    </Provider>,
    document.getElementById('app-container'),
);