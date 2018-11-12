import React, { Component } from "react";
import Animation from "./Animation";
import Icon from "./Icon";

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

    componentWillMount(){
        $(".animation.menu").css('display', "none")
    }


    componentWillUnmount(){
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
        this.setState({
            creditsClass: "",
            videoClass: "active"

        })

        $("#player").addClass("active")
        $("#credits").removeClass("active")

    }

    render() {

        let credits = Object.keys(this.props.credits).map((key, index) => {
            let data = this.props.credits[key];
            if(typeof data === "string"){
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

        return (
            <div id="movie" >
                <Icon
                    className="exitMovie"
                    src={require('../assets/icon/Close.svg')}
                    alt="exit movie"
                    onClick={this.handleClick} />
                <div className="content">

                    <div id="video" >
                        <div id="credits">
                            <div id="by">
                                <h2>
                                    by {this.props.by}
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
                                autoplay={true}/>
                        </div>
                    </div>

                </div>
                <div className="creditAnimation" 
                        onPointerEnter={this.handlePointerEnter} 
                        onMouseEnter={this.handlePointerEnter} 
                        onMouseLeave={this.handlePointerLeave}
                        onPointerLeave={this.handlePointerLeave}>
                    <Animation
                        className="creditAnimation"
                        onClick={this.creditsClicked}
                        viewBox={viewBox}
                        mouseOnFrames={AnimationMouseOn}
                        mouseOffFrames={AnimationMouseOff}
                        animationData={creditAnimation} />
                </div>
            </div>
        );
    }

}

export default Movie;