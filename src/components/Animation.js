import React, { Component } from "react";
const lottie = require('lottie-web')
const $ = require('jquery')

export default class Animation extends Component {

    constructor(props) {
        super(props);
        this.state = { isStopped: false, isPaused: false };

        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
        this.animationComplete = this.animationComplete.bind(this)
        this.animationLoaded = this.animationLoaded.bind(this)
        this.loadAnimation = this.loadAnimation.bind(this)
        this.handleClick = this.handleClick.bind(this)

        this.canPlay = true;
        this.didPlay = false;
        
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

    componentWillUnmount(){
        this.destroyAnimation()
    }

    loadAnimation(){
        this.animation = lottie.loadAnimation(this.options)
        this.animation.addEventListener("DOMLoaded", this.animationLoaded)
        this.animation.onComplete = this.animationComplete
    }

    destroyAnimation(){
        this.animation.destroy()
    }

    handleMouseOver() {
        if(this.canPlay){
            this.didPlay = true
            this.canPlay = false;
            if(this.props.mouseOnFrames){
                this.animation.playSegments(this.props.mouseOnFrames, true)
            } else {
                this.animation.stop()         
                this.animation.play()
            }
        }

        if(this.props.handleMouseOver){
            this.props.handleMouseOver()
        }
    }

    handleMouseLeave() {
        if(this.props.mouseOffFrames && this.didPlay){
            this.animation.playSegments(this.props.mouseOffFrames, true)
            this.canPlay = false;
            this.didPlay = false;
        }

        if(this.props.handleMouseLeave){
            this.props.handleMouseLeave()
        }
    }

    animationComplete(){
        this.canPlay = true;
    }

    animationLoaded() {
        let $svg = $(this.el).find("svg")
        let viewBox = this.props.viewBox;

        $svg.attr("preserveAspectRatio", "xMinYMin meet");
        if(viewBox != null){

            $svg.attr(
                "viewBox",
                `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`
            );
        }

    }

    handleClick(){
        if(this.props.onClick){
            this.props.onClick(this.props)
        }
    }

    render() {
        return (
            <div id={this.props.id } 
            className={`animation ${this.props.className}`}
            ref={(c) => this.el = c}
            onPointerLeave={this.handleMouseLeave}
            onMouseLeave={this.handleMouseLeave}
            onMouseEnter={this.handleMouseOver}
            onPointerEnter={this.handleMouseOver}
            onClick={this.handleClick}>
            </div>
        );
    }
}