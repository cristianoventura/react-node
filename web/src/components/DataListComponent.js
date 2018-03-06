import React, { Component } from 'react';

export default class DataListComponent extends Component {
    renderList = (data) => {
        if (data.length > 0) {
            return data.map((item) => {
                return (
                    <li key={data.indexOf(item)} className="list-item">
                        {item.title}
                        <span className="list-league">{item.league}</span>
                    </li>
                );
            });
        }
    };

    render() {
        return (
            <ul className="list">
                {this.renderList(this.props.data)}
            </ul>
        );
    }
};