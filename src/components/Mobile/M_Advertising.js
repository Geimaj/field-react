import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

const advertisingData = require('../../data/portfolioData');

export default class M_Advertising extends Component {

    advertisingList(){
        let lis = advertisingData.map((item) => {
            return <li>{item.title}</li>
        })

        return <ul>{lis}</ul>
    }

    render() {

        return (
            <div>
                {this.advertisingList()}
            </div>
        );
    }
}

