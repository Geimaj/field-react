import React, { Component } from "react";
import PortfolioItem from "./PortfolioItem"
import Icon from "./Icon"
import Movie from "./Movie"
// import {portfolioData} from "../data/portfolioData" 
// const portfolioData = require('../data/oldportfolioData.js')


class Portfolio extends Component {

  constructor(props) {
    super(props)
    this.portfolioItemClick = this.portfolioItemClick.bind(this)
    this.exitMovieClick = this.exitMovieClick.bind(this)    

    this.state = {
      active: true
    }

  }

  PortfolioItemList(props) {
    const data = this.props.portfolioData
    const portfolioItems = data.map((item, index) => {
      return <PortfolioItem
        key={index}
        title={item.title}
        vimeoID={item.vimeo_id}
        className={item.className}
        credits={item.credits}
        animationData={item.animationData}
        onClick={this.portfolioItemClick} />
    })

    return (
      <ul id="title-list">{portfolioItems}</ul>
    );
  }

  componentDidMount() {

  }

  portfolioItemClick(activeItem) {
    this.setState({
      active: false,
      item: activeItem
    })
  }

  exitMovieClick() {
    this.setState({
      active: true
    })
  }

  render() {

    let portfolio;

    if (this.state.active) {
      portfolio = this.PortfolioItemList(this.props)
    } else {
      console.log(this.state.item.props)
      let params = this.state.item.props
      portfolio = <Movie 
                    title={params.title}
                    vimeoID={params.vimeoID}
                    onClick={this.exitMovieClick}/>
    }

    return (
      <div className="page portfolio">
        {portfolio}
      </div>
    );
  }
}

export default Portfolio;