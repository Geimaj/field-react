import React from "react";
import Transition from "react-transition-group/Transition";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 


export default class FadeTransition extends React.Component {

    // constructor(props){
    //     super(props)
    //     this.defaultStyle = {
    //         transitionProperty: "opacity",
    //         transition: `${this.props.duration} ms ease-in-out`,
    //     }
    //     this.transitionStyle = {
    //         entering: {
    //             opacity: "0",
    //         },
    //         entered: {
    //             opacity: "1",
    //             transitionDelay: "700ms"
    //         }, 
    //         exiting: {

    //         },
    //         exited: {

    //         }
    //     }
    // }

    render(){
        return (
        <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={this.props.duration}
            transitionEnterTimeout={this.props.duration}
            transitionLeaveTimeout={300}>
                {this.props.children}
        </ReactCSSTransitionGroup>
        );
    }
}