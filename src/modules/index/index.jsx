import React, {PureComponent, PropTypes} from 'react';
import ReactDom from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeText, buttonClick, getData} from '../../actions/action';

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
    }

    componentWillMount() {
        const fetchJson = this.props.actions.getData();

        fetchJson.then(function (res) {
            this.setState({data: res.data});
        }.bind(this));
    }

    render() {
        const {actions, text} = this.props;
        return (
            <div>
                <App actions={actions} text={text}/>
                <Change actions={actions}/>
                <div>name: {this.state}!</div>
                <p>sex: {this.state}!</p>
            </div>
        );
    }
}

function mapStateToProperties(state) {
  return { text: state.app.text };
}

function mapDispatchToProps(dispatch){
    return {
        actions : bindActionCreators({changeText, buttonClick, getData}, dispatch)
    }
}

export default connect(mapStateToProperties, mapDispatchToProps)(Index);
