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
const advertisingAnimationPath = './assets/animation/Advertising.json';
const advertisingAnimation = require(`${advertisingAnimationPath}`);
const filmAndArtsAnimation = require('./assets/animation/Film&Arts.json');
const ourTeamAnimation = require('./assets/animation/OurTeam.json');

const advertisingAnimationMouseOn = [0, 12]
const advertisingAnimationMouseOff = [12, 72]


class Main extends Component {
  render() {
    return (
        
        <HashRouter>
            <div>
            <ul className="header">
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

            <div className="content">
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