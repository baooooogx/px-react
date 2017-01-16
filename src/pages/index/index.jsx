import React, {PureComponent} from 'react';
import ReactDom from 'react-dom';
import {createStore, bindActionCreators} from 'redux';
import {Provider, connect} from 'react-redux';
import {changeText, buttonClick} from '../../app/actions/action';

import './index.less';

class Change extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.actions.buttonClick();
    }

    render() {
        return (
            <button onClick={this.handleClick}>change</button>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.actions.changeText();
    }

    render() {
        return (
            <h1 onClick={this.handleClick}> {this.props.text} </h1>
        );
    }
}

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    componentWillMount() {
        fetch('/data/index').then((res) => {
            return res.json();
        }).then((data) => {
            this.setState(data);
        });
    }

    render() {
        const {actions, text} = this.props;
        return (
            <div>
                <App actions={actions} text={text}/>
                <Change actions={actions}/>
                <div>name: {this.state.name}!</div>
                <p>sex: {this.state.sex}!</p>
            </div>
        );
    }
}

function mapStateToProperties(state) {
  return { text: state.text };
}

function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators({changeText: changeText, buttonClick: buttonClick}, dispatch)
    }
}

export default connect(mapStateToProperties, mapDispatchToProps)(Index);
