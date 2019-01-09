import React, { Component } from "react";
import MobileTeamItem from "./MobileArtItem"

const artData = require("../../data/teamData");
export default class MobileTeam extends Component {

    TeamMembers(){
        let artItems = artData.map((item, key)=> {
            return (
                <MobileTeamItem title={item.name} 
                    src={item.image} 
                    href={item.link} 
                    key={key}/>
            )
        })

        return artItems;
    }

    render() {

        return (
            <div className="mobile team">
            {this.TeamMembers()}
            </div>
        );
    }
}

