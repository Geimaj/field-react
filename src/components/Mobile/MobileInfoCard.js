import React, { Component } from "react";
import Icon from "../Icon"

export default class MobileInfoCard extends Component {

    constructor(props) {
        super(props)

        this.showInfo = this.showInfo.bind(this)
        this.hideInfo = this.hideInfo.bind(this)

        this.state = {
            showInfo: false
        }
    }

    showInfo() {
        this.setState({
            showInfo: true
        })
    }

    hideInfo(){
        this.setState({
            showInfo: false
        })
    }

    render() {

           let face = 
            <div className="face">
                <p>{this.props.info}</p>
                    <Icon className='exit'
                        src={require("../../assets/icon/Close.svg")}
                        onClick={this.hideInfo}></Icon>
            </div>

            let info = 
            <div className="info">
                <div className="infoBucket">
                    <Icon className='info'
                        src={require("../../assets/icon/Info.svg")}
                        href={this.props.href}
                        onClick={this.showInfo}></Icon>
                </div>
                <img src={this.props.src} alt={this.props.title} />
            </div>

        return (
            <div className="mobile artItem">
                <h2>{this.props.title}</h2>
                <div className="bucket">
                    <div className="content">
                        {face}
                        {info}
                    </div>
                </div>
            </div>
        );
    }
}

