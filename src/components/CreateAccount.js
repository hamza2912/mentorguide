import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts } from "../actions";

import AOS from 'aos';


class CreateAccount extends Component {

  componentDidMount() {
      AOS.init({
        duration : 500
      })
  }

  render() {
      return (
        <main>
        <header>
        <nav className="site-header fixed-top">
              <div className="container d-flex flex-column flex-md-row justify-content-between">
                <img  src="/style/logooo.jpg"
                alt="Generic placeholder image" width="100" height="62.5" />
                <a className="myNav text-dark" href="/">Home</a>
                <a className="myNav text-dark" href="/posts">Search</a>
                <a className="myNav text-dark" href="/lectures">Lectures</a>
                <a className="myNav text-dark" href="/create_request">Requests</a>
                <Link className="bluebutton boorder text-light font-ylish" to="/sign">Sign In</Link>
              </div>
            </nav>
            </header>
            <div className="text-center bglogin">
              <div  className = "center-place">
              <h4 className="Sans6 ">Create Account</h4>
              <div className="Sans6border mx-50" ></div>
              <p data-aos="fade-up" className="font-ylish text-muted mt-5 mb-4 mx-25">Please choose sign up options below. Already have an account? <a href="/posts/new"> Sign In </a> now</p>
              <form className="form-signin" >
                <div className="py-1">
                  <Link to="/create_tutor" className="text-center myLink">Create Mentor Account ></Link>
                </div>
                <div className="py-1">
                  <Link to="/create_user" className="text-center myLink">Create User Account ></Link>
                  </div>
               </form>

              </div>
            </div>
      </main>
      );
  }

}


function mapStateToProps(state) {

  return { posts: state.posts.mentors };

}

export default connect(mapStateToProps, { fetchPosts })(CreateAccount);