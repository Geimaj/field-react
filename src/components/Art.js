import React, { Component } from "react";
import Animation from "./Animation";

const $ = require('jquery')
const artData = require("../data/civviesData")
const watchAnimation = require("../assets/animation/WatchFilm.json")
const AnimationMouseOn = [0, 12]
const AnimationMouseOff = [12, 72]


// const watchFilmAnimation = require('../assets/animation/WatchFilm.json')

// const viewBox = {
//     x: 0,
//     y: 20,
//     w: 350,
//     h: 150
// }


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

  }

  componentDidMount(){
    $(".artContent").eq(0).addClass('active')
    $(".artList li").eq(0).addClass('active')

    watchScroll();
  }

  artItemClick(key){
    $(".artContent").removeClass('active')
    // $(".artContent").eq(key).addClass('active')
    $(".artContent").addClass('active') 

    $(".artList li").removeClass('active')    
    $(".artList li").eq(key).addClass('active')
    
    this.setState({
      active: key
    })
  }

  imageHoverOn(item){
    this.setState({
      showDetails: true
    })

    // $('.artContent').eq(this.state.active).addClass('showDetails')
    $('.artContent').addClass('showDetails')    
  }

  imageHoverOff(){
    this.setState({
      showDetails: false
    })

    // $('.artContent').eq(this.state.active).removeClass('showDetails')
    $('.artContent').removeClass('showDetails')

  }

  artLinkClicked(){
    window.open(artData[this.state.active].link,"_blank")
  }

  render() {

    let item = artData[this.state.active]
    let details = 
      <div className="artContent">

      <div className="imageContainer">
        <div className="info">info</div>
      
        <img className="artImage"
          src={item.image} 
          alt={item.link}/>
    
      </div>
      
        <div className="details">
          <p className="description">
            {item.description}
          </p>
          <p className="type">
            {item.type}
          </p>
          <p className="by">
            By: {item.by}
          </p>

          <Animation 
            mouseOnFrames={AnimationMouseOn}
            mouseOffFrames={AnimationMouseOff}
            animationData={watchAnimation}
            onClick={this.artLinkClicked}/>
        </div>
    </div>
    

    return (
      <div className={`art`}>
        <div className="content"
          onPointerEnter={() => this.imageHoverOn(this)}
          onPointerLeave={this.imageHoverOff}
          onMouseEnter={() => this.imageHoverOn(this)}
          onMouseLeave={this.imageHoverOff}
          >

          {details}
          {/* {this.content} */}
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