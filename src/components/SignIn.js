import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts } from "../actions";

import AOS from 'aos';
import Header from "./Header";


class SignIn extends Component {

  componentDidMount() {
    AOS.init({
      duration: 500
    })
  }

  render() {

    return (
      <main>
        <Header />
            <div className="text-center bglogin">
              <div  className = "center-place">
              <div className='sans-heading'>
                <h4 className="Sans6" >Login</h4>
                <div className="Sans6border " ></div>
              </div>
              <p  data-aos="fade-up" className="font-ylish text-muted mt-5 mb-4 ">Please choose sign in options below. Dont you have an account? <br/> <a href="/create_tutor">Sign up as a Tutor</a> or <a href="create_user">Signup as a User</a></p>
              <form className="form-signin" >
                <div className="py-1">
                  <Link to="/sign_user" className="text-center myLink">Sign in as a User ></Link>
                </div>
                <div className="py-1">
                  <Link to="/sign_tutor" className="text-center myLink">Sign in as a Tutor ></Link>
                  </div>
               </form>

              </div>
            </div>
      </main>
    );
  }
}


function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(SignIn);
