import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";


export default class Success extends Component {

  Return() {

      this.props.history.push(`/sign_tutor`);

  }

  render() {
      
      return (

        <div className="text-center dark-color">
          <div className = "center-place">
            <img src="./style/tutorlogo1.png" alt="Generic placeholder image" width="250" height="80" />
            <div className="dark-color">
              <h1 className = "text-light">You're Done!</h1>
              <h4 className="text-light font-cursive">Your Tutor profile has been successfully created.</h4>
              <button className="btn btn-lg btn-outline-info" onClick={this.Return.bind(this)} role="button">Continue &raquo;</button>
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