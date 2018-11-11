import React, { Component } from "react";
import Icon from "./Icon"
import Animation from "./Animation"

const AnimationMouseOn = [0, 12]
const AnimationMouseOff = [12, 72]

const teamData = require("../data/teamData")


class Team extends Component {

  constructor(props) {
    super(props)

    this.handleNameHover = this.handleNameHover.bind(this)
    this.teamNameClick = this.teamNameClick.bind(this)
    this.exitClick = this.exitClick.bind(this)
    

    this.state = {
      active: 0,
      showInfo: false
    }

  }

  handleNameHover(key) {
    if(!this.state.showInfo){

      this.setState({
        active: key
      })
    }
  }

  teamNameClick(){
    this.setState({
      showInfo: true
    })
  }

  exitClick(){
    this.setState({
      showInfo: false
    })
  }

  teamNames(){
    let team = teamData.map((item, key) => {
      let cross;
      if(key === this.state.active && this.state.showInfo){
        cross = 
          <Icon
            className="exit"
            onClick={this.exitClick}
            src={require('../assets/icon/Close.svg')} />
      }
      return (
        <div onPointerEnter={()=> this.handleNameHover(key)} key={key}>
              <Animation
                className="teamAnimation"
                mouseOnFrames={AnimationMouseOn}
                mouseOffFrames={AnimationMouseOff}
                animationData={item.animationData}
                onClick={this.teamNameClick} />

                {cross}

        </div>
      )
    })

    return team;
  }

  render() {

    let content;
    let roles = teamData[this.state.active].roles.map((item, key) => {
      return <li key={key}><h2>{item}</h2></li>
    })

    if(this.state.showInfo){
      content = 
        <div className="details">
        <ul>
          {roles}
        </ul>
          {teamData[this.state.active].description}
        </div>
    } else {
      content = 
        <img src={teamData[this.state.active].image} alt={teamData[this.state.active].name} />
        
    }

    return (
      <div className="page team">
        <div className="names">
          {this.teamNames()}
        </div>
        <div className="content">
          {content}
        </div>
      </div>
    );
  }
}

export default Team;