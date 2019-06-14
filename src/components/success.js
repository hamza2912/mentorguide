import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";


export default class Success extends Component {

giveID() {

    var mentors = JSON.parse(localStorage.getItem('mentors'));
    var lastPost = mentors.pop();
    this.props.history.push(`/profile/${lastPost.id}`);

}

render() {
    
    return (

    <body class="text-center main-color">
      <div class = "center-place">
      <img src="./style/tutorlogo1.png" alt="Generic placeholder image" width="250" height="80" />
      <div class="main-color">
        <h1 class = "text-light">You're Done!</h1>
        <h4 class="text-light">Your Tutor profile has been successfully created.</h4>
        <button class="btn btn-lg btn-success" onClick={this.giveID.bind(this)} role="button">Continue &raquo;</button>
      </div>
    </div>

    </body> );

      

}

}

