import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";


class SignIn extends Component {
  


render() {
    return (
      
    <body class="text-center">
    
      <form class="form-signin">
      <h1><span class="badge badge-dark">Mentor Guide</span></h1>
      <p class="lead">Please Sign in below</p>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-success btn-sm" type="submit">Sign in</button>
        <Link to="/" className="btn btn-lg  btn-danger btn-sm">Cancel</Link>
        <p class="mt-5 mb-3 text-muted">Dont you have acount<a href="/posts/new"> Sign up </a>Now</p>
      </form>
    </body>
);
}
}


function mapStateToProps(state) {
  return { posts: state.posts };
}



export default connect(mapStateToProps, { fetchPosts })(SignIn);


