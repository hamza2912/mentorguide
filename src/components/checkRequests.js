import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchTutorRequests } from "../actions";

import AOS from 'aos';


class checkRequests extends Component {
  

  renderChats() {

    if (!this.props.posts) {
      return <div>Loading...</div>;
    }
    
    else {
      return _.map(this.props.posts, post => {
        
        return (
          <li>
            <p class=" pb-3   lh-125 border-bottom border-gray">
              <strong class="d-block text-light">{post.Messege}</strong>
              <span class="badge badge-danger">{post.Email}</span>
            </p>
          </li>
        );
      });
    }
    
  }

  componentDidMount() {
      
    this.props.fetchTutorRequests();
    AOS.init({
      duration : 1000
    })

  }

  render() {

    var ProfilePage = "/profile/7";
      
    return ( 
      
      <div class="tea-bac">
        <header>
          <nav className="site-header fixed-top py-1">
            <div className="container d-flex flex-column flex-md-row justify-content-between">
              <img  src="/style/tutorlogo1.png"
                    alt="Generic placeholder image" width="120" height="41" />
              <a className="py-2 d-none d-md-inline-block" href="/">Back to Home</a>
            </div>
          </nav>
        </header>
        <div className="row">
          <nav data-aos='fade-right' className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                  <span data-feather="home"></span>Tutor Requests <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href={ProfilePage}>
                  <span data-feather="home"></span>Back to Profile <span className="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="my-3 p-3 rounded shadow-sm">
              <h6 className="border-bottom border-gray pb-2 mb-0 text-light">Tutor Requests</h6>
                <div className="media text-muted mb-0">
                  <ul>
                    {this.renderChats()}
                  </ul>
                </div>
                <small className="d-block text-right mt-3">
                  <a href="">Recent list</a>
                </small>
            </div>       
          </main>
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

export default connect(mapStateToProps, { fetchTutorRequests })(checkRequests);