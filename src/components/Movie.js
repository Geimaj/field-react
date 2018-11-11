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
        
        
        this.state = {
            showCredits: false
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

    render() {

        let content;

        if (this.state.showCredits) {
            // let credits = this.props.credits.map((item) => {
            //     return (

            //         <li>
            //         item.key : item
            //     </li>
            //     )
            // })

            content =
                <div id="credits">
                    <div id="by">
                        by
                </div>

                    <ul>
                        {/* {credits} */}

                    </ul>

                </div>
        } else {
            content = 
                <div id="video">
                    <Vimeo videoId={this.props.vimeoID}/>
                    {this.props.title}
                </div>
        }

        return (
            <div id="movie" className="page">
                <Icon
                    className="exitMovie"
                    src={require('../assets/icon/Close.svg')}
                    alt="exit movie"
                    onClick={this.handleClick} />
                <div className="content">

                {content}
                </div>
                <Animation
                    className="creditAnimation"
                    onClick={this.creditsClicked}
                    mouseOnFrames={AnimationMouseOn}
                    mouseOffFrames={AnimationMouseOff}
                    animationData={creditAnimation} />
            </div>
        );
    }

}

export default Movie;