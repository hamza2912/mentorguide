import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchTutorRequests } from "../actions";

import AOS from 'aos';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhone , faVoicemail } from '@fortawesome/free-solid-svg-icons';


class checkRequests extends Component {


  renderChats() {

    if (!this.props.posts) {
        return (
          <p className="py-3 text-muted font-ylish">No tutor requests yet</p>
        );

    }

    else {
      return _.map(this.props.posts, post => {

        return (
          <li>
            <p class=" pb-3   lh-125 border-bottom border-gray">
            <p className='Details mb-0'>{post.Messege}<span className='pl-5 text-primary date1'>14 August</span> </p>
             <p className='Details mb-0 text-muted'><FontAwesomeIcon className='sttt3' icon={ faPhone }/><span className='pl-1'>{post.Email}</span></p>
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

    var ProfilePage = JSON.parse(localStorage.getItem('ProfilePage'));


    return (

      <div class="bg-bowl">
        <header>
        <nav className="site-header fixed-top">
                          <div className="container d-flex flex-column flex-md-row justify-content-between">
                            <img  src="/style/logooo.jpg"
                            alt="Generic placeholder image" width="100" height="62.5" />
                            <a className="myNav text-dark" href="/">Home</a>
                            <a className="myNav text-dark" href="/posts">Search</a>
                            <a className="myNav text-dark" href="/lectures">Lectures</a>
                            <a className="myNav text-dark" href="/create_request">Requests</a>
                            <Link className="btn btn-primary" to="/sign">Sign In</Link>
                          </div>
           </nav>
        </header>
        <div className="row">
          <nav data-aos='fade-right' className="col-md-2 d-none d-md-block sidebar">
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
          <h2 className="Sans21 pt-8 pl-5 text-light mb-0" >Tutor Requests</h2>
          <p className="pl-5 text-info loca" >
          <span className='pl-1'>Catch recent ones</span></p>
            <div className="myBox mt-4 ml-3">
              <h6 className="smhd pb-4">Posts</h6>
              <div className="media text-muted mb-0">
                  <ul>
                    {this.renderChats()}
                  </ul>
                </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

}


function mapStateToProps(state) {

  return { posts: state.posts };

}

export default connect(mapStateToProps, { fetchTutorRequests })(checkRequests);