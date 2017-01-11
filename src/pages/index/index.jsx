import React, {PureComponent} from 'react';
import ReactDom from 'react-dom';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>hello bao!</div>
        );
    }
}

ReactDom.render(
    <Index />,
    document.getElementById('px-main')
);
