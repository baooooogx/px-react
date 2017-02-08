import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {changeText, buttonClick, getData} from '../../actions/action';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {value} = this.props;

        return (
            <div>
                <select onChange={this.changeText}>
                    <option value='0'>筛选项1</option>
                    <option value='1'>筛选项2</option>
                    <option value='2'>筛选项3</option>
                </select>
            </div>
        );
    }
}

function mapStateToProperties(state) {
    return { 
        value: state.changeText.value
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions : bindActionCreators({changeText}, dispatch)
    }
}

export default connect(mapStateToProperties, mapDispatchToProps)(Index);
