import React, { Component } from "react";
import ExitIcon from "./ExitIcon"
import Animation from "./Animation"
import { Fade } from 'react-animation-components'
import { hideMenu, showMenu, fadeDelay, fadeDuration } from "./Main"
import { TeamMemberContent } from "./TeamMemberContent"


const AnimationMouseOn = [0, 12]
const AnimationMouseOff = [12, 72]

const $ = require('jquery')

const teamData = require("../data/teamData")

class Team extends Component {

  constructor(props) {
    super(props)

    this.handleNameHover = this.handleNameHover.bind(this)
    this.teamNameClick = this.teamNameClick.bind(this)
    this.exitClick = this.exitClick.bind(this)

    this.state = {
      showInfo: false,
      activeIndex: 0,
      className: "active"
    }

  }

  componentDidMount() {
    hideMenu()
  }

  handleNameHover(key) {
    if (!this.state.showInfo) {

      if(this.state.activeIndex != key){

        $(".teamContent.active ").animate({"opacity": 0},250, ()=>{
          
          
          this.setState({
            activeIndex: key
          })
          
          $(".teamContent.active ").animate({"opacity": 1},250)      
          
        })
      }
    }
  }

  teamNameClick(key) {

    $(".exit").removeClass("active")
    $(".exit").eq(key).addClass('active')

    this.setState({
      showInfo: true,
      activeIndex: key,
      className: "active showDetails"
    })

  }

  exitClick() {
    $(".teamContent").removeClass('showDetails')
    $(".exit").removeClass("active")

    this.setState({
      showInfo: false
    })
  }

  teamNames() {
    let team = teamData.map((item, key) => {
      let cross;
      cross =
        <ExitIcon onClick={this.exitClick} />

      return (
        <Fade in delay={fadeDelay * key} duration={fadeDuration} key={key}>
          <div className="name-item" onMouseEnter={() => this.handleNameHover(key)} onPointerEnter={() => this.handleNameHover(key)} key={key}>
            <Animation
              className={`teamAnimation ${item.name.toLowerCase().split(' ')[0]}`}
              mouseOnFrames={AnimationMouseOn}
              mouseOffFrames={AnimationMouseOff}
              animationData={item.animationData}
              viewBox={item.viewBox}
              onClick={() => this.teamNameClick(key)} />

            {cross}

          </div>
        </Fade>
      )
    })

    return team;
  }

  render() {

    let item = teamData[this.state.activeIndex]

    let content =
      <TeamMemberContent item={teamData[this.state.activeIndex]} showInfo={this.state.showInfo} />

    return (
      <div className="page team">
        <div className="names">
          {this.teamNames()}
        </div>
        <Fade in delay={fadeDelay * teamData.length} duration={fadeDuration} onEntered={() => showMenu(fadeDelay * (teamData.length + 1))}>

          <div className="content">
            {content}
          </div>
        </Fade>
      </div>
    );
  }
}

export default Team;