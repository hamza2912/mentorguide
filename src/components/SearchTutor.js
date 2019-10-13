import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";
import LeftNav from "./leftNav";
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar, faSearch, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Header from "./Header";
import RenderRatings from "./RenderRatings";

class SearchTutor extends Component {
  constructor(props) {
    super(props);
    this.state = { Area: "", check: 1 };
    this.handleChange = this.handleChange.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
    AOS.init({
      duration: 1000
    })
  }

  renderPosts() {
    if (this.state.Area !== "") {
      return _.map(this.props.posts, post => {
        if (post.location === this.state.Area) {
          var ProfilePage = `/posts/${post._id}`;
          return (
            <div className="dp pb-5">
              <img src="/images/dp.png" alt="Generic placeholder image" width="35" height="35" />
              <p className="dp-name" >{post.name}</p>
              <RenderRatings rate={post.rating} pclass='dp-name2' icoclass='stttt' />
              <a className="dp-nameS" href={ProfilePage} >Visit Profile
                      <FontAwesomeIcon className='stttt3' icon={faArrowRight} />
              </a>
              <p className="dp-body" >{post.description}</p>
            </div>
          );
        }
      });
    }
    return (<p className="py-3 text-muted font-ylish">Select your area above to get list of tutors in your area</p>);
  }

  handleChange(event) {
    var area = JSON.parse(localStorage.getItem('Area'));
  }

  updateState = (newState) => {
    this.setState({ Area: newState });
  }

  render() {
    return (
      <div className="bg-bowl">
        <Header />
        <div className="row">
          <LeftNav
            type='search'
            updateState={this.updateState}
          />
          <main role="main" className="container col-md-9 ml-sm-auto col-lg-10 px-4">
            <h2 className="Sans21 pt-8 pl-5 text-light mb-0" >Search your favorite Tutors</h2>
            <p className="pl-5 text-info loca">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span className='pl-1'>Karachi, Pakistan</span></p>
            <div className="myBox mt-4 ml-3">
              <h6 className="smhd pb-4">Tutors</h6>
              {this.renderPosts()}
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

export default connect(mapStateToProps, { fetchPosts })(SearchTutor);