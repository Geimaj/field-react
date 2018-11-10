import React, { Component } from "react";
import Icon from "./Icon";

class PortfolioItem extends Component {
  render() {
    return (
      <div className={`page ${this.props.className}`}>
        <h1>Art</h1>
      </div>
    );
  }

}
 
export default PortfolioItem;