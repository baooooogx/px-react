import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {changeText, buttonClick, getData} from '../../actions/action';
import Table from '../../components/table';

import './index.less';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    changeOption(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <div>
                <select onChange={this.changeOption.bind(this)}>
                    <option value='0'>筛选项1</option>
                    <option value='1'>筛选项2</option>
                    <option value='2'>筛选项3</option>
                </select>
                <Table params={this.props.value} />
            </div>
        );
    }
}

function mapStateToProperties(state) {
    return { 
        value: state.changeText.value,
        data: state.getData.data 
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions : bindActionCreators({getData, changeText}, dispatch)
    }
}

export default connect(mapStateToProperties, mapDispatchToProps)(Index);
