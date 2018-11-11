import React, { Component } from "react";

export default class Icon extends Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        if(this.props.onClick){
            this.props.onClick()
        }
    }

    render() {

        return (
            <div className={`icon ${this.props.className}`}>
                    <img
                        src={this.props.src} 
                        alt={this.props.alt}
                        onClick={this.handleClick}/>
            </div>
        );
    }
}