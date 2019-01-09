import React, { Component } from "react";
import Icon from "./Icon"

export default class ExitIcon extends Component {
 
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        console.log('eieio')
    }

    handleClick(){
        if(this.props.onClick){
            this.props.onClick()
        }
    }

    render() {
        return (
            <Icon className={`exit ${this.props.className}`}
                src={require('../assets/icon/Close.svg')}
                alt="exit movie"
                onClick={this.handleClick}>
            </Icon>
        );
    }
}