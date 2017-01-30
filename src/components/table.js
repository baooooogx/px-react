import React from 'react';

const Table = ({data}) => {
	if (data && data.name) {
	    return <div>
	        <div>name: {data.name}!</div>
	        <p>sex: {data.sex}!</p>
	    </div>
	}

	return <div></div>;
}

export default Table;

