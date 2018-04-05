const TimeTrackItemComponent = function (props) {
    // let task = vnode.attrs.task;
    let task = props.task;
    return (
        <tr>
            <td>{task.value}</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{(task.stopTime - task.startTime).toString()}</td>
        </tr>
    )
};

export { TimeTrackItemComponent };