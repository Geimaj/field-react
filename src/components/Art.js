import React, { Component } from "react";
import Icon from "./Icon";

class PortfolioItem extends Component {
  render() {
    return (
      <div className={`page ${this.props.className}`}>
        <h1>Art</h1>
         <Icon 
          className="menu"
          src={require('../assets/icon/Close.svg')} />
      </div>
    );
  }

}
 
export default PortfolioItem;