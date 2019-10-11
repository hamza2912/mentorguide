import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts } from "../actions";

import AOS from 'aos';
import Header from "./Header";


class CreateAccount extends Component {

  componentDidMount() {
      AOS.init({
        duration : 500
      })
  }

  render() {
      return (
        <main>
        <Header />
            <div className="text-center bglogin">
              <div  className = "center-place">
              <div className='sans-heading'>
                <h4 className="Sans6" >Create Account</h4>
                <div className="Sans6border " ></div>
              </div>
              <p data-aos="fade-up" className="font-ylish text-muted mt-5 mb-4 ">Please choose sign up options below. Already have an account? <a href="/posts/new"> Sign In </a> now</p>
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