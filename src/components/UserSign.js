import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchUsers } from "../actions";

import AOS from 'aos';
import Header from "./Header";

class UserSignIn extends Component {

  constructor(props) {
    super(props);
    this.state = { Username: "", pass: "" };
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePass = this.updatePass.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  updateUsername(event) {
      this.setState({
      Username: event.target.value
    });
  }

  updatePass(event) {
      this.setState({
      pass: event.target.value
    });
  }

  componentDidMount() {
      this.props.fetchUsers();
      AOS.init({
        duration : 500
      })
  }

  onSubmit(values) {
    return _.map(this.props.posts, post => {
      if (post.username === this.state.Username) {
        if (post.password === this.state.pass) {
            var UserLogin = true;
            localStorage.setItem('UserLogin', JSON.stringify(UserLogin));
            var UserName = post.name;
            localStorage.setItem('UserName', JSON.stringify(UserName));
          return (
            this.props.history.push("/")
          );
        }
      }
    });
  }

  render() {
    return (
      <main>
        <Header />
            <div className="text-center bglogin">
              <div  className = "center-place">
              <h4 className="Sans6 " >Login</h4>
              <div className="Sans6border mx-50" ></div>
              <p  data-aos="fade-up" className="font-ylish text-muted my-5 mx-25">Please Sign in below to access all links. Dont you have an account? <a href="/create_user"> Sign Up </a>now</p>
                <form className="form-signin" onSubmit={this.onSubmit}>
                  <label for="inputEmail" className="sr-only">Username</label>
                  <input type="username" value={this.state.username} onChange={this.updateUsername} id="inputEmail" className="form-control"  placeholder="Username" required autofocus/>
                  <label for="inputPassword" className="sr-only">Password</label>
                  <input type="password" value={this.state.pass} onChange={this.updatePass} id="inputPassword" className="form-control" placeholder="Password" required/>
                  <button className="btn btn-secondary"> Continue </button>
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


export default connect(mapStateToProps, { fetchUsers })(UserSignIn);