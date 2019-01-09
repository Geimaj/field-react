import React, { Component } from "react";
import MobileTeamItem from "./MobileTeamItem"

const artData = require("../../data/teamData");
export default class MobileTeam extends Component {

    TeamMembers(){
        let artItems = artData.map((item, key)=> {
            return (
                <MobileTeamItem title={item.name.split(" ")[0]} 
                    src={item.image} 
                    href={item.link} 
                    info={item.description}
                    key={key}/>
            )
        })

        return artItems;
    }

    render() {

        return (
            <div className="mobile art">
            {this.TeamMembers()}
            </div>
        );
    }
}

