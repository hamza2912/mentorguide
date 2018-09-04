import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";


export default class Success2 extends Component {


render() {
    
    return (

    <body>
    <div class="container">
      <div class="jumbotron mt-3">
        <h1>You're Done!</h1>
        <p class="lead">Your Student/User account has been successfully created.</p>
        <Link to= "/" class="btn btn-lg btn-success">Continue &raquo;</Link>
      </div>
    </div>

    </body> );

      

}

}

