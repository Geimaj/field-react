import React, { Component } from "react";

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

        let detailsOn = ""
        if(this.props.showDetails){
            detailsOn = "showDetails";
        }

        return (
            <div className={`artContent ${detailsOn}`}>

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