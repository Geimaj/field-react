import React, { Component } from "react";
import ExitIcon from "./../ExitIcon";
import { Fade } from 'react-animation-components'
import { fadeDelay, fadeDuration } from "./../Main"

const Vimeo = require("react-vimeo");
const $ = require("jquery");


class MobileMovie extends Component {

    componentDidMount(){
        // $("#player iframe").attr("width", "3000px")

        $("body").addClass("nopad")

    }

    componentWillUnmount(){
        $("body").removeClass("nopad")        
    }

    onLoaded(data){
        // window.outerWidth
        let target = window.outerWidth//$("body").outerWidth()
        let current = $("iframe").width()
        console.log("shooting for: " + target)
        console.log("was: " + current)
        $("iframe").width(target)
        current = $("iframe").width()
        console.log("now: " + current)        
    }

    render() {

        let playerOptions = {
            width: 480,
            height: 360
        }
       
        return (
            <div id="movie" className="active">

                <div className="content">

                    <div id="video" >

                        <div id="player" className="active">
                            <Vimeo videoId={this.props.vimeoID}
                                autoplay={true} 
                                playerOptions={playerOptions}
                                onLoaded={ this.onLoaded}
                                />
                        </div>
                    </div>

                </div>
               
                    <Fade in delay={fadeDelay} duration={fadeDuration}>
                        <ExitIcon onClick={this.props.onClick} className="active" />
                    </Fade>
                </div>
        );
    }

}

export default MobileMovie;