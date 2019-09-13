import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts  } from "../actions";

import { addComments  } from "../actions";

import { addMesseges  } from "../actions";

import { addRatings  } from "../actions";

import ReactModal from "react-modal";

import AOS from 'aos';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCommentMedical , faStar , faPhoneAlt, faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import Header from "./Header";


class PostsShow extends Component {

  constructor(props) {
    super(props);
    this.state = { Messege: "", Messege2: "", Rating: "",show1: false,show2: false}
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmit3 = this.onSubmit3.bind(this);
    this.onSubmit2 = this.onSubmit2.bind(this);
    this.onSubmit4 = this.onSubmit4.bind(this);
    this.onSubmit5 = this.onSubmit5.bind(this);
    this.renderRatings = this.renderRatings.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal2 = this.handleOpenModal2.bind(this);
    this.handleCloseModal2 = this.handleCloseModal2.bind(this);


  }

  handleOpenModal () {
    if(this.state.Messege !== ""){
        this.setState({ show1: true });
    }
  }

  handleCloseModal () {
    this.setState({ show1: false });
  }

  handleOpenModal2 () {
    if(this.state.Messege !== ""){
        this.setState({ show2: true });
    }
  }

  handleCloseModal2 () {
    this.setState({ show2: false });
  }

  handleChange(event) {

    this.setState({Messege: event.target.value});

   }

  handleChange2(event) {

    this.setState({Messege2: event.target.value});


  }

  handleChange3(event) {

    this.setState({Rating: event.target.value});

  }

  componentDidMount() {

    this.props.fetchPosts();
    AOS.init({
      duration : 1000
    })

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

  onSubmit(){

    const { id } = this.props.match.params;

    var userName = JSON.parse(localStorage.getItem('UserName'));

    if(this.state.Messege!== ""){

      _.map(this.props.posts, post => {

        var tutorId = post._id.toString();

        if (tutorId === id) {
            var reviews = post.comments;
            reviews.push(`${userName}: ${this.state.Messege}`);
            this.props.addComments(tutorId,reviews);
        }
    });
  }
  window.location.reload();
  }

  onSubmit2(){

    this.setState({ show1: true });

  }

  onSubmit4(){

    this.setState({ show2: true });

  }

  onSubmit3(){

    const { id } = this.props.match.params;
    if(this.state.Messege2!== ""){

    var userName = JSON.parse(localStorage.getItem('UserName'));
    return _.map(this.props.posts, post => {

          var tutorId = post._id.toString();

          if (tutorId === id) {
              var messeges = post.messeges;
              messeges.push(`${userName}: ${this.state.Messege2}`)
              this.props.addMesseges(tutorId,messeges);
              window.location.reload();
          }
      });
      }
  }

  onSubmit5(){

    const { id } = this.props.match.params;
    if(this.state.Rating!== ""){

    return _.map(this.props.posts, post => {

          var tutorId = post._id.toString();

          if (tutorId === id) {
              var rating = post.rating;
              rating = (rating+ Number(this.state.Rating))/2;
              var rateobject = {};
              rateobject.rating = rating
              this.props.addRatings(tutorId,rateobject);
              window.location.reload();
          }
      });

      }
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

  render() {

      const { id } = this.props.match.params;

      if (!this.props.posts) {
        return <div>Loading...</div>;
      }

      return _.map(this.props.posts, post => {

        var tutorId = post._id.toString();

        if (tutorId === id) {
          return (

            <div className="proback">

        <ReactModal
                  isOpen={this.state.show1}
                  contentLabel="Minimal Modal Example3"
                  style={{
                      content : {
                        top                   : '50%',
                        left                  : '50%',
                        right                 : 'auto',
                        bottom                : 'auto',
                        marginRight           : '-50%',
                        width                 : '50%',
                        transform             : 'translate(-50%, -50%)'
                      }
                  }} >
                  <div className="Modal">
                    <p for="message-text" className="col-form-label text-muted">Please notify the tutor about
                    necessary details for example your className, location and tution fee. Dont forget to mention
                    your email or conatct number so that tutor can contact you back!</p>
                    <label for="message-text" className="col-form-label text-muted">Your Message:</label>
                    <textarea className="form-control" id="message-text"  onChange = {this.handleChange2}></textarea>
                  </div>
                  <button className="btn btn-info" onClick= {this.onSubmit3} >Send</button>
                  <button className="btn btn-dark" onClick= {this.handleCloseModal} >Cancel</button>
              </ReactModal>

              <ReactModal
                  isOpen={this.state.show2}
                  contentLabel="Minimal Modal Example3"
                  style={{
                      content : {
                        top                   : '50%',
                        left                  : '50%',
                        right                 : 'auto',
                        bottom                : 'auto',
                        marginRight           : '-50%',
                        width                 : '50%',
                        transform             : 'translate(-50%, -50%)'
                      }
                  }} >
                  <div className="Modal">
                  <form class="rating">
                  <label>
                    <input type="radio" name="stars" value="1" onChange = {this.handleChange3} />
                    <span class="icon">★</span>
                  </label>
                  <label>
                    <input type="radio" name="stars" value="2" onChange = {this.handleChange3} />
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                  </label>
                  <label>
                    <input type="radio" name="stars" value="3" onChange = {this.handleChange3} />
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                  </label>
                  <label>
                    <input type="radio" name="stars" value="4" onChange = {this.handleChange3} />
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                  </label>
                  <label>
                    <input type="radio" name="stars" value="5" onChange = {this.handleChange3} />
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                  </label>
                </form>
                  </div>
                  <button className="btn btn-info" onClick= {this.onSubmit5} >Rate</button>
                  <button className="btn btn-dark" onClick= {this.handleCloseModal2} >Cancel</button>
              </ReactModal>

                    <Header />
                    <div className="row">
                      <nav data-aos='fade-right' className="col-md-2 d-none d-md-block sidebar">
                        <div className="sidebar-sticky">
                        <ul className="nav flex-column">
                                  <li className="nav-item">
                                    <a className="nav-link active" href="#">
                                    <span data-feather="home"></span>Tutor Profile <span className="sr-only">(current)</span>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="/posts">
                                    <span data-feather="file"></span>
                                      Back to list
                                    </a>
                                  </li>
                                </ul>
                                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Contact This Tutor</span>
                                </h6>
                                  <ul className="nav flex-column mb-2">
                                    <li className="nav-item">
                                      <button className="nav-link btnnn" onClick= {this.onSubmit2}>
                                        <span data-feather="file-text"></span>
                                          Send Messege
                                      </button>
                                    </li>
                                  </ul>
                                  <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                  <span>Rate This Tutor</span>
                                  </h6>
                                  <ul className="nav flex-column mb-2">
                                    <li className="nav-item">
                                      <button className="nav-link btnnn" onClick= {this.onSubmit4}>
                                        <span data-feather="file-text"></span>
                                          Rate Now
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
                      <p className='Pro-des text-muted pt-5'>I am an Electrical Engineer from Habib university. We take teaching as my passion and more interested. </p>
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
                      <h6 className="smhd pb-2">Reviews</h6>
                      <div className='pb-3'>
                      <textarea className="form-review" rows="1" placeholder="Leave a comment.."  onChange = {this.handleChange}></textarea>
                      <button className="myLink2" onClick={this.onSubmit}>
                      <FontAwesomeIcon className='stttt2' icon={ faCommentMedical }/>
                      </button>
                      </div>
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

export default connect(mapStateToProps, { fetchPosts , addComments , addMesseges , addRatings })(PostsShow);