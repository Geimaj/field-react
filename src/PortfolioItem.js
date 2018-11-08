import React, { Component } from "react";

class PortfolioItem extends Component {
  render() {
    return (
        <li className={this.props.className} >
            {this.props.title}
        </li>
    );
  }

}
 
export default PortfolioItem;