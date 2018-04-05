
import { TimeTrackInputComponent } from "./timetrack-input-component";
import { TimeTrackListComponent } from "./timetrack-list-component";

const AppComponent = function () {
    return (
        <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--12-col">
                <TimeTrackInputComponent />
            </div>
            <div className="mdl-cell mdl-cell--12-col">
                <TimeTrackListComponent />
            </div>
        </div>
    );
};

export {
    AppComponent
};