import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                {this.props.title || "Untitled"}
            </div>
        )
    }
};