import React, { Component } from "react";

export default class Icon extends Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        console.log(this.props)
        if(this.props.onClick){
            this.props.onClick()
        } else if(this.props.href){
            window.open(this.props.href, "_blank")
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