import React, {PureComponent} from 'react';
import ReactDom from 'react-dom';
import './index.less';

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
        return (
            <div>
                <div>name: {this.state.name}!</div>
                <p>sex: {this.state.sex}!</p>
            </div>
        );
    }
}

ReactDom.render(
    <Index />,
    document.getElementById('px-main')
);
