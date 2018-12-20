import React, { Component } from "react";

export class TeamMemberContent extends Component {


    render() {

        let roles = this.props.item.roles.map((item1, key1) => {
            return <li key={key1}><h2>{item1}</h2></li>
        })

        let showInfo = ""
        if(this.props.showInfo){
            showInfo = "showDetails"
        }

        return (
            <div className={`teamContent active ${showInfo} ${this.props.className}`}>
                <img src={this.props.item.image} alt={this.props.item.name} />
                <div className="details">
                    <ul>
                        {roles}
                    </ul>
                    <div>
                        {this.props.item.description}
                    </div>
                </div>
            </div>
        );
    }
}