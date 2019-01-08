import React, { Component } from "react";
import Icon from "../Icon"

export default class MobileArt extends Component {



    render() {

        return (
            <div className="mobile artItem">
                <h2>{this.props.title}</h2>
                <div className="bucket">
                    <div>
                        <Icon className='info' 
                            src={require("../../assets/icon/Info.svg")} 
                            href={this.props.href}
                            onClick={this.props.onClick}></Icon>
                    </div>
                    <img src={this.props.src} alt={this.props.title} />
                </div>
            </div>
        );
    }
}

