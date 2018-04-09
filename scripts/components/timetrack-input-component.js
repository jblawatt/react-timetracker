import { Component } from "react";
import { connect } from "react-redux";
import { addTrackingItem } from "../data/actions"


function getInitialState() {
    return {
        id: '',
        value: '',
        startTime: null,
        stopTime: null,
        tags: [],
    };
}

class TimeTrackInputComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { id: 'test', value: '', startTime: new Date(), stopTime: null, tags: [] };
        this.addItem = props.addItem.bind(this);
        window.l = (window.l || []);
        window.l.push(this);
        this.inputItem = React.createRef();
        this.inputItemWrapper = React.createRef();
    }

    toState(attrName, stateAttrName, context) {

        var _this = this;

        function callback(value) {
            let toSet = {}
            toSet[stateAttrName] = value;
            _this.setState((state, props) => {
                return Object.assign({}, state, toSet);
            });
        }

        return function (e) {
            callback.call(context || this, attrName in e.currentTarget ? e.currentTarget[attrName] : e.currentTarget.getAttribute(attrName))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("state changed");
    }

    render() {
        return (
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--6-col">
                    <form>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
                            ref={this.inputItemWrapper}>
                            <input className="mdl-textfield__input"
                                type="text"
                                ref={this.inputItem}
                                id="workin-on-input"
                                value={this.state.value}
                                onChange={this.toState("value", "value")}
                            />
                            <label className="mdl-textfield__label" htmlFor="workin-on-image">What are you working on?</label>
                        </div>

                    </form>
                </div>
                <div className="mdl-cell mdl-cell--2-col">
                    <div>
                        {this.state.tags.map(tag => {
                            return (<span className="mdl-chip mdl-chip--deletable">
                                <span className="mdl-chip__text">{tag}</span>
                                <button type="button" className="mdl-chip__action"
                                    onClick={this.removeTagState(tag)}>
                                    <i className="material-icons">cancel</i>
                                </button>
                            </span>);
                        })}

                        <button id="workon-project-selection"
                            className="mdl-button mdl-js-button mdl-button--icon">
                            <i className="material-icons">more_vert</i>
                        </button>
                        <ul className="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
                            htmlFor="workon-project-selection">
                            <li className="mdl-menu__item" onClick={this.addTagState("Project1")}>
                                Projekt 1
                            </li>
                            <li className="mdl-menu__item" onClick={this.addTagState("Project2")}>Projekt 2</li>
                            <li className="mdl-menu__item" onClick={this.addTagState("Project3")}>Projekt 3</li>
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
                    {this.state.isRunning ?
                        <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored"
                            onClick={this.onStop.bind(this)}>
                            <i className="material-icons">stop</i>
                        </button>
                        :
                        <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored"
                            onClick={this.onStart.bind(this)}
                        >
                            <i className="material-icons">play_arrow</i>
                        </button>
                    }
                </div>
            </div >
        );
    }

    onStop(e) {
        console.log("stopping");
        this.addItem(this.state);
        clearInterval(this.state._intervalId);
        // this.inputItemWrapper.classList.remove('is-dirty');
        this.setState((state, props) => {
            console.log("state", state);
            console.log("props", props);
            return Object.assign({}, state, getInitialState(), { isRunning: false });
        });
    }

    onStart(e) {
        console.log("starting");
        let intervalId = setInterval(() => {
            this.setState(state => {
                return Object.assign(state, { stopTime: new Date() });
            })
        }, 100);

        this.setState((state, props) => {
            return Object.assign({}, state, getInitialState(), {
                startTime: new Date(),
                stopTime: new Date(),
                _intervalId: intervalId,
                isRunning: true,
            })
        });
    }

    addTagState(value) {
        var _this = this;
        return function () {
            _this.setState((state, props) => {
                return Object.assign({}, state, {
                    tags: state.tags.indexOf(value) > -1 ? state.tags : state.tags.concat(value)
                });
            });
        };
    }

    removeTagState(value) {
        var _this = this;
        return function () {
            _this.setState((state, props) => {
                return Object.assign({}, state, {
                    tags: state.tags.filter(t => t != value)
                });
            });
        };
    }
}


const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, { items: state.items }, ownProps);
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addItem: (i) => dispatch(addTrackingItem(i)),
    };
}

TimeTrackInputComponent = connect(mapStateToProps, mapDispatchToProps)(TimeTrackInputComponent);

export { TimeTrackInputComponent };