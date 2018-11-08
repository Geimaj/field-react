import React, { Component } from "react";
import Lottie from 'react-lottie';

export default class Animation extends Component {

    constructor(props) {
        super(props);
        this.state = { isStopped: false, isPaused: false };

        this.handleMouseOver = this.handleMouseOver.bind(this)
    }

    handleMouseOver() {
        this.setState({isPaused: false})
    }

    render() {

        const defaultOptions = {
            loop: false,
            autoplay: false,
            animationData: this.props.animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <div id={this.props.id } onMouseOver={this.props.handleMouseOver || this.handleMouseOver}>
                <Lottie options={defaultOptions}
                    isStopped={this.state.isStopped}
                    isPaused={this.state.isPaused} />
            </div>
        );
    }
}