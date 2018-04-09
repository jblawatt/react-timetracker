import { render } from "react-dom";
import { AppComponent } from "./components/app-component";
import { Provider } from "react-redux";
import { trackingStore } from "./data/stores";
import { addTrackingItem } from "./data/actions";

render(
    <Provider store={trackingStore}>
        <AppComponent />
    </Provider>,
    document.getElementById('app-container'),
);


document.addEventListener('DOMContentLoaded', (e) => {
    fetch('http://localhost:8000/tracking-items/')
        .then(r => r.json())
        .then(j => j.forEach(i => trackingStore.dispatch(addTrackingItem(i))));
});
