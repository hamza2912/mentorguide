import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";
import AOS from 'aos';



class MainSignIn extends Component {

  componentDidMount() {
    AOS.init({
      duration: 2000
    })
  }

  render() {


    return (

      <div className="text-center dark-color">
        <div className="center-place">

          <form className="form-signin" onSubmit={this.onSubmit}>
            <img data-aos="fade-right" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500" src="./style/tutorlogo1.png" alt="Generic placeholder image" width="250" height="80" />
            <p className="font-cursive text-light">Please Choose Sign in options</p>
            <Link to="/UserSign" className="btn btn-block  btn-info btn-sm">Sign in as student/user</Link>
            <Link to="/sign" className="btn btn-block  btn-info btn-sm">Sign in as mentor</Link>
            <Link to="/" className="btn btn-block  btn-danger btn-sm">Cancel</Link>
          </form>
          <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="text-center text-light">&copy; Pixiv Studios, Inc. &middot;</p>
            <a href="#">All Rights Reserved</a>
          </footer>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { posts: state.posts };
}


export default connect(mapStateToProps, { fetchPosts })(MainSignIn);


