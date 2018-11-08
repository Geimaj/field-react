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
const advertisingAnimation = require('./assets/animation/Advertising.json');
const filmAndArtsAnimation = require('./assets/animation/Film&Arts.json');
const ourTeamAnimation = require('./assets/animation/OurTeam.json');

class Main extends Component {
  render() {
    return (
        
        <HashRouter>
            <div>
            <ul className="header">
                <li><NavLink to="/portfolio"><Animation animationData={advertisingAnimation} id="portfolioAnimation"/></NavLink></li>
                <li><NavLink to="/art"><Animation animationData={filmAndArtsAnimation}/></NavLink></li>                
                <li><NavLink to="/team"><Animation animationData={ourTeamAnimation}/></NavLink></li>
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