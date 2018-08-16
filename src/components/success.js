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

    <body>
    <div class="container">
      <div class="jumbotron mt-3">
        <h1>You're Done!</h1>
        <p class="lead">Your mentor profile has been successfully created.</p>
        <button class="btn btn-lg btn-success" onClick={this.giveID.bind(this)} role="button">Continue &raquo;</button>
      </div>
    </div>

    </body> );

      

}

}

