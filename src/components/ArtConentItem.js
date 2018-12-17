import React, { Component } from "react";
import Icon from "./Icon"
import { Fade } from 'react-animation-components'


export default class ArtContentIemt extends Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        if(this.props.onClick){
            this.props.onClick()
        }
    }

    componentWillMount(){
    }

    componentWillUnmount(){
    }

    render() {

        return (
            <div className="artContent">

            <div className="imageContainer">
              <div className="info">info</div>
            
            
              <img className="artImage"
                src={this.props.image} 
                alt={this.props.link}/>
      
            </div>
            
              <div className="details">
                <p className="description">
                  {this.props.description}
                </p>
                <p className="type">
                  {this.props.type}
                </p>
                <p className="by">
                  By: {this.props.by}
                </p>
      
                {this.props.animation}
      
              </div>
          </div>
        );
    }
}