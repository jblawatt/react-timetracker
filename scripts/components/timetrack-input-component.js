import { Component } from "react";
import { connect } from "react-redux";

class TimeTrackInputComponent extends Component {

    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--6-col">
                    <form>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="text"
                                id="workin-on-input"
                            />
                            <label className="mdl-textfield__label" htmlFor="workin-on-image">What are you working on?</label>
                        </div>

                    </form>
                </div>
                <div className="mdl-cell mdl-cell--2-col">
                    <div>
                        <span className="mdl-chip mdl-chip--deletable">
                            <span className="mdl-chip__text">Deletable Chip</span>
                            <button type="button" className="mdl-chip__action"><i className="material-icons">cancel</i></button>
                        </span>

                        <button id="workon-project-selection"
                            className="mdl-button mdl-js-button mdl-button--icon">
                            <i className="material-icons">more_vert</i>
                        </button>
                        <ul className="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
                            htmlFor="workon-project-selection">
                            <li className="mdl-menu__item">
                                Projekt 1
                            </li>
                            <li className="mdl-menu__item">Projekt 2</li>
                            <li className="mdl-menu__item">Projekt 3</li>
                        </ul>
                    </div>
                </div>
                <div className="mdl-cell mdl-cell--2-col">
                    <div>
                        <button id="workon-label-selection"
                            className="mdl-button mdl-js-button mdl-button--icon">
                            <i className="material-icons">label</i>
                        </button>
                        <ul className="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
                            htmlFor="workon-label-selection">
                            <li className="mdl-menu__item">
                                Projekt 1
                            </li>
                            <li className="mdl-menu__item">Projekt 2</li>
                            <li className="mdl-menu__item">Projekt 3</li>
                        </ul>
                    </div>
                </div>
                <div className="mdl-cell mdl-cell--2-col">
                    <span>
                        00:00:00
                    </span>
                    {true ?
                        <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored"
                            onClick={() => console.log("clickd")}>
                            <i className="material-icons">stop</i>
                        </button>
                        :
                        <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored"
                        >
                            <i className="material-icons">play_arrow</i>
                        </button>
                    }
                </div>
            </div >
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, { items: state.items }, ownProps);
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return { dispatch };
}

TimeTrackInputComponent = connect(mapStateToProps, mapDispatchToProps)(TimeTrackInputComponent);

export { TimeTrackInputComponent };