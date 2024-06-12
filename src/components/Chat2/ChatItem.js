import React, { Component } from "react";
import { FaUser } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";

export default class ChatItem extends Component {
  render() {
    return (
        <div
          style={{ animationDelay: `0.8s` }}
          className={`chat__item ${this.props.user === "ai" ? "other" : ""}`}
        >
          <div className="chat__item__content">
            <div className="chat__msg">{this.props.msg}</div>
            
          </div>
          {
            this.props.user === "user" ?<FaUser/>:<RiRobot2Fill/>
          }
          
        </div>
      );
   
  }
}
