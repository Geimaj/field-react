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



const advertisingAnimationMouseOn = [0, 12]
const advertisingAnimationMouseOff = [12, 72]



class Main extends Component {
    render() {
    return (
        
        <HashRouter>
            <div id="router">
            <div id="menu" className="page">

            <ul className="menu-list">
                <li>
                    <NavLink to="/portfolio">
                        <Animation 
                            className="portfolioAnimation"
                            mouseOnFrames = {advertisingAnimationMouseOn}
                            mouseOffFrames = {advertisingAnimationMouseOff}
                            animationData={advertisingAnimation}/>
                    </NavLink>
                </li>
                <li><NavLink to="/art">
                        <Animation 
                        className="portfolioAnimation"
                        mouseOnFrames = {advertisingAnimationMouseOn}
                        mouseOffFrames = {advertisingAnimationMouseOff}
                        animationData={filmAndArtsAnimation}/>
                    </NavLink>
                </li>                
                <li>
                    <NavLink to="/team">
                        <Animation
                            className="portfolioAnimation"
                            mouseOnFrames = {advertisingAnimationMouseOn}
                            mouseOffFrames = {advertisingAnimationMouseOff}
                            animationData={ourTeamAnimation}/>
                    </NavLink>
                </li>
            </ul>
                
                <div id="email">
                    <Animation
                        mouseOnFrames = {advertisingAnimationMouseOn}
                        mouseOffFrames = {advertisingAnimationMouseOff}
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

            

            <div id="content">
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/art" component={Art}/>                
                <Route path="/team" component={Team}/>
            </div>

            </div>
        </HashRouter>
    );
  }
}
 
export default Main;