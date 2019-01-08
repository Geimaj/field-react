import React, { Component } from "react";
import MobileArtItem from "./MobileArtItem"

showInfo(){
    console.log('showInfo')
}
export default class MobileTeamItem extends Component {


    render() {

        return (
            <div>

            <MobileArtItem 
                title={this.props.name} 
                src={this.props.image} 
                href={this.props.link}
                onClick={showInfo} />

                <div className="exitIcon">

                </div>
                
            </div>
        );
    }
}

