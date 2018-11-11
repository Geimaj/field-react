import React, { Component } from "react";
import Animation from "./Animation";

const artData = require("../data/civviesData")
const watchAnimation = require("../assets/animation/WatchFilm.json")
const AnimationMouseOn = [0, 12]
const AnimationMouseOff = [12, 72]


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

  }

  artItemClick(key){
    this.setState({
      active: key
    })
  }

  imageHoverOn(){
    this.setState({
      showDetails: true
    })
  }

  imageHoverOff(){
    this.setState({
      showDetails: false
    })
  }

  artLinkClicked(){
    window.open(artData[this.state.active].link,"_blank")
  }

  render() {

    let art = artData.map((item, key) => {
      let cls;
      if(key === this.state.active){
        cls = "active"
      }
      return (
        <li key={key}
          className={cls}
          onClick={() => this.artItemClick(key)}>
          <h2>
            {item.title}
          </h2>
        </li>
      )
    })

    let img = artData[this.state.active].image;

    let content;

    if(this.state.showDetails){
      content = 
        <div>
          <p>
            {artData[this.state.active].description}
          </p>
          <p>
            {artData[this.state.active].type}
          </p>
          <p>
            {artData[this.state.active].by}
          </p>

          <Animation 
            mouseOnFrames={AnimationMouseOn}
            mouseOffFrames={AnimationMouseOff}
            animationData={watchAnimation}
            onClick={this.artLinkClicked}/>

        </div>
    } else {
      content = 
      <img  src={`${img}`} alt={artData[this.state.active].title} />
    }

    return (
      <div className={`page art`}>
        <div className="content"
          onPointerEnter={this.imageHoverOn}
          onPointerLeave={this.imageHoverOff}>
          {content}
        </div>
        <ul className="artList">
          {art}
        </ul>
      </div>
    );
  }

}
 
export default PortfolioItem;