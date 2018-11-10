import React, { Component } from "react";
import Animation from "./Animation";

class PortfolioItem extends Component {
  render() {
    return (
        <li className={this.props.className} >
          <Animation 
            animationData={this.props.animationData}/>
        </li>
    );
  }

}
 
export default PortfolioItem;