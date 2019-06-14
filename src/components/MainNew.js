import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";



class MainNew extends Component {


render() {

    
    return (

    
    <body class="text-center main-color">
    <div class = "center-place">
    
    <form class="text-center form-signin" >
      <img src="./style/tutorlogo1.png" alt="Generic placeholder image" width="250" height="80" />
      <p class="font-cursive text-light">Please Choose Sign up options</p>
        <Link to="/posts/new" className="btn btn-block  btn-info btn-sm">Create Mentor Account</Link>
        <Link to="/usernew" className="btn btn-block  btn-info btn-sm">Create Student/User Account</Link>
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
  return { posts: state.posts.mentors };
  
  
}


export default connect(mapStateToProps, { fetchPosts })(MainNew);


