import React, { Component } from "react";
import Animation from "./Animation";

const $ = require('jquery')
const artData = require("../data/civviesData")
const watchAnimation = require("../assets/animation/WatchFilm.json")
const AnimationMouseOn = [0, 12]
const AnimationMouseOff = [12, 72]

let scrollInterval;


class PortfolioItem extends Component {

  constructor(props){
    super(props)

    this.artItemClick = this.artItemClick.bind(this)
    this.imageHoverOn = this.imageHoverOn.bind(this)    
    this.imageHoverOff = this.imageHoverOff.bind(this)    
    this.artLinkClicked = this.artLinkClicked.bind(this)    

    this.state = {
      active: 0,
      showDetails: false
    }

    this.art = artData.map((item, key) => {
      return (
        <li key={key}
          onClick={() => this.artItemClick(key)}>
            <h2>
            {item.title}
            </h2>
        </li>
      )
    })

    this.content = artData.map((item, key) => {

      return (
        <div className="artContent">
          <img className="artImage"
            src={item.image} />
            <div className="details">
              <p>
                {item.description}
              </p>
              <p className="type">
                {item.type}
              </p>
              <p className="by">
                By: {item.by}
              </p>
            </div>
        </div>
      )
    })

  }

  componentDidMount(){
    $(".artContent").eq(0).addClass('active')
    $(".artList li").eq(0).addClass('active')

    watchScroll();
  }

  artItemClick(key){
    this.setState({
      active: key
    })
    $(".artContent").removeClass('active')
    $(".artContent").eq(key).addClass('active')

    $(".artList li").removeClass('active')    
    $(".artList li").eq(key).addClass('active')

  }

  imageHoverOn(item){
    this.setState({
      showDetails: true
    })

    $('.artContent').eq(this.state.active).addClass('showDetails')

  }

  imageHoverOff(){
    this.setState({
      showDetails: false
    })

    $('.artContent').eq(this.state.active).removeClass('showDetails')
  }

  artLinkClicked(){
    window.open(artData[this.state.active].link,"_blank")
  }

  render() {

    return (
      <div className={`page art`}>
        <div className="content"
          onPointerEnter={() => this.imageHoverOn(this)}
          onPointerLeave={this.imageHoverOff}>
          {this.content}
        </div>
        <ul className="artList">
          {this.art}
        </ul>
      </div>
    );
  }

}
export default PortfolioItem;

function watchScroll(){

  var $civvies_list = $(".artList"),
  civviesHeight = $civvies_list.outerHeight(true),
  civviesScrollHeight = $civvies_list[0].scrollHeight,
  wDiff = civviesScrollHeight / civviesHeight - 1, // widths difference ratio
  mPadd = 60, // Mousemove Padding
  damp = 20, // Mousemove response softness
  mX = 0, // Real mouse position
  mX2 = 0, // Modified mouse position
  posX = 0,
  mmAA = civviesHeight - mPadd * 2, // The mousemove available area
  mmAAr = civviesHeight / mmAA; // get available mousemove fidderence ratio
  
  $civvies_list.mousemove(function(e) {
    mX = e.pageY - $(this).offset().top;
    mX2 = Math.min(Math.max(0, mX - mPadd), mmAA) * mmAAr;
  });
  
  setInterval(function() {
    posX += (mX2 - posX) / damp; // zeno's paradox equation "catching delay"
    $civvies_list.scrollTop(posX * wDiff);
  }, 10);
}