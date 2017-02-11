// import React from 'react';

// const Table = ({data}) => {
// 	let table = '';

// 	if (data && data.length) {
// 		table = data.map(function (item, idx) {
// 			return <tr key={idx}>
// 				<td>{item.key}</td>
// 				<td>{item.value}</td>
// 				<td>{item.others}</td>
// 			</tr>
// 		});
// 	}


// 	return (
// 		<table>
// 			<thead>
// 				<tr>
// 					<th>第一个</th>
// 					<th>第二个</th>
// 					<th>第三个</th>
// 				</tr>
// 			</thead>
// 			<tbody>{table}</tbody>
// 		</table>
// 	);
// }

// export default Table;


import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {changeText, buttonClick, getData, changeOption} from '../actions/action';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    	// console.log('table');
    	console.log(this.props.value);
        const fetchJson = this.props.actions.getData({value: this.props.params});

        fetchJson.then(function (res) {
            this.setState(res.data);
        }.bind(this));
    }

    render() {
    	let table = '';
    	const {data} = this.props;

    	if (data && data.length) {
    		table = data.map(function (item, idx) {
    			return <tr key={idx}>
    				<td>{item.key}</td>
    				<td>{item.value}</td>
    				<td>{item.others}</td>
    			</tr>
    		});
    	}


    	return (
    		<table>
    			<thead>
    				<tr>
    					<th>第一个</th>
    					<th>第二个</th>
    					<th>第三个</th>
    				</tr>
    			</thead>
    			<tbody>{table}</tbody>
    		</table>
    	);
    }
}

function mapStateToProperties(state) {
    return {
        data: state.getData.data,
        value: state.changeOption.value
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions : bindActionCreators({getData, changeOption}, dispatch)
    }
}

export default connect(mapStateToProperties, mapDispatchToProps)(Index);
