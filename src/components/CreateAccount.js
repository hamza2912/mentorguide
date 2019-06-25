import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts } from "../actions";

import AOS from 'aos';


class CreateAccount extends Component {

  componentDidMount() {
      AOS.init({
        duration : 2000
      })
  }

  render() {
      return (
        <div class="text-center dark-color">
          <div class = "center-place">
            <form class="text-center form-signin" >
              <img data-aos="fade-right"data-aos-anchor="#example-anchor" data-aos-offset="500"data-aos-duration="500" src="./style/tutorlogo1.png" alt="Generic placeholder image" width="250" height="80" />
              <p class="font-cursive text-light">Please Choose Sign up options</p>
                <Link to="/create_tutor" className="btn btn-block  btn-info btn-sm">Create Mentor Account</Link>
                <Link to="/create_user" className="btn btn-block  btn-info btn-sm">Create Student/User Account</Link>
                <Link to="/" className="btn btn-block  btn-danger btn-sm">Cancel</Link>
            </form>
            <footer class="my-5 pt-5 text-muted text-center text-small">
              <p class="text-center text-light">&copy; Pixiv Studios, Inc. &middot;</p>
              <a href="#">All Rights Reserved</a>
            </footer>
          </div>
        </div>
      );
  }

}


function mapStateToProps(state) {
  
  return { posts: state.posts.mentors };
    
}

export default connect(mapStateToProps, { fetchPosts })(CreateAccount);