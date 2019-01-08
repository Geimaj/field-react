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
    }

  }

  componentDidMount() {
    hideMenu()
  }

  handleNameHover(key) {
    if (!this.state.showInfo) {
   
          this.setState({
            activeIndex: key
          })
       
    }
  }

  teamNameClick(key) {

    $(".exit").removeClass("active")
    $(".exit").eq(key).addClass('active')

    this.setState({
      showInfo: true,
      activeIndex: key,
    })

  }

  exitClick() {
    // $(".teamContent").removeClass('showDetails')
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
    let content = teamData.map((item, key) => {
      return (
        <TeamMemberContent
          key={key}
          item={item}
          active={this.state.activeIndex === key}
          showInfo={this.state.showInfo} />
      )
    })

    // let data = teamData[this.state.activeIndex]
    // let content = <TeamMemberContent item={data} 
    //   active={true}
    //   showInfo={this.state.showInfo}/>
  
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