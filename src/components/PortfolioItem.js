import React, { Component } from "react";
import Animation from "./Animation";
import { Fade } from 'react-animation-components'


class PortfolioItem extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.onClick(this)
  }

  render() {
    return (
        <li className={this.props.className} 
          onClick={this.handleClick}>
          <Animation 
            viewBox={this.props.viewBox}
            waitUntillComplete={true}
            animationData={this.props.animationData}/>
        </li>
    );
  }

}
 
export default PortfolioItem;