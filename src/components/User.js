import { useState } from "react";
import { UserInfo } from "./styles/UserInfo.Styled";
import location from "../assets/icon-location.svg";
import website from "../assets/icon-website.svg";
import twitter from "../assets/icon-twitter.svg";
import company from "../assets/icon-company.svg";

function User(props) {
  var ntdmn = require("number-to-date-month-name");
  return (
    <UserInfo theme={props.theme}>
      <div className="section1">
        <img src={props.photo} />

        <div>
          <h1>{props.name}</h1>
          <p className="login">@{props.login}</p>
          <p className="join">
            Joined {props.join.slice(8, 10)}{" "}
            {ntdmn.toMonth(props.join.slice(5, 7), "s")}{" "}
            {props.join.slice(0, 4)}
          </p>
        </div>
      </div>

      <p className="bio" style={props.bio == null ? { opacity: 0.5 } : null}>
        {props.bio != null ? props.bio : "This profile has no bio"}
      </p>
      <div className="mainInfo">
        <div>
          <p className="p1">Repos</p>
          <p className="p2">{props.repos}</p>
        </div>
        <div>
          <p className="p1">Followers</p>
          <p className="p2">{props.followers}</p>
        </div>
        <div>
          <p className="p1">Following</p>
          <p className="p2">{props.following}</p>
        </div>
      </div>

      <div className="mainInfo2">
        <div className="forResponsive">
          <div style={props.location == null ? { opacity: 0.5 } : null}>
            <img src={location} />{" "}
            <p>{props.location == null ? "Not Available" : props.location}</p>
          </div>
          <div style={props.blog == "" ? { opacity: 0.5 } : null}>
            <img src={website} />{" "}
            <p>
              <a href={props.blog}>
                {props.blog == "" ? "Not Available" : props.blog}
              </a>
            </p>
          </div>
        </div>

        <div className="forResponsive2">
          <div style={props.twitter == null ? { opacity: 0.5 } : null}>
            <img src={twitter} />{" "}
            <p>{props.twitter == null ? "Not Available" : props.twitter}</p>
          </div>
          <div style={props.company == null ? { opacity: 0.5 } : null}>
            <img src={company} />{" "}
            <p>{props.company == null ? "Not Available" : props.company}</p>
          </div>
        </div>
      </div>
    </UserInfo>
  );
}

export default User;
