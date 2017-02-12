import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {changeText, buttonClick, getData} from '../../actions/action';
import Table from '../../components/table';

import myChart from '../../components/echarts';

import './index.less';

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.changeOption = this.changeOption.bind(this);

        this.state = {value: 0};
    }

    changeOption(e) {
        this.setState({value: e.target.value});
    }

    fetchJson(value) {
        const fetchJson = this.props.actions.getData({params: value});

        fetchJson.then((res) => {
            this.setState(res.data);
        });
    }

    componentWillMount() {
        this.fetchJson();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.value !== this.state.value) {
            this.fetchJson(this.state.value);
        }

        myChart();
    }

    render() {
        const {data} = this.props;

        return (
            <div>
                <select onChange={this.changeOption} value={this.state.value}>
                    <option value='0'>筛选项1</option>
                    <option value='1'>筛选项2</option>
                    <option value='2'>筛选项3</option>
                </select>
                <Table data={data} />
                <div id="echarts">{this.state.value}</div>
            </div>
        );
    }
}

function mapStateToProperties(state) {
    return {
        data: state.getData.data
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions : bindActionCreators({getData, changeText}, dispatch)
    }
}

export default connect(mapStateToProperties, mapDispatchToProps)(Index);
