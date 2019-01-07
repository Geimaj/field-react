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
            // <div>

            //     <MediaQuery minDeviceWidth={1224}>
            //         <Desktop ></Desktop>
            //     </MediaQuery>
            //     <MediaQuery maxWidth={1224}>
            //         <div>You are sized like a tablet or mobile phone though</div>
            //     </MediaQuery>
            // </div>

            // <MediaQuery minWidth={1224}>
            //     <Desktop></Desktop>
            // </MediaQuery>
            // <MediaQuery maxWidth={1224}>
            //     <Mobile></Mobile>
            // </MediaQuery>

            <MediaQuery minDeviceWidth={700} className="mq">
            {(matches) => {
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