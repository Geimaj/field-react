import React, { Component } from "react";
import PortfolioItem from "./PortfolioItem"
import Icon from "./Icon" 
// import {portfolioData} from "../data/portfolioData" 
const portfolioData = require('../data/portfolioData')

function PortfolioItemList(props){
  const data = props.portfolioData
  // const portfolioItems = data.map((item, index) => {

  //   return <PortfolioItem 
  //           key={index} 
  //           title={item.title}
  //           className={item.className}
  //           credits={item.credits}
  //           animationData={item.animationData}/>
  // })

  return (
    <ul id="title-list">{portfolioItems}</ul>
  );
}
 
class Portfolio extends Component {
  render() {
    return (
      <div className="page portfolio">

        <PortfolioItemList portfolioData={portfolioData} />        

      </div>
    );
  }
}

export default Portfolio;