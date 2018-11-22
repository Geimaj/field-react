import React, { Component } from "react";
import Icon from "./Icon"
import ExitIcon from "./ExitIcon"
import Animation from "./Animation"

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
        // <Icon
        //   className="exit"
        //   onClick={this.exitClick}
        //   src={require('../assets/icon/Close.svg')} />
        <ExitIcon onClick={this.exitClick}/>
      return (
        <div onMouseEnter={() => this.handleNameHover(key)} onPointerEnter={() => this.handleNameHover(key)} key={key}>
          <Animation
            className="teamAnimation"
            mouseOnFrames={AnimationMouseOn}
            mouseOffFrames={AnimationMouseOff}
            animationData={item.animationData}
            viewBox={viewBox}
            onClick={() => this.teamNameClick(key)} />

          {cross}

        </div>
      )
    })

    return team;
  }

  render() {

    // let content;
    // let roles = teamData[this.state.active].roles.map((item, key) => {
    //   return <li key={key}><h2>{item}</h2></li>
    // })

    // if(this.state.showInfo){
    //   content = 
    //     <div className="details">
    //     <ul>
    //       {roles}
    //     </ul>
    //       {teamData[this.state.active].description}
    //     </div>
    // } else {
    //   content = 
    //     <img src={teamData[this.state.active].image} alt={teamData[this.state.active].name} />

    // }

    return (
      <div className="page team">
        <div className="names">
          {this.teamNames()}
        </div>
        <div className="content">
          {this.content}
        </div>
      </div>
    );
  }
}

export default Team;