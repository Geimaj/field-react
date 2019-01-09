import React, { Component } from "react";
import MediaQuery from 'react-responsive';

import Desktop from "./Desktop"
import Mobile from "./Mobile/Mobile"

import "../style/fades.css"

const $ = require('jquery')

export const fadeDuration = 500
export const fadeDelay = fadeDuration / 2



class Main extends Component {

    componentDidMount(){
        let body = document.getElementsByTagName('body')[0]

        $(window).resize(()=> {
            // body.style = body.style
            // $('body').hide().show(0)
        })
//         console.log('mount')
// $(window).resize(function() {
//     if(this.resizeTO) clearTimeout(this.resizeTO);
//     this.resizeTO = setTimeout(function() {
//         $(this).trigger('resizeEnd');
//     }, 5);
// });
// $(window).bind('resizeEnd', function() {
//     document.body.style.zoom = 1.0000001;
//     setTimeout(function(){document.body.style.zoom = 1;},5);
//     console.log('resize')
// });
    }

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
