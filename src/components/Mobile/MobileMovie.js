import React, { Component } from "react";
import ExitIcon from "./../ExitIcon";
import { Fade } from 'react-animation-components'
import { fadeDelay, fadeDuration } from "./../Main"

const Vimeo = require("react-vimeo");
const $ = require("jquery");


class MobileMovie extends Component {

    componentDidMount(){
        $("body").addClass("nopad")


        let vimeo = document.getElementsByTagName('iframe')[0]
        if(vimeo.requestFullScreen){
            vimeo.requestFullscreen()
        }
    }

    componentWillUnmount(){
        $("body").removeClass("nopad")        
    }

    onLoaded(data){
        let target = window.outerWidth
        let current = $("iframe").width()
        console.log("shooting for: " + target)
        console.log("was: " + current)
        $("iframe").width(target)
        current = $("iframe").width()
        console.log("now: " + current)        
    }

    render() {

        return (
            <div id="movie" className="active">

                <div className="content">

                    <div id="video" >

                        <div id="player" className="active">
                            <Vimeo videoId={this.props.vimeoID}
                                autoplay={true} 
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