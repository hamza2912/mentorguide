import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts, deletePost } from "../actions";

import AOS from 'aos';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Header from "./Header";


class Inbox extends Component {

  renderChats() {

    const { id } = this.props.match.params;
    return _.map(this.props.posts, post => {

      var tutorId = post._id.toString();

      if (tutorId === id) {
        return post.messeges.map((currentPost) => {
          for (var i = 0; i < currentPost.length; i++) {
            if (currentPost[i] === ':') {
              var user = currentPost.slice(0, i - 1);
              var messege = currentPost.slice(i + 1);

            }
          }
          return (
            <li>
              <p className="pb-3 lh-125 border-bottom border-gray">
                <p className='Details mb-0'>{user}<span className='pl-5 text-primary date1'>14 August</span> </p>
                <p className='Details mb-0 text-muted'><FontAwesomeIcon className='sttt3' icon={faEnvelope} /><span className='pl-1'>{messege}</span></p>
              </p>
            </li>
          );
        });
      }
      else {
        return (
          <p className="py-3 text-muted font-ylish">You dont have any messeges</p>
        );
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
      duration: 1000
    })

  }

  render() {

    var ProfilePage = JSON.parse(localStorage.getItem('ProfilePage'));

    const { id } = this.props.match.params;

    if (!this.props.posts) {
      return <div>Loading...</div>;
    }

    return _.map(this.props.posts, post => {

      var tutorId = post._id.toString();

      if (tutorId === id) {

        var messeges = post.messeges;

        if (messeges === null) {

          return <div>No messeges...</div>;
        }

        else {

          return (

            <div className="bg-bowl">
              <Header />
              <div className="row">
                <nav data-aos='fade-right' className="col-md-2 d-none d-md-block sidebar">
                  <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">
                          <span data-feather="home"></span>Messeges <span className="sr-only">(current)</span>
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
                  <h2 className="Sans21 pt-8 pl-5 text-light mb-0" >Inbox</h2>
                  <p className="pl-5 text-info loca" >
                    <span>Catch recent ones</span></p>
                  <div className="myBox mt-4 ml-3">
                    <h6 className="smhd pb-4">Messeges</h6>
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
    });
  }

}

function mapStateToProps(state) {

  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts, deletePost })(Inbox);