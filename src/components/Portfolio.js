import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Fade } from 'react-animation-components'


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
    this.handleMouseEnter = this.handleMouseEnter.bind(this)        
    
    this.state = {
      active: true,
      update: true
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
        by={item.by}
        type={item.type}
        extra={item.extra}
        credits={item.credits}
        viewBox={viewBox}
        animationData={item.animationData}
        onClick={this.portfolioItemClick} />
    })

    return (
      <div id="titles" 
        ref={(c) => this.el = c}>
        <ul id="title-list">{portfolioItems}</ul>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      update: true
    })
    console.log('mount')
    watchScroll();


  }

  shouldComponentUpdate(){
    console.log('should update')
    // watchScroll()
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
    // this.setState({
    //   update: false
    // })
    console.log('unmount')
    console.log(scrollInterval)    
    clearInterval(scrollInterval)

    console.log('cleared')    
    console.log(scrollInterval)    
    
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

    // clearInterval(scrollInterval)
    // this.render()
  }

  handleMouseEnter(){
    this.setState({redraw: true})

  
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
      <Fade in>

      <div className={classes}
        onMouseEnter={this.handleMouseEnter}
        onPointerEnter={this.handleMouseEnter}>
        {portfolio}
      </div>
      </Fade>
    );
  }



  // watchScroll(){
  //   this.$titles = $("#titles");
  //   this.titlesWidth = this.$titles.outerWidth(true);
  //   this.titlesScrollWidth = this.$titles[0].scrollWidth;
  //   this.wDiff = this.titlesScrollWidth / this.titlesWidth - 1; // widths difference ratio
  //   this.mPadd = 60; // Mousemove Padding
  //   this.damp = 20; // Mousemove response softness
  //   this.mX = 0; // Real mouse position
  //   this.mX2 = 0; // Modified mouse position
  //   this.posX = 0;
  //   this.mmAA = this.titlesWidth - this.mPadd * 2; // The mousemove available area
  //   this.mmAAr = this.titlesWidth / this.mmAA; // get available mousemove fidderence ratio
  
  //   this.$titles.mousemove(function(e) {
  //     this.mX = e.pageX - $(this).offset().left;
  //     this.mX2 = Math.min(Math.max(0, this.mX - this.mPadd), this.mmAA) * this.mmAAr;
  //   });
  
  
   
  // }



}

export default Portfolio;

function watchScroll(){
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


  scrollInterval = setInterval(function() {
    posX += (mX2 - posX) / damp; // zeno's paradox equation "catching delay"
    $titles.scrollLeft(posX * wDiff);
    console.log('interval')
  }, 10);
}