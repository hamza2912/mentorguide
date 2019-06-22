import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";



class MainSignIn extends Component {


render() {

    
    return (
    
      <body class="text-center dark-color">
      <div class = "center-place">
    
      <form class="form-signin" onSubmit={this.onSubmit}>
      <img src="./style/tutorlogo1.png" alt="Generic placeholder image" width="250" height="80" />
      <p class="font-cursive text-light">Please Choose Sign in options</p>
        <Link to="/UserSign" className="btn btn-block  btn-info btn-sm">Sign in as student/user</Link>
        <Link to="/sign" className="btn btn-block  btn-info btn-sm">Sign in as mentor</Link>
        <Link to="/" className="btn btn-block  btn-danger btn-sm">Cancel</Link>
      </form>
      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="text-center text-light">&copy; Pixiv Studios, Inc. &middot;</p>
        <a href="#">All Rights Reserved</a>
      </footer>
      </div>
    </body>
);
}
}


function mapStateToProps(state) {
  return { posts: state.posts };
}


export default connect(mapStateToProps, { fetchPosts })(MainSignIn);


