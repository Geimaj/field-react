import React, { Component } from "react";
import Animation from "./../Animation";
import ExitIcon from "./../ExitIcon";
import { Fade } from 'react-animation-components'
import { fadeDelay, fadeDuration } from "./../Main"

const Vimeo = require("react-vimeo");


class MobileMovie extends Component {

    constructor(props) {
        super(props);
    }

    render() {
       
        return (
            <div id="movie" >

                <div className="content">

                    <div id="video" >

                        <div id="player" className="active">
                            <Vimeo videoId={this.props.vimeoID}
                                autoplay={true} />
                        </div>
                    </div>

                </div>
               
                    <Fade in delay={fadeDelay} duration={fadeDuration}>
                        <ExitIcon onClick={this.handleClick} className="active" />
                    </Fade>
                </div>
        );
    }

}

export default MobileMovie;