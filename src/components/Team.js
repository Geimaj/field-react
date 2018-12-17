import React, { Component } from "react";
import Icon from "./Icon"
import ExitIcon from "./ExitIcon"
import Animation from "./Animation"
import { Fade } from 'react-animation-components'
import {hideMenu, showMenu, fadeDelay, fadeDuration} from "./Main"


const AnimationMouseOn = [0, 12]
const AnimationMouseOff = [12, 72]

const $ = require('jquery')

const teamData = require("../data/teamData")
const viewBox = {
  x: 0,
  y: 35,
  w: 300,
  h: 100
}

class Team extends Component {

  constructor(props) {
    super(props)

    this.handleNameHover = this.handleNameHover.bind(this)
    this.teamNameClick = this.teamNameClick.bind(this)
    this.exitClick = this.exitClick.bind(this)

    this.state = {
      showInfo: false
    }

    this.content = teamData.map((item, key) => {
      let roles = teamData[key].roles.map((item1, key1) => {
        return <li key={key1}><h2>{item1}</h2></li>
      })
      return (

        <div className="teamContent" key={key}>
          <img src={item.image} alt={item.name} />
          <div className="details">
            <ul>
              {roles}
            </ul>
            <div>
              {item.description}
            </div>
          </div>
        </div>
      )
    })

  }

  componentDidMount() {
    $(".teamContent").eq(0).addClass('active')
    hideMenu()
  }

  handleNameHover(key) {
    if (!this.state.showInfo) {

      $(".teamContent").removeClass('active')
      $(".teamContent").eq(key).addClass('active')

    }
  }

  teamNameClick(key) {
    if (!this.state.showInfo) {
    
    $(".teamContent").removeClass('showDetails')
    $(".teamContent").eq(key).addClass('showDetails')

    $(".exit").removeClass("active")
    $(".exit").eq(key).addClass('active')

    this.setState({
      showInfo: true
    })
  }

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
        <ExitIcon onClick={this.exitClick}/>

      return (
        <Fade in delay={fadeDelay*key} duration={fadeDuration}>
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

    return (
      <div className="page team">
        <div className="names">
          {this.teamNames()}
        </div>
     <Fade in delay={fadeDelay*teamData.length} duration={fadeDuration} onEntered={() => showMenu(fadeDelay*(teamData.length +1))}>
        
        <div className="content">
          {this.content}
        </div>
    </Fade>
     </div>
    );
  }
}

export default Team;