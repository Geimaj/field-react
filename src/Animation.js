import React, { Component } from "react";
// import Lottie from 'react-lottie';
const lottie = require('lottie-web')


export default class Animation extends Component {

    constructor(props) {
        super(props);
        this.state = { isStopped: false, isPaused: false };

        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
        this.animationComplete = this.animationComplete.bind(this)
        this.animationLoaded = this.animationLoaded.bind(this)
        this.loadAnimation = this.loadAnimation.bind(this)
    }

    componentDidMount(){

        this.options = {
            container: this.el,
            render: 'svg',
            loop: false,
            autoplay: false,
            animationData: this.props.animationData,
        }

        this.loadAnimation()
    }

    componentWillUpdate(nextProps){
        this.loadAnimation()
    }

    loadAnimation(){
        this.animation = lottie.loadAnimation(this.options)
        this.animation.addEventListener("DOMLoaded", this.animationLoaded)
        this.animation.onComplete = this.animationComplete
    }

    handleMouseOver() {

        if(this.props.mouseOnFrames){
            this.animation.playSegments(this.props.mouseOnFrames, true)
        } else {
            this.animation.stop()         
            this.animation.play()
        }

    }

    handleMouseLeave() {
        if(this.props.mouseOffFrames){
            this.animation.playSegments(this.props.mouseOffFrames, true)
        } else {
            this.animation.pause()
        }
    }

    animationComplete(){
        // this.animation.stop()
    }

    animationLoaded() {
    }


    render() {

        return (
            <div id={this.props.id } 
            className={`animation ${this.props.className}`}
            ref={(c) => this.el = c}
            onPointerLeave={this.props.handleMouseLeave || this.handleMouseLeave}
            onPointerEnter={this.props.handleMouseOver || this.handleMouseOver}>
                {/* <Lottie options={defaultOptions}
                    isStopped={this.state.isStopped}
                    isPaused={this.state.isPaused} /> */}
            </div>
        );
    }
}