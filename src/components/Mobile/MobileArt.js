import React, { Component } from "react";
import MobileArtItem from "./MobileArtItem"

const artData = require("../../data/civviesData");


export default class MobileArt extends Component {

    artItems(){
        let artItems = artData.map((item, key)=> {
            return (
                <MobileArtItem title={item.title} 
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
            {this.artItems()}
            </div>
        );
    }
}

