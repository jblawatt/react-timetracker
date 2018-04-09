
import { TimeTrackItemComponent } from "./timetrack-item-component";
import { connect } from "react-redux";

let TimeTrackListComponent = function (props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>T</th>
                    <th>P</th>
                    <th>€</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {props.items.map((task) => {
                    return <TimeTrackItemComponent key={task.id} task={task} />
                })}
            </tbody>
        </table>
    );
};

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, ownProps, { items: state.items });
}

const mapDispToProps = (dispatch, ownProps) => {
    return {}
}

TimeTrackListComponent = connect(mapStateToProps, mapDispToProps)(TimeTrackListComponent);

export { TimeTrackListComponent };