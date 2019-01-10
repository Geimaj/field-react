import React, { Component } from "react";
import Icon from "../Icon"
import ExitIcon from "../ExitIcon"

export default class MobileInfoCard extends Component {

    constructor(props) {
        super(props)

        this.showInfo = this.showInfo.bind(this)
        this.hideInfo = this.hideInfo.bind(this)

        this.state = {
            showInfo: false,
            face: "active",
            info: ""
        }
    }

    showInfo() {

        this.setState({
            showInfo: true,
            face: "",
            info: "active"
        })
    }

    hideInfo() {
        this.setState({
            showInfo: false,
            face: "active",
            info: ""
        })
    }

    render() {

        let icon;
        if (this.state.showInfo) {
            icon =<ExitIcon className="exit" onClick={this.hideInfo}/>
        } else {
            icon = <Icon className='info active'
                src={require("../../assets/icon/Info.svg")}
                href={this.props.href}
                onClick={this.showInfo}></Icon>
        }

        return (
            <div className="mobile artItem">

                <h2>{this.props.title}</h2>
                <div className="bucket">

                <div className={`face ${this.state.face}`}>
                    <img src={this.props.src} alt={this.props.title} />
                </div>
                <div className={`info ${this.state.info}`}>
                    <p>{this.props.info}</p>

                </div>
                </div>

                <div className="showHideIcon">
                    {icon}
                </div>

            </div>
        );
    }
}