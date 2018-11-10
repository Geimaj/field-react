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

class Main extends Component {
    render() {
    return (
        
        <HashRouter>
            <div id="router">
            <div id="menu" className="page active">

            <ul className="menu-list">
                <li>
                    <NavLink to="/portfolio">
                        <Animation 
                            className="portfolioAnimation"
                            mouseOnFrames = {AnimationMouseOn}
                            mouseOffFrames = {AnimationMouseOff}
                            animationData={advertisingAnimation}/>
                    </NavLink>
                </li>
                <li><NavLink to="/art">
                        <Animation 
                        className="portfolioAnimation"
                        mouseOnFrames = {AnimationMouseOn}
                        mouseOffFrames = {AnimationMouseOff}
                        animationData={filmAndArtsAnimation}/>
                    </NavLink>
                </li>                
                <li>
                    <NavLink to="/team">
                        <Animation
                            className="portfolioAnimation"
                            mouseOnFrames = {AnimationMouseOn}
                            mouseOffFrames = {AnimationMouseOff}
                            animationData={ourTeamAnimation}/>
                    </NavLink>
                </li>
            </ul>
                
                <div id="email">
                    <Animation
                        mouseOnFrames = {AnimationMouseOn}
                        mouseOffFrames = {AnimationMouseOff}
                        animationData={emailAnimation}/>
                </div>
                <div id="icons">
                    <Icon href="#" 
                        src= {soundcloudIcon}
                        alt="Instagram"/>
                    <Icon href="#" 
                        src= {vimeoIcon}
                        alt="Instagram"/>
                    <Icon href="#" 
                        src= {instagramIcon}
                        alt="Instagram"/>
                </div>


            </div>

            

                <div id="content" className="page">
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/art" component={Art}/>                
                    <Route path="/team" component={Team}/>


                    <Icon 
                        className="menu"
                        src={require('../assets/icon/Close.svg')} />
                </div>

            </div>
        </HashRouter>
    );
  }
}
 
export default Main;