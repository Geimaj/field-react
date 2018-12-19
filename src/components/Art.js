import React, { Component } from "react";
import Animation from "./Animation";
import ArtContentItem from "./ArtConentItem";
import { Fade } from 'react-animation-components'
import { hideMenu, showMenu, fadeDelay, fadeDuration } from "./Main"


const $ = require('jquery')
const artData = require("../data/civviesData")
const watchFilmAnimation = require("../assets/animation/WatchFilm.json")
const watchShowAnimation = require("../assets/animation/WatchShow.json")
const watchVideoAnimation = require("../assets/animation/WatchVideo.json")

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

  constructor(props) {
    super(props)

    this.artItemClick = this.artItemClick.bind(this)
    this.imageHoverOn = this.imageHoverOn.bind(this)
    this.imageHoverOff = this.imageHoverOff.bind(this)
    this.artLinkClicked = this.artLinkClicked.bind(this)

    this.state = {
      active: 0,
      showDetails: false,
      in: true
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

  componentWillMount() {
    $(".art").addClass("active")
  }

  componentWillUnmount() {
    $(".art").removeClass("active")
  }

  componentDidMount() {
    hideMenu();

    $(".art").addClass("active")
    $(".art").addClass("active-opening")
    // $(".art").removeClass("active-opening")    
    $(".artContent").eq(0).addClass('active')
    $(".artList li").eq(0).addClass('active')

    watchScroll();
  }

  artItemClick(key) {

    $(".artContent").removeClass('active')
    // $(".artContent").eq(key).addClass('active')
    $(".artContent").addClass('active')

    $(".artList li").removeClass('active')
    $(".artList li").eq(key).addClass('active')

    //TODO: REFACTOR
    // fade active image out and new image in
    this.setState({
      in: false
    })

    setTimeout(() => {
      this.setState({
        active: key,
        in: true
      })
    }, 250)
  }

  imageHoverOn(item) {
    this.setState({
      showDetails: true
    })

    // $('.artContent').eq(this.state.active).addClass('showDetails')
    $('.artContent').addClass('showDetails')
  }

  imageHoverOff() {
    this.setState({
      showDetails: false
    })

    // $('.artContent').eq(this.state.active).removeClass('showDetails')
    $('.artContent').removeClass('showDetails')

  }

  artLinkClicked() {
    window.open(artData[this.state.active].link, "_blank")

  }

  render() {

    let animation =
      <Animation
        mouseOnFrames={AnimationMouseOn}
        mouseOffFrames={AnimationMouseOff}
        animationData={watchFilmAnimation}
        onClick={this.artLinkClicked} />

    let item = artData[this.state.active]

    console.log(item.animation)
    if (item.animation === "watchShow") {
      animation =
        <Animation
          key={1}
          mouseOnFrames={AnimationMouseOn}
          mouseOffFrames={AnimationMouseOff}
          animationData={watchShowAnimation}
          onClick={this.artLinkClicked} />
    } else if (item.animation === "watchFillm") {
      animation =
        <Animation
          key={2}
          mouseOnFrames={AnimationMouseOn}
          mouseOffFrames={AnimationMouseOff}
          animationData={watchFilmAnimation}
          onClick={this.artLinkClicked} />
    } else if (item.animation === "watchVideo") {
      animation =
        <Animation
          key={3}
          mouseOnFrames={AnimationMouseOn}
          mouseOffFrames={AnimationMouseOff}
          animationData={watchVideoAnimation}
          onClick={this.artLinkClicked} />
    }

    // if(item.animation){
    //   animationData = item.animation
    // }

    // let animation = 
    //       <Animation 
    //         key={1}
    //         mouseOnFrames={AnimationMouseOn}
    //         mouseOffFrames={AnimationMouseOff}
    //         animationData={animationData}
    //         onClick={this.artLinkClicked}/>

    let details =
      <Fade in={this.state.in} delay={0} duration={fadeDuration} className="artImage-fade" unmountOnExit>

        <ArtContentItem type={item.type}
          description={item.description}
          animation={animation}
          image={item.image}
          linke={item.link} />

      </Fade>

    return (
      <div className={`art`}>


        <div className="content"
          onPointerEnter={() => this.imageHoverOn(this)}
          onPointerLeave={this.imageHoverOff}
          onMouseEnter={() => this.imageHoverOn(this)}
          onMouseLeave={this.imageHoverOff}
          key={1}>

          {details}
        </div>

        <ul className="artList" key="2">
          <Fade in delay={fadeDelay} duration={fadeDuration} onEntered={() => showMenu(fadeDelay * 2)}>
            {this.art}
          </Fade>
        </ul>
      </div>
    );
  }

}
export default PortfolioItem;

function watchScroll() {

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

  $civvies_list.mousemove(function (e) {
    mX = e.pageY - $(this).offset().top;
    mX2 = Math.min(Math.max(0, mX - mPadd), mmAA) * mmAAr;
  });

  setInterval(function () {
    posX += (mX2 - posX) / damp; // zeno's paradox equation "catching delay"
    $civvies_list.scrollTop(posX * wDiff);
  }, 10);
}