import React, { Component } from "react";

export default class Icon extends Component {

    render() {

        return (
            <div className={`icon ${this.props.className}`}>
                <a href={this.props.href}>
                    <img
                        src={this.props.src} />
                </a>
            </div>
        );
    }
}