import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";


export default class Success2 extends Component {


render() {
    
    return (

    <body class="text-center main-color">
      <div class = "center-place">
      <img src="./style/tutorlogo1.png" alt="Generic placeholder image" width="250" height="80" />
      <div class="main-color">
        <h1 class = "text-light">You're Done!</h1>
        <h4 class="text-light">Your Student/User account has been successfully created.</h4>
        <Link to= "/" class="btn btn-lg btn-success">Continue &raquo;</Link>
      </div>
    </div>
    

    </body> );

      

}

}

