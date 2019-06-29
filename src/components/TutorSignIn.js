import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";
import AOS from 'aos';



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
      duration : 2000
    })
    
  }
  
  onSubmit(values) {

    return _.map(this.props.posts, post => {
       if (post.username === this.state.Username) {
         if(post.password===this.state.pass)
         {  
            var Logged = true;
            var ProfilePage = `/profile/${post.userId}`;
            localStorage.setItem('ProfilePage', JSON.stringify(ProfilePage));
            localStorage.setItem('Logged', JSON.stringify(Logged));
            
          return (
            this.props.history.push(`/`)
          );
        }
      }   
    });
  }

  render() {
    
    return (
    
      <div className="text-center dark-color">
        <div  className = "center-place">
          <form className="form-signin" onSubmit={this.onSubmit}>
            <img  data-aos="fade-right"data-aos-anchor="#example-anchor" data-aos-offset="500"data-aos-duration="500" src="./style/tutorlogo1.png" alt="Generic placeholder image" width="250" height="80" />
            <p className="font-cursive text-light">Please Sign in below</p>
            <label for="inputEmail" className="sr-only">Username</label>
            <input type="username" value={this.state.username} onChange={this.updateUsername} id="inputEmail" className="form-control"  placeholder="Username" required autofocus/>
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" value={this.state.pass} onChange={this.updatePass} id="inputPassword" className="form-control" placeholder="Password" required/>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"/> Remember me
              </label>
            </div>
            <button className="btn btn-lg btn-success btn-sm" type="submit">Sign in</button>
            <Link to="/sign" className="btn btn-lg  btn-danger btn-sm">Cancel</Link>
            <p className="mt-5 mb-3 text-muted">Dont you have mentor profile<a href="/posts/new"> Sign up </a>Now</p>
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

export default connect(mapStateToProps, { fetchPosts })(TutorSignIn);