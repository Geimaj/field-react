import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import { Fade } from 'react-animation-components'

import Portfolio from "./Portfolio";
import Team from "./Team";
import Animation from "./Animation"
import Art from "./Art"
import Icon from "./Icon"

import "../style/fades.css"

const $ = require('jquery')
    
const advertisingAnimation = require('../assets/animation/Advertising.json');
const filmAndArtsAnimation = require('../assets/animation/Film&Arts.json');
const ourTeamAnimation = require('../assets/animation/OurTeam.json');
const emailAnimation = require('../assets/animation/Email.json');

const instagramIcon = require("../assets/icon/Instagram.svg")
const soundcloudIcon = require("../assets/icon/Soundcloud.svg")
const vimeoIcon = require("../assets/icon/Vimeo.svg")

const AnimationMouseOn = [0, 12]
const AnimationMouseOff = [12, 72]

const portfolioData = require('../data/portfolioData.js')

export const fadeDuration = 500
export const fadeDelay = fadeDuration/2

const viewBox = {
    x: 0,
    y: 20,
    w: 350,
    h: 150
}

const emailViewBox = {
    x: 0,
    y: -50,
    w: 350,
    h: 200
}

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
                                <Fade in delay={0} duration={500}
                                    className="fade">
                                    <Animation
                                        className="portfolioAnimation"
                                        mouseOnFrames={AnimationMouseOn}
                                        mouseOffFrames={AnimationMouseOff}
                                        animationData={advertisingAnimation}
                                        viewBox={viewBox}
                                        onClick={this.menuAnimationClick} />
                                </Fade>
                            </NavLink>

                        </li>
                        <li>
                            <Fade in delay={250} duration={500}>
                                <NavLink to="/art">
                                    <Animation
                                        className="portfolioAnimation"
                                        mouseOnFrames={AnimationMouseOn}
                                        mouseOffFrames={AnimationMouseOff}
                                        onClick={this.menuAnimationClick}
                                        viewBox={viewBox}
                                        animationData={filmAndArtsAnimation} />
                                </NavLink>
                            </Fade>

                        </li>
                        <li>
                            <Fade in delay={500} duration={500}>
                                <NavLink to="/team">
                                    <Animation
                                        className="portfolioAnimation"
                                        mouseOnFrames={AnimationMouseOn}
                                        mouseOffFrames={AnimationMouseOff}
                                        onClick={this.menuAnimationClick}
                                        viewBox={viewBox}
                                        animationData={ourTeamAnimation} />
                                </NavLink>
                            </Fade>
                        </li>
                    </ul>

                    <Fade in delay={750} duration={500}>

                        <div id="email">
                            <Animation
                                onClick={emailClicked}
                                mouseOnFrames={AnimationMouseOn}
                                mouseOffFrames={AnimationMouseOff}
                                viewBox={emailViewBox}
                                animationData={emailAnimation} />
                        </div>
                    </Fade>

                    <div id="icons">

                        <Fade className={'fade'} in delay={750} duration={500}>
                            <Icon href="https://soundcloud.com/fieldcpt"
                                src={soundcloudIcon}
                                alt="Soundcloud"
                                className="soundcloud" />


                            <Icon href="https://vimeo.com/user89211135"
                                className="vimeo"
                                src={vimeoIcon}
                                alt="Vimeo" />


                            <Icon href="https://www.instagram.com/field.cpt/"
                                src={instagramIcon}
                                alt="Instagram" />
                        </Fade>
                    </div>


                </div>
        } else {
            content =
                <div id="content" className="page">
                    <Fade in delay={0} duration={fadeDuration}>
                    
                    <Route path="/art" component={Art} />
                    </Fade>
                    <Route path="/portfolio" component={() => (<Portfolio portfolioData={portfolioData} />)} />
                    <Route path="/team" component={Team} />

                    <Animation
                        className="menu"
                        mouseOnFrames={AnimationMouseOn}
                        mouseOffFrames={[12, 60]}
                        onClick={this.burgerIconClick}
                        animationData={require('../assets/animation/Hamburger.json')} />
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

function emailClicked() {
    window.open("mailto:info@field.audio", "_blank");
}

export function hideMenu(){
    let $menu = $(".animation.menu")
    $($menu).css("opacity", 0)
}

export function showMenu(fd=fadeDelay){
    //delay
    setTimeout(()=> {
        let $menu = $(".animation.menu")
        $($menu).animate({"opacity": 1}, fadeDuration)
    },fd)
}