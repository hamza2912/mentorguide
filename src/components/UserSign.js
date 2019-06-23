import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { fetchPosts2 } from "../actions";

class UserSignIn extends Component {

  constructor(props) {
    super(props);
    this.state = { Username: "", pass: "" };
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePass = this.updatePass.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    var Users = this.props.posts;
    return _.map(this.props.posts, post => {
      console.log(post.username);
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
    var users = this.props.fetchPosts2();
  }

  render() {
    return (
      <div className="text-center dark-color">
        <div className="center-place">

          <form className="form-signin" onSubmit={this.onSubmit}>
            <img src="./style/tutorlogo1.png" alt="Generic placeholder image" width="250" height="80" />
            <p className="font-cursive text-light">Please Sign in below</p>
            <label htmlFor="inputEmail" className="sr-only">Username</label>
            <input type="username" value={this.state.username} onChange={this.updateUsername} id="inputEmail" className="form-control" placeholder="Student Username" required autoFocus />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" value={this.state.pass} onChange={this.updatePass} id="inputPassword" className="form-control" placeholder="Password" required />
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
          </label>
            </div>
            <button className="btn btn-lg btn-success btn-sm" type="submit">Sign in</button>
            <Link to="/" className="btn btn-lg  btn-danger btn-sm">Cancel</Link>
            <p className="mt-5 mb-3 text-muted">Dont you have Student/User account<a href="/usernew"> Sign up </a>Now</p>
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
  console.log(state.posts);
  return { posts: state.posts };
}


export default connect(mapStateToProps, { fetchPosts2 })(UserSignIn);


