import React, { Component } from "react";
import MobileInfoCard from "./MobileInfoCard"

export default class MobileArt extends Component {



    render() {

        return (
            <MobileInfoCard title={this.props.title}
                src={this.props.src} info={this.props.info}/>
            // <div className="mobile artItem">
            //     <h2>{this.props.title}</h2>
            //     <div className="bucket">
            //         <div>
            //             <Icon className='info' 
            //                 src={require("../../assets/icon/Info.svg")} 
            //                 href={this.props.href}
            //                 onClick={this.props.onClick}></Icon>
            //         </div>
            //         <img src={this.props.src} alt={this.props.title} />
            //     </div>
            // </div>
        );
    }
}

