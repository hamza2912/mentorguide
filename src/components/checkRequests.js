import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchTutorRequests } from "../actions";

import AOS from 'aos';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhone , faVoicemail } from '@fortawesome/free-solid-svg-icons';
import Header from "./Header";
import LeftNav from "./leftNav";


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
            <p className=" pb-3   lh-125 border-bottom border-gray">
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
        <Header />
        <div className="row">
        <LeftNav type='checkRequests'/>
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