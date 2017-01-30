import React, {PureComponent, PropTypes} from 'react';
import ReactDom from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {changeText, buttonClick, getData} from '../../actions/action';
import Table from '../../components/table';

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

    componentDidMount() {
        const {dispatch, getData} = this.props;

        dispatch(getData());
    }

    componentDidMount() {
        const fetchJson = this.props.actions.getData();

        fetchJson.then(function (res) {
            this.setState(res.data);
        }.bind(this));
    }

    render() {
        const {actions, text, data} = this.props;

        return (
            <div>
                <App actions={actions} text={text}/>
                <Change actions={actions}/>
                <Table data={data} />
            </div>
        );
    }
}

function mapStateToProperties(state) {
  return { text: state.changeText.text, data: state.getData.data };
}

function mapDispatchToProps(dispatch){
    return {
        actions : bindActionCreators({changeText, buttonClick, getData}, dispatch)
    }
}

export default connect(mapStateToProperties, mapDispatchToProps)(Index);
