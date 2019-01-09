import React, { Component } from "react";
import MobileInfoCard from "../Mobile/MobileInfoCard"

export default class MobileArt extends Component {



    render() {

        return (
            <MobileInfoCard title={this.props.title}
                src={this.props.src} info={this.props.info}/>
        );
    }
}

