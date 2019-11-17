import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'lodash';
class Shangpin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { qingdan: [] };
    }
    async componentDidMount() {
        const res = await axios.get('https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories');
        this.setState({
            qingdan: res.data.items
        });


    }
    render() {
        const list = this.state.qingdan.map((item, key) =><li key={item.id}>{item.name}</li>);
        return<ul>
        {list}</ul>;

    }
}
class App extends React.Component {
    render() {
        return <Shangpin />;
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('container')
);
