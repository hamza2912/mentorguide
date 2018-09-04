import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";



class MainSignIn extends Component {


render() {

    
    return (
    
    <body class="text-center">
    
      <form class="form-signin" onSubmit={this.onSubmit}>
      <h1><span class="badge badge-dark">Mentor Guide</span></h1>
      <p class="lead">Please Choose Sign in options</p>
        <Link to="/UserSign" className="btn btn-block  btn-info btn-sm">Sign in as student/user</Link>
        <Link to="/sign" className="btn btn-block  btn-info btn-sm">Sign in as mentor</Link>
        <Link to="/" className="btn btn-block  btn-danger btn-sm">Cancel</Link>
      </form>
      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">&copy; Hamza's Developer Company</p>
        <a href="#">All Rights Reserved</a>
      </footer>
    </body>
);
}
}


function mapStateToProps(state) {
  return { posts: state.posts.mentors };
}


export default connect(mapStateToProps, { fetchPosts })(MainSignIn);


