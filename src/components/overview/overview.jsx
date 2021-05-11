import React, { Component } from "react";
import "./overview.css";
import CardInfo from "./card_inf";

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="contained-section">
        <div className="row description">
          <p className="header">Get Started on our website with these tips</p>
        </div>
        <div className="row content">
          <CardInfo className="card"
            icon="pencil"
            description="write a post for the service to enable freelancer to see your requested
                         service"
          />
          <CardInfo
            icon="email" className="card"
            description="write a post for the service to enable freelancer to see your requested
                         service"
          />
          <CardInfo
            icon="plus" className="card"
            description="write a post for the service to enable freelancer to see your requested
                         service"
          />
          <CardInfo
            icon="send" className="card"
            description="write a post for the service to enable freelancer to see your requested
                         service"
          />
        </div>
      </div>
    );
  }
}

export default Overview;