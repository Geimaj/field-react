import React, { Component } from "react";
import MobileMovie from "./MobileMovie"
import { Fade } from 'react-animation-components'
import {showMenu, hideMenu} from "./Mobile"
import { fadeDuration } from "../Main";

const advertisingData = require('../../data/portfolioData');
const $ = require('jquery');

export default class MobileAdvertising extends Component {

    constructor(props){
        super(props)

        this.exitMovieClick = this.exitMovieClick.bind(this)

        this.state = {
            vimeoID: null
        }
    }

    playVideo(vimeo_id){

        hideMenu()

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

    exitMovieClick(){

        $("#movie").removeClass("active");

        setTimeout(()=> {
            this.setState({
                vimeoID: null
            })
            showMenu();
        }, fadeDuration)
    }

    render() {

        // let lis = advertisingData.map((item, key) => {
        //     return <li key={key} className="lowercase" onClick={this.playVideo(item.vimeo_id)}><h2 ><a >{item.title}</a></h2></li>
        // })

        if(this.state.vimeoID){
            return (
                <MobileMovie vimeoID={this.state.vimeoID}
                    onClick={this.exitMovieClick} />
            )
        } else {

            
            return (
                <div>
                    <Fade in>
                    {this.advertisingList()}
                    </Fade>
                </div>
            );
        }
    }
}

