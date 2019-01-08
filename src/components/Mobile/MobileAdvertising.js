import React, { Component } from "react";
import MobileMovie from "./MobileMovie"

const advertisingData = require('../../data/portfolioData');

export default class MobileAdvertising extends Component {

    constructor(props){
        super(props)

        this.state = {
            vimeoID: null
        }
    }

    playVideo(vimeo_id){
        this.setState({
            vimeoID: vimeo_id
        })
    }

    advertisingList(){
        let lis = advertisingData.map((item, key) => {
            return <li key={key} className="lowercase"><h2><button onClick={() => this.playVideo(item.vimeo_id)}>{item.title}</button></h2></li>
        })

        return <ul>{lis}</ul>
    }

    render() {

        // let lis = advertisingData.map((item, key) => {
        //     return <li key={key} className="lowercase" onClick={this.playVideo(item.vimeo_id)}><h2 ><a >{item.title}</a></h2></li>
        // })

        if(this.state.vimeoID){
            return (
                <MobileMovie vimeoID={this.state.vimeoID} />
            )
        } else {

            
            return (
                <div>
                    {this.advertisingList()}
                </div>
            );
        }
    }
}

