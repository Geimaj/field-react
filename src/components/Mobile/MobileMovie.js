import React, { Component } from "react";
import ExitIcon from "./../ExitIcon";
import { Fade } from 'react-animation-components'
import { fadeDelay, fadeDuration } from "./../Main"

const Vimeo = require("react-vimeo");


class MobileMovie extends Component {

    render() {
       
        return (
            <div id="movie" className="active">

                <div className="content">

                    <div id="video" >

                        <div id="player" className="active">
                            <Vimeo videoId={this.props.vimeoID}
                                autoplay={true} 
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