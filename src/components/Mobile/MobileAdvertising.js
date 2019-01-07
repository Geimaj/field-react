import React, { Component } from "react";


const advertisingData = require('../../data/portfolioData');

export default class MobileAdvertising extends Component {

    advertisingList(){
        let lis = advertisingData.map((item, key) => {
            return <li key={key} className="lowercase"><h2>{item.title}</h2></li>
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

