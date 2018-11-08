import React, { Component } from "react";
import PortfolioItem from "./PortfolioItem"
import {portfolioData} from "./data/portfolioData" 


function PortfolioItemList(props){
  const data = props.portfolioData
  const portfolioItems = data.map((item, index) => {

    return <PortfolioItem key={index} title={item.title} className={item.className} credits={item.credits}/>
  })

  return (
    <ul id="title-list">{portfolioItems}</ul>
  );
}
 
class Portfolio extends Component {
  render() {
    return (
      <PortfolioItemList portfolioData={portfolioData} />        
    );
  }
}

export default Portfolio;