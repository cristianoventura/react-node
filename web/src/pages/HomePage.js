import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/HeaderComponent';
import DataList from '../components/DataListComponent';

class HomePage extends Component {
    state = { data: {} };

   componentWillMount = () => {
        axios.get('http://localhost:4000/get').then(res => this.setState({ data: res.data.teams }) );
    };

    render() {
        return (
            <div>
                <Header title="MERN" />
                <DataList data={this.state.data} />
            </div>
        );
    }
};

export default HomePage;