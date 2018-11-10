import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Portfolio from "./Portfolio";
import Team from "./Team";
import Animation from "./Animation"
import Art from "./Art"
import Icon from "./Icon"


const advertisingAnimation = require('../assets/animation/Advertising.json');
const filmAndArtsAnimation = require('../assets/animation/Film&Arts.json');
const ourTeamAnimation = require('../assets/animation/OurTeam.json');
const emailAnimation = require('../assets/animation/Email.json');

const instagramIcon = require("../assets/icon/Instagram.svg")
const soundcloudIcon = require("../assets/icon/Soundcloud.svg")
const vimeoIcon = require("../assets/icon/Vimeo.svg")
const closeIcon = require("../assets/icon/Close.svg")

const AnimationMouseOn = [0, 12]
const AnimationMouseOff = [12, 72]

const portfolioData = require('../data/oldportfolioData.js')


class Main extends Component {

    constructor(props) {
        super(props)

        this.menuAnimationClick = this.menuAnimationClick.bind(this)
        this.burgerIconClick = this.burgerIconClick.bind(this)

        this.state = {
            showMenu: true
        }

    }

    menuAnimationClick() {
        this.setState({
            showMenu: false
        })
    }

    burgerIconClick() {
        this.setState({
            showMenu: true
        })
    }

    render() {

        let content;

        if (this.state.showMenu) {
            content =
                <div id="menu" className="page active">

                    <ul className="menu-list">
                        <li>
                            <NavLink to="/portfolio">
                                <Animation
                                    className="portfolioAnimation"
                                    mouseOnFrames={AnimationMouseOn}
                                    mouseOffFrames={AnimationMouseOff}
                                    animationData={advertisingAnimation}
                                    onClick={this.menuAnimationClick} />
                            </NavLink>
                        </li>
                        <li><NavLink to="/art">
                            <Animation
                                className="portfolioAnimation"
                                mouseOnFrames={AnimationMouseOn}
                                mouseOffFrames={AnimationMouseOff}
                                onClick={this.menuAnimationClick} 
                                animationData={filmAndArtsAnimation} />
                        </NavLink>
                        </li>
                        <li>
                            <NavLink to="/team">
                                <Animation
                                    className="portfolioAnimation"
                                    mouseOnFrames={AnimationMouseOn}
                                    mouseOffFrames={AnimationMouseOff}
                                    onClick={this.menuAnimationClick} 
                                    animationData={ourTeamAnimation} />
                            </NavLink>
                        </li>
                    </ul>

                    <div id="email">
                        <Animation
                            mouseOnFrames={AnimationMouseOn}
                            mouseOffFrames={AnimationMouseOff}
                            animationData={emailAnimation} />
                    </div>
                    <div id="icons">
                        <Icon href="#"
                            src={soundcloudIcon}
                            alt="Soundcloud" />
                        <Icon href="#"
                            src={vimeoIcon}
                            alt="Vimeo" />
                        <Icon href="#"
                            src={instagramIcon}
                            alt="Instagram" />
                    </div>


                </div>
        } else {
            content =
                <div id="content" className="page">
                    <Route path="/portfolio" component={() => (<Portfolio portfolioData={portfolioData} />)} />
                    <Route path="/art" component={Art} />
                    <Route path="/team" component={Team} />

                    <Icon
                        className="menu"
                        onClick={this.burgerIconClick}
                        src={require('../assets/icon/Close.svg')} />
                </div>

        }

        return (

            <HashRouter>
                <div id="router">
                    {content}
                </div>
            </HashRouter>
        );
    }
}


export default Main;