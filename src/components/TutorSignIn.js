import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";
import AOS from 'aos';
import Header from "./Header";



class TutorSignIn extends Component {

  constructor(props) {
    super(props);
    this.state = { Username: "" , pass: ""};
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

    this.props.fetchPosts();

    AOS.init({
      duration : 500
    })

  }

  onSubmit(values) {

    return _.map(this.props.posts, post => {
       if (post.username === this.state.Username) {
         if(post.password===this.state.pass)
         {
            var Logged = true;
            var ProfilePage = `/profile/${post._id}`;
            localStorage.setItem('ProfilePage', JSON.stringify(ProfilePage));
            localStorage.setItem('Logged', JSON.stringify(Logged));

          return (
            this.props.history.push(`/profile/${post._id}`)
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
              <h4 className="Sans6" >Login</h4>
              <div className="Sans6border mx-50" ></div>
              <p  data-aos="fade-up" className="font-ylish text-muted my-5 mx-25">Please Sign in below to access your account. Dont you have an account? <a href="/create_tutor"> Sign Up </a>now</p>
                <form className="form-signin" onSubmit={this.onSubmit}>
                  <label for="inputEmail" className="sr-only">Username</label>
                  <input type="username" value={this.state.username} onChange={this.updateUsername} id="inputEmail" className="form-control"  placeholder="Username" required autofocus/>
                  <label for="inputPassword" className="sr-only">Password</label>
                  <input type="password" value={this.state.pass} onChange={this.updatePass} id="inputPassword" className="form-control" placeholder="Password" required/>
                  <button className="btn btn-secondary mt-3" onClick={this.onSubmit}> Continue </button>
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

export default connect(mapStateToProps, { fetchPosts })(TutorSignIn);