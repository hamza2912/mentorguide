import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts, deletePost } from "../actions";

import AOS from 'aos';


class Inbox extends Component {

  renderChats() {

    const { id } = this.props.match.params;
    return _.map(this.props.posts, post => {

      var tutorId = post.userId.toString();

      if (tutorId === id) {
        return post.messeges.map((currentPost) => {
          return (
            <li>
              <div class="my-3 p-3 bg-white rounded shadow-sm">
              <p class="pb-3 lh-125">
                <strong className="d-block text-gray-dark">{currentPost}</strong>
              </p>
              </div>
            </li>
          );
        });
      }
    });    

  }
  
  Logout() {
    var Logged = false;
    localStorage.setItem('Logged', JSON.stringify(Logged));
    this.props.history.push("");
  }

  componentDidMount() {
    
    this.props.fetchPosts();
    AOS.init({
      duration : 1000
    })

  }

  render() {

    var ProfilePage = "/profile/7";
    
    const { id } = this.props.match.params;
      
    if (!this.props.posts) {
        return <div>Loading...</div>;
    }

    return _.map(this.props.posts, post => {
    
    var tutorId = post.userId.toString();

    if (tutorId === id) {

      var messeges = post.messeges;

      if (messeges === null) {
            
        return <div>No messeges...</div>;
      }

      else{      
            
      return (

      <div class="dark-color">

        <header>
          <nav className="site-header fixed-top py-1">
            <div className="container d-flex flex-column flex-md-row justify-content-between">
              <img  className="navbar-brand" src="./style/tutorlogo1.png"
                    alt="Generic placeholder image" width="120" height="50" />
              <a className="py-2 d-none d-md-inline-block" href="/">Home</a>
            </div>
          </nav>
        </header>

        <div class="row">
          <nav data-aos='fade-right' class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    <span data-feather="home"></span>Messeges <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href={ProfilePage}>
                  <span data-feather="home"></span>Back to Profile <span class="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div class="my-3 p-3 dark-color rounded shadow-sm">
              <h6 class="border-bottom border-gray pb-2 mb-0 text-light">Messeges</h6>
              <div class="media text-dark mb-0">
                <ul>
                  {this.renderChats()}
                </ul>
              </div>
              <small class="d-block text-right mt-3">
                <a href="">Recent list</a>
              </small>
            </div>       
          </main>
          <footer class="my-5 pt-5 text-muted text-center text-small">
            <p class="text-center text-light">&copy; Pixiv Studios, Inc. &middot;</p>
              <a href="#">All Rights Reserved</a>
          </footer>
        </div>      
      </div>                  
      );
      }}   
    }); 
  }

}

function mapStateToProps(state){
  
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts, deletePost })(Inbox);