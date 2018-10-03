import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";



class UserSignIn extends Component {

constructor(props) {
    super(props);
    this.state = { Username: "" , pass: ""};    
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePass = this.updatePass.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
onSubmit(values) {

  var Users = JSON.parse(localStorage.getItem('users'));
    return Users.map((post) => {
       if (post.username === this.state.Username) {
         if(post.password===this.state.pass)
         {  
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


render() {

    
    return (
    
    <body class="text-center">
    
      <form class="form-signin" onSubmit={this.onSubmit}>
      <h1><span class="badge badge-dark">Mentor Guide</span></h1>
      <p class="lead">Please Sign in below</p>
        <label for="inputEmail" class="sr-only">Username</label>
        <input type="username" value={this.state.username} onChange={this.updateUsername} id="inputEmail" class="form-control"  placeholder="Student Username" required autofocus/>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" value={this.state.pass} onChange={this.updatePass} id="inputPassword" class="form-control" placeholder="Password" required/>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-success btn-sm" type="submit">Sign in</button>
        <Link to="/" className="btn btn-lg  btn-danger btn-sm">Cancel</Link>
        <p class="mt-5 mb-3 text-muted">Dont you have Student/User account<a href="/usernew"> Sign up </a>Now</p>
      </form>
      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">&copy; Hamza's Developer Company</p>
        <a href="#">All Rights Reserved</a>
      </footer>
    </body>
);
}
}


function mapStateToProps(state) {
  return { posts: state.posts.mentors };
}


export default connect(mapStateToProps, { fetchPosts })(UserSignIn);


