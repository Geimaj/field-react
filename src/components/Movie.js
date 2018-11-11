import React, { Component } from "react";
import Animation from "./Animation";
import Icon from "./Icon";

const Vimeo = require("react-vimeo");

const creditAnimation = require('../assets/animation/Credits.json');
const AnimationMouseOn = [0, 12]
const AnimationMouseOff = [12, 72]


class Movie extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.creditsClicked = this.creditsClicked.bind(this)
        this.handlePointerEnter = this.handlePointerEnter.bind(this)
        this.handlePointerLeave = this.handlePointerLeave.bind(this)

        this.state = {
            showCredits: false,
            creditsClass: "",
            videoClass: "active"
        }

    }

    handleClick() {
        this.props.onClick(this.props.props)
    }

    creditsClicked() {
        console.log('credits clicked')
        this.setState({
            showCredits: true
        })
    }

    handlePointerEnter() {
        this.setState({
            creditsClass: "active",
            videoClass: ""
        })
    }

    handlePointerLeave() {
        this.setState({
            creditsClass: "",
            videoClass: "active"

        })
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
            <div id="movie" className="page">
                <Icon
                    className="exitMovie"
                    src={require('../assets/icon/Close.svg')}
                    alt="exit movie"
                    onClick={this.handleClick} />
                <div className="content">

                    {/* {content} */}

                    <div id="credits" className={this.state.creditsClass}>
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

                    <div id="video" className={this.state.videoClass}>
                        <Vimeo videoId={this.props.vimeoID} 
                            autoplay={true}/>
                    </div>

                </div>
                <div onPointerEnter={this.handlePointerEnter} onPointerLeave={this.handlePointerLeave}>
                    <Animation
                        className="creditAnimation"
                        onClick={this.creditsClicked}

                        mouseOnFrames={AnimationMouseOn}
                        mouseOffFrames={AnimationMouseOff}
                        animationData={creditAnimation} />
                </div>
            </div>
        );
    }

}

export default Movie;