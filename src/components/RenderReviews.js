import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentMedical , faStar , faPhoneAlt, faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';

class RenderReviews extends Component {

    static propTypes = {
        Profile_id: PropTypes.string
    }


  render() {

    return _.map(this.props.posts, post => {

      var tutorId = post._id.toString();

      if (tutorId === this.props.Profile_id) {
        return post.comments.map((currentPost) => {
          for (var i = 0; i < currentPost.length; i++) {
            if(currentPost[i] === ':' ){
              var user = currentPost.slice(0, i-1);
              var review = currentPost.slice(i+1);

            }
          }
          return (
              <div className="dp pb-5">
                <img  className="" src="/images/dp.png" alt="Generic placeholder image" width="35" height="35" />
                 <p className="dp-name" >{user}</p>
                  <p className="dp-name2" > 14 Aug, 2016</p>
                  <p className="dp-body" >{review}</p>
              </div>
          );
      });
      }
    });

  }


}


function mapStateToProps(state){
    return { posts: state.posts };
  }

  export default connect(mapStateToProps, { fetchPosts })(RenderReviews);