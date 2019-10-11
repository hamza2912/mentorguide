import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";


export default class Success2 extends Component {

render() {

    return (

      <div className="text-center dark-color">
        <div className = "center-place">
          <img src="./images/tutorlogo1.png" alt="Generic placeholder image" width="250" height="80" />
          <div className="dark-color">
            <h1 className = "text-light">You're Done!</h1>
            <h4 className="text-light font-cursive">Your Student/User account has been successfully created.</h4>
            <Link to= "/sign_user" className="btn btn-lg btn-outline-info">Continue &raquo;</Link>
          </div>
          <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="text-center text-light">&copy; Pixiv Studios, Inc. &middot;</p>
            <a href="#">All Rights Reserved</a>
          </footer>
        </div>
      </div>
    );
  }
}