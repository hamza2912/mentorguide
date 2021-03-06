import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts, deletePost } from "../actions";

import LeftNav from "./leftNav";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMapMarkerAlt, faStar, faPhoneAlt, faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';

import AOS from 'aos';
import Header from "./Header";
import RenderRatings from "./RenderRatings";
import RenderReviews from "./RenderReviews";

class ProfileShow extends Component {


  componentDidMount() {
    this.props.fetchPosts();
    AOS.init({
      duration: 1000
    })
  }



  render() {

    const { id } = this.props.match.params;
    var Profile_id = id;


    if (!this.props.posts) {
      return <div>Loading...</div>;
    }

    return _.map(this.props.posts, post => {

      var tutorId = post._id.toString();

      if (tutorId === id) {

        var ProfilePage = `/profile/${id}/inbox`;
        localStorage.setItem('ProfilePage', JSON.stringify(ProfilePage));

        var mychats = `/inbox/${id}`;
        localStorage.setItem('mychats', JSON.stringify(mychats));

        return (

          <div className="proback">

            <Header />
            <div className="row">
              <LeftNav type='profile' Profile_id={Profile_id} />
              <main role="main" className="container col-md-9 ml-sm-auto col-lg-10 px-4">
                <div className='d-flex align-items-start pt-5'>
                  <div>
                    <img className="ProImage" src="/images/ham.png" alt="Generic placeholder image" width="120" height="120" />
                  </div>
                  <div class="pl-4">
                      <h2 className="text-light" >{post.name}</h2>
                      <RenderRatings rate={post.rating} pclass='text-light' icoclass='stttt1' />
                      <div className='text-light'>@{post.username}</div>
                      <div className='text-info'> <p ><FontAwesomeIcon icon={faMapMarkerAlt} />
                      <span className='pl-1'>Karachi, Pakistan</span></p> </div>
                      <div className='text-muted'>{post.description}</div>
                  </div>
                </div>

                <div className="myBox6 mt-5 ml-3">
                  <h6 className="smhd pb-2">Profile Details</h6>
                  <p className='Details'>Qualification:<span className='pl-5 text-primary'>{post.content}</span> </p>
                  <p className='Details'>Available for:<span className='pl-5 text-primary'>{post.classes}</span> </p>
                  <p className='Details'>Core Subjects:<span className='details2 text-primary'>{post.subjects}</span> </p>
                  <p className='Details'>Tution fee:<span className='details3 text-primary'>{post.salary}</span> </p>
                </div>
                <div className="myBox7 mt-5">
                  <h6 className="smhd pb-2">Contact Details</h6>
                  <p className='Details mb-0 pb-0'><FontAwesomeIcon className='stttt8' icon={faEnvelope} />Email: </p>
                  <p className='Details text-primary mb-0 pb-3 pl-5'>{post.email}</p>
                  <p className='Details mb-0 pb-0'><FontAwesomeIcon className='stttt8' icon={faPhoneAlt} />Conatct: </p>
                  <p className='Details text-primary mb-0 pb-3 pl-5'>{post.number}</p>
                  <p className='Details mb-0 pb-0'><FontAwesomeIcon className='stttt8' icon={faAddressCard} />Address: </p>
                  <p className='Details text-primary mb-0 pb-3 pl-5'>{post.mark}</p>
                </div>
                <div className="myBox8 ml-3">
                  <h6 className="smhd pb-4">Reviews</h6>
                  <RenderReviews Profile_id={Profile_id} />
                </div>

              </main>
            </div>
          </div>
        );
      }
    }
    );
  }


}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts, deletePost })(ProfileShow);