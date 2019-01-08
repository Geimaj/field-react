import React, { Component } from "react";
import MediaQuery from 'react-responsive';

import Desktop from "./Desktop"
import Mobile from "./Mobile/Mobile"

import "../style/fades.css"

const $ = require('jquery')

export const fadeDuration = 500
export const fadeDelay = fadeDuration / 2



class Main extends Component {



    render() {


        return (
            <MediaQuery minWidth={700} className="mq">
            {(matches) => {
                console.log(matches)
                if (matches) {
                return <Desktop></Desktop>
                } else {
                return <Mobile></Mobile>
                }
            }}
            </MediaQuery>
        );
    }
}

export default Main;


export function hideMenu() {
    let $menu = $(".animation.menu")
    $($menu).css("opacity", 0)
}

export function showMenu(fd = fadeDelay) {
    //delay
    setTimeout(() => {
        let $menu = $(".animation.menu")
        $($menu).animate({ "opacity": 1 }, fadeDuration)
    }, fd)
}