import React, { Component } from "react";
import { Fade } from 'react-animation-components'
import {hideMenu, showMenu, fadeDelay} from "./Main"

import PortfolioItem from "./PortfolioItem"
import Movie from "./Movie"

const $ = require('jquery')

let viewBox = {
  x: 1700,
  y: 20,
  w: 700,
  h: 3000
}

let scrollInterval;

class Portfolio extends Component {

  constructor(props) {
    super(props)
    this.portfolioItemClick = this.portfolioItemClick.bind(this)
    this.exitMovieClick = this.exitMovieClick.bind(this)    
    
    this.state = {
      active: true,
      update: true
    }

    
  }

  PortfolioItemList(props) {
    const data = this.props.portfolioData
    const portfolioItems = data.map((item, index) => {
      return (
        <PortfolioItem
          key={index}
          title={item.title}
          vimeoID={item.vimeo_id}
          className={item.className}
          by={item.by}
          type={item.type}
          extra={item.extra}
          credits={item.credits}
          viewBox={viewBox}
          animationData={item.animationData}
          onClick={this.portfolioItemClick} />
      )
    })
    
    return (
      <Fade in className="portfolio-fade" component="span" onEntered={() => showMenu(fadeDelay)}>      
      <div id="titles" 
      ref={(c) => this.el = c}>
        <ul id="title-list">
          {portfolioItems}
        </ul>
      </div>
       </Fade>
    );
  }

  componentDidMount() {
    hideMenu()
    this.setState({
      update: true
    })
    // watchScroll();


  }

  componentDidUpdate(){
    console.log('should update')
    if(this.state.active){
      if($("#titles")){
        watchScroll()
      }
    } else {
      clearInterval(scrollInterval)
    }

    return true
  }

  componentWillUnmount(){
    clearInterval(scrollInterval)
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
    let className = "";

    if (this.state.active) {
      portfolio = 
        this.PortfolioItemList(this.props)
        className = "fixed"
    } else {
      let params = this.state.item.props
      portfolio = <Movie 
                    title={params.title}
                    vimeoID={params.vimeoID}
                    by={params.by}
                    extra={params.extra}
                    type={params.type}
                    credits={params.credits}
                    onClick={this.exitMovieClick}/>
      
      clearInterval(this.scrollInterval)
    }

    let classes = `page portfolio ${className}`;
    return (

        <div className={classes}
          onMouseEnter={this.handleMouseEnter}
          onPointerEnter={this.handleMouseEnter}>
          {portfolio}
        </div>
    );
  }

}

export default Portfolio;

export function watchScroll(){
  var $titles = $("#titles"),
  titlesWidth = $titles.outerWidth(true),
  titlesScrollWidth = $titles[0].scrollWidth,
  wDiff = titlesScrollWidth / titlesWidth - 1, // widths difference ratio
  mPadd = 60, // Mousemove Padding
  damp = 20, // Mousemove response softness
  mX = 0, // Real mouse position
  mX2 = 0, // Modified mouse position
  posX = 0,
  mmAA = titlesWidth - mPadd * 2, // The mousemove available area
  mmAAr = titlesWidth / mmAA; // get available mousemove fidderence ratio

  $titles.mousemove(function(e) {
    mX = e.pageX - $(this).offset().left;
    mX2 = Math.min(Math.max(0, mX - mPadd), mmAA) * mmAAr;
  });

  console.log("setting interval...")
  scrollInterval = setInterval(function() {
    posX += (mX2 - posX) / damp; // zeno's paradox equation "catching delay"
    $titles.scrollLeft(posX * wDiff);
    console.log('tick')
  }, 10);
}