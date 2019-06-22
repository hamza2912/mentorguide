import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";


export default class Success extends Component {

Return() {

    this.props.history.push(`/sign`);

}

render() {
    
    return (

    <body class="text-center dark-color">
      <div class = "center-place">
      <img src="./style/tutorlogo1.png" alt="Generic placeholder image" width="250" height="80" />
      <div class="dark-color">
        <h1 class = "text-light">You're Done!</h1>
        <h4 class="text-light">Your Tutor profile has been successfully created.</h4>
        <button class="btn btn-lg btn-success" onClick={this.Return.bind(this)} role="button">Continue &raquo;</button>
      </div>
      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="text-center text-light">&copy; Pixiv Studios, Inc. &middot;</p>
        <a href="#">All Rights Reserved</a>
      </footer>
    </div>

    </body> );

      

}

}

