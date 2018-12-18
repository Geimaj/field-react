import React, { Component } from "react";
import Animation from "./Animation";
import ExitIcon from "./ExitIcon";
import { Fade } from 'react-animation-components'
import { hideMenu, showMenu, fadeDelay, fadeDuration } from "./Main"



const Vimeo = require("react-vimeo");
const $ = require("jquery");

const creditAnimation = require('../assets/animation/Credits.json');
const AnimationMouseOn = [0, 12]
const AnimationMouseOff = [12, 72]
const viewBox = {
    y: 0,
    x: 25,
    h: 100,
    w: 100
}

class Movie extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.creditsClicked = this.creditsClicked.bind(this)
        this.handlePointerEnter = this.handlePointerEnter.bind(this)
        this.handlePointerLeave = this.handlePointerLeave.bind(this)

        // this.state = {
        //     showCredits: false,
        //     creditsClass: "",
        //     videoClass: "active"
        // }

    }

    componentWillMount() {
        $(".animation.menu").css('display', "none")
    }


    componentWillUnmount() {
        $(".animation.menu").css('display', "block")
    }



    handleClick() {
        this.props.onClick(this.props.props)
    }

    creditsClicked() {
        // this.setState({
        //     showCredits: true
        // })
    }

    handlePointerEnter() {
        // this.setState({
        //     creditsClass: "active",
        //     videoClass: ""
        // })

        $("#player").removeClass("active")
        $("#credits").addClass("active")


    }

    handlePointerLeave() {
        // this.setState({
        //     creditsClass: "",
        //     videoClass: "active"

        // })

        $("#player").addClass("active")
        $("#credits").removeClass("active")

    }

    render() {

        let credits = Object.keys(this.props.credits).map((key, index) => {
            let data = this.props.credits[key];
            if (typeof data === "string") {
                return <li key={index}>{key}: {data}</li>
            } else {
                let lis = data.map((item, index) => {
                    return (
                        <li key={key + index}>{key}: {data[index]}</li>
                    )
                })

                return lis;
            }

        })

        let tokens = this.props.by.split("*");
        let byLines = tokens.map((by) => {
            return (
                <span>{by}</span>
            );
        })

        return (
            <div id="movie" >

                <Fade in delay={fadeDelay} duration={fadeDuration}>

                    <ExitIcon onClick={this.handleClick} />

                </Fade>

                <div className="content">

                    <div id="video" >
                        <div id="credits">
                            <div id="by">
                                <h2>
                                    by {byLines}
                                </h2>
                            </div>
                            <p>
                                {this.props.extra}
                            </p>
                            <p>
                                {this.props.type}
                            </p>

                            <ul>
                                {credits}
                            </ul>

                        </div>

                        <div id="player" className="active">
                            <Vimeo videoId={this.props.vimeoID}
                                autoplay={true} />
                        </div>
                    </div>

                </div>
                    {/* <Fade in delay={fadeDelay * 2} duration={fadeDuration} className="credit-fade"> */}
                <div className="creditAnimation">

                        <Animation
                            className="creditAnimation"
                            onClick={this.creditsClicked}
                            viewBox={viewBox}
                            mouseOnFrames={AnimationMouseOn}
                            mouseOffFrames={AnimationMouseOff}
                            animationData={creditAnimation}
                            handleMouseOver={this.handlePointerEnter}
                            handleMouseLeave={this.handlePointerLeave}
                        />
                </div>
                    {/* </Fade> */}
            </div>
        );
    }

}

export default Movie;