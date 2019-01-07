import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import { Fade } from 'react-animation-components'

import M_Advertising from "./M_Advertising";
import Team from "./../Team";
import Art from "./../Art"
import Icon from "./../Icon"

export default class Mobile extends Component {

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
                <div>

                    <ul>
                        <li>

                            <NavLink to="/portfolio" onClick={this.menuAnimationClick}>
                                <Fade in delay={0} duration={500}
                                    className="fade">
                                   <h2>advertising</h2>
                                </Fade>
                            </NavLink>

                        </li>
                        <li>
                            <Fade in delay={250} duration={500}>
                                <NavLink to="/art" onClick={this.menuAnimationClick}>
                                    <h2>film &amp; arts</h2>
                                </NavLink>
                            </Fade>

                        </li>
                        <li>
                            <Fade in delay={500} duration={500}>
                                <NavLink to="/team">
                                    <h2>our team</h2>
                                </NavLink>
                            </Fade>
                        </li>
                    </ul>

                </div>
        } else {
            console.log('conteeent')
            content =
                <div id="content" className="page">
                    <Route path="/art" component={Art} />
                    <Route path="/portfolio" component={() => (<M_Advertising/>)} />
                    <Route path="/team" component={Team} />
               
                    <Icon src='../../assets/icon/Close.svg' onClick={this.burgerIconClick}></Icon>
                    ikonic
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

