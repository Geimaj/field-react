import React, { Component } from "react";
import Icon from "./Icon";

const artData = require("../data/civviesData")

class PortfolioItem extends Component {

  constructor(props){
    super(props)

    this.state = {
      active: 0
    }

  }

  render() {

    let art = artData.map((item, key) => {
      return (
        <li key={key}>
          {item.title}
        </li>
      )
    })

    let path = artData[this.state.active].image;
    // let image = require(path)
    // console.log(image)


    return (
      <div className={`page art`}>
        {/* <img  src={path}/> */}
        <ul className="artList">
          {art}
        </ul>
      </div>
    );
  }

}
 
export default PortfolioItem;