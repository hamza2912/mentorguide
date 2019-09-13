import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts, deletePost } from "../actions";

import ReactModal from "react-modal";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCommentMedical , faStar , faPhoneAlt, faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';

import AOS from 'aos';
import Header from "./Header";

class ProfileShow extends Component {

  constructor(props) {
    super(props);
    this.state = {show1: false, show2: false};
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModalother = this.handleOpenModalother.bind(this);
    this.handleCloseModalother = this.handleCloseModalother.bind(this);
    this.renderRatings = this.renderRatings.bind(this);
  }

  handleOpenModal () {
    this.setState({ show1: true });
  }

  handleCloseModal () {
    this.setState({ show1: false });
  }

  handleOpenModalother () {
    this.setState({ show2: true });
  }

  handleCloseModalother () {
    this.setState({ show2: false });
  }

  componentDidMount() {
    this.props.fetchPosts();
    AOS.init({
      duration : 1000
    })
  }

  componentDidUpdate() {
    this.renderChats();
  }

  renderRatings(rate, pclass, icoclass){

    if (rate > 1 && rate <= 2) {
      return (
        <p className={pclass}><span className='pr-1'>{rate}</span>
                      <FontAwesomeIcon className={icoclass} icon={ faStar }/>
                      <FontAwesomeIcon className={icoclass} icon={ faStar }/>
                      </p>
      );
    }
    else if (rate > 2 && rate <= 3) {
      return (
        <p className={pclass}><span className='pr-1'>{rate}</span>
                      <FontAwesomeIcon className={icoclass} icon={ faStar }/>
                      <FontAwesomeIcon className={icoclass} icon={ faStar }/>
                      <FontAwesomeIcon className={icoclass} icon={ faStar }/>
                      </p>
      );
    }
    else if (rate > 3 && rate <= 4 && rate > 4) {
      return (
        <p className={pclass}><span className='pr-1'>{rate}</span>
                      <FontAwesomeIcon className={icoclass} icon={ faStar }/>
                      <FontAwesomeIcon className={icoclass} icon={ faStar }/>
                      <FontAwesomeIcon className={icoclass} icon={ faStar }/>
                      <FontAwesomeIcon className={icoclass} icon={ faStar }/>
                      </p>
      );
    }
    else {
        return (
          <p className={pclass}><span className='pr-1'>{rate}</span>
          <FontAwesomeIcon className={icoclass} icon={ faStar }/>
          </p>
        );
    }


  }

  onDeleteClick() {

    const { id } = this.props.match.params;

    return _.map(this.props.posts, post => {
        var tutorId = post.userId.toString();
        if (tutorId === id) {
          this.props.deletePost(id);
          var Logged = false;
          localStorage.setItem('UserLogin', JSON.stringify(Logged));
          this.props.history.push("/");
        }
    });
  }

  onDeleteClick1() {
    const { id } = this.props.match.params;

    return _.map(this.props.posts, post => {
      var tutorId = post.userId.toString();
      if (tutorId === id) {
        this.props.deletePost(id);
        var Logged = false;
        localStorage.setItem('UserLogin', JSON.stringify(Logged));
        this.props.history.push("/posts/new");
      }
    });
  }

  Logout() {

    var Logged = false;
    var UserLogin = false;
    localStorage.setItem('UserLogin', JSON.stringify(UserLogin));
    this.props.history.push("");

  }

  renderChats() {

    const { id } = this.props.match.params;

    return _.map(this.props.posts, post => {

      var tutorId = post._id.toString();

      if (tutorId === id) {
        return post.comments.map((currentPost) => {
          for (var i = 0; i < currentPost.length; i++) {
            if(currentPost[i] === ':' ){
              var user = currentPost.slice(0, i-1);
              var review = currentPost.slice(i+1);

            }
          }
          return (
              <div className="dp pb-5">
                <img  className="" src="/style/dp.png" alt="Generic placeholder image" width="35" height="35" />
                 <p className="dp-name" >{user}</p>
                  <p className="dp-name2" > 14 Aug, 2016</p>
                  <p className="dp-body" >{review}</p>
              </div>
          );
      });
      }
    });
  }


render() {

    //const { post } = this.props;
    const { id } = this.props.match.params;
    console.log(id);

    if (!this.props.posts) {
      return <div>Loading...</div>;
    }

    return _.map(this.props.posts, post => {

        var tutorId = post._id.toString();

        if (tutorId === id) {

          var ProfilePage = `/profile/${id}/inbox`;
          localStorage.setItem('ProfilePage', JSON.stringify(ProfilePage));
          var mychats = `/inbox/${id}`;

          return (

            <div className="proback">

              <ReactModal
                  isOpen={this.state.show1}
                  contentLabel="Minimal Modal Example"
                  style={{
                      content : {
                        top                   : '50%',
                        left                  : '50%',
                        right                 : 'auto',
                        bottom                : 'auto',
                        marginRight           : '-50%',
                      transform             : 'translate(-50%, -50%)'
                    }
                  }} >
                  <p className="lead">You are about to delete your mentor profile!</p>
                  <button className="btn btn-dark" onClick={this.onDeleteClick.bind(this)} >
                    Continue
                  </button>
                  <button className="btn btn-info" onClick={this.handleCloseModal}>Cancel</button>
              </ReactModal>
              <ReactModal
                  isOpen={this.state.show2}
                  contentLabel="Minimal Modal Example2"
                  style={{
                    content : {
                        top                   : '50%',
                        left                  : '50%',
                        right                 : 'auto',
                      bottom                : 'auto',
                        marginRight           : '-50%',
                        transform             : 'translate(-50%, -50%)'
                      }
                  }} >
                  <p className="lead">You are about to delete your this mentor profile and re create it with new details!</p>
                  <button className="btn btn-dark" onClick={this.onDeleteClick1.bind(this)} >
                    Continue
                  </button>
                  <button className="btn btn-info" onClick={this.handleCloseModalother}>Cancel</button>
              </ReactModal>

              <Header />
              <div className="row">
                <nav data-aos='fade-right' className="col-md-2 d-none d-md-block sidebar">
                  <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">
                        <span data-feather="home"></span>Profile <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href={mychats} >
                        <span data-feather="file"></span>
                          Messeges
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/checkrequests">
                        <span data-feather="shopping-cart"></span>
                          Tutor Requests
                        </a>
                      </li>
                    </ul>
                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                      <span>Account</span>
                      <a className="d-flex align-items-center text-muted" href="#">
                      <span data-feather="plus-circle"></span>
                      </a>
                    </h6>
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item">
                        <button className="nav-link btnnn" onClick={this.handleOpenModal}>
                        <span data-feather="file-text"></span>
                            Delete Account
                        </button>
                      </li>
                      <li className="nav-item">
                        <button className="nav-link btnnn" onClick={this.handleOpenModalother}>
                        <span data-feather="file-text"></span>
                          Recreate Account
                        </button>
                      </li>
                      <li className="nav-item">
                        <button className="nav-link btnnn " onClick={this.Logout.bind(this)}>
                          <span data-feather="file-text"></span>
                            Sign Out
                        </button>
                      </li>
                    </ul>
                  </div>
                </nav>
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div>
                <img  className="ProImage" src="/style/ham.png" alt="Generic placeholder image" width="120" height="120" />
                <h2 className="Pro-name text-light" >{post.name}</h2>
                {this.renderRatings(post.rating,'Pro-body2 text-light','stttt1')}
                <p className='Pro-body text-light pt-4'>@{post.username}</p>
                <p className='Pro-location text-info pt-4'>Karachi,Pakistan </p>
                <p className='Pro-des text-muted pt-5'>{post.description}</p>
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
                <p className='Details mb-0 pb-0'><FontAwesomeIcon className='stttt8' icon={ faEnvelope }/>Email: </p>
                      <p className='Details text-primary mb-0 pb-3 pl-5'>{post.email}</p>
                      <p className='Details mb-0 pb-0'><FontAwesomeIcon className='stttt8' icon={ faPhoneAlt }/>Conatct: </p>
                      <p className='Details text-primary mb-0 pb-3 pl-5'>{post.number}</p>
                      <p className='Details mb-0 pb-0'><FontAwesomeIcon className='stttt8' icon={ faAddressCard }/>Address: </p>
                      <p className='Details text-primary mb-0 pb-3 pl-5'>{post.mark}</p>
                </div>
                <div className="myBox8 ml-3">
                <h6 className="smhd pb-4">Reviews</h6>
                  {this.renderChats()}
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

function mapStateToProps(state){
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts, deletePost })(ProfileShow);