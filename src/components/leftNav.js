import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts, deletePost } from "../actions";

import { addComments  } from "../actions";

import { addMesseges  } from "../actions";

import { addRatings  } from "../actions";

import ReactModal from "react-modal";
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentMedical , faStar , faPhoneAlt, faEnvelope, faAddressCard, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

 class LeftNav extends Component {
    static propTypes = {
        type: PropTypes.string,
        Profile_id: PropTypes.string
    }



    componentDidMount() {
        AOS.init({
            duration : 1000
          })
          
    }

    constructor(props) {
        super(props);
        this.state = {Messege: "", Messege2: "", Rating: "", Area: "" , check: 1 , show1: false, show2: false,show3: false,show4: false};
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenModalother = this.handleOpenModalother.bind(this);
        this.handleCloseModalother = this.handleCloseModalother.bind(this);
         
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmit3 = this.onSubmit3.bind(this);
        this.onSubmit2 = this.onSubmit2.bind(this);
        this.onSubmit4 = this.onSubmit4.bind(this);
        this.onSubmit5 = this.onSubmit5.bind(this);
        this.handleOpenModal3 = this.handleOpenModal3.bind(this);
        this.handleCloseModal3 = this.handleCloseModal3.bind(this);
        this.handleOpenModal2 = this.handleOpenModal2.bind(this);
        this.handleCloseModal2 = this.handleCloseModal2.bind(this);
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

      handleOpenModal3 () {
        if(this.state.Messege !== ""){
            this.setState({ show3: true });
        }
      }
    
      handleCloseModal3 () {
        this.setState({ show3: false });
      }
    
      handleOpenModal2 () {
        if(this.state.Messege !== ""){
            this.setState({ show4: true });
        }
      }
    
      handleCloseModal2 () {
        this.setState({ show4: false });
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
    
      handleChange4(event) {

        this.setState({Area: event.target.value});
        
    }

    

      onDeleteClick() {

        const { id } = this.props.Profile_id;
    
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
        const { id } = this.props.Profile_id;
    
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


      onSubmit(){

        const { id } = this.props.Profile_id;
    
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
    
        this.setState({ show3: true });
    
      }
    
      onSubmit4(){
    
        this.setState({ show4: true });
    
      }
    
      onSubmit3(){
    
        const { id } = this.props.Profile_id;
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
    
        const { id } = this.props.Profile_id;
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


      
    


    render() {

        var ProfilePage = JSON.parse(localStorage.getItem('ProfilePage'));
        var mychats = JSON.parse(localStorage.getItem('mychats'));
        localStorage.setItem('Area', JSON.stringify(this.state.Area))


        if(this.props.type ==='search'){
        return (
            
            <nav  data-aos='fade-right' className="col-md-2 d-none d-md-block sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                  <span data-feather="home"></span>Tutors' Gallery <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <form className="form-control-dark my-2 my-lg-0 mrg ml-2 pt-2">
                  <label for="thissearch" className="sr-only"><FontAwesomeIcon icon={ faSearch }/>
                  <span className='pl-1'>Hii</span></label>
                    <select  className="form-search" id="thissearch" name="thissearch" onChange = {this.handleChange4}>
                      <option>Find your area</option> <option>Baldia</option> <option>Buffer-Zone</option> <option>Defence</option>
                      <option>Fedral-B-Area</option><option>Gadap</option> <option>Gulberg</option> <option>Gulshan</option>
                      <option>Gulshan-e-Meymar</option><option>Jamsh1ed Town</option>
                      <option>Johar</option> <option>Korangi</option> <option>Landhi</option> <option>Liaquatabad</option>
                      <option>Lyari</option> <option>Malir</option> <option>New Karchi</option> <option>Nazimabad</option>
                      <option>Orangi Town</option><option>Saddar</option><option>Shah Faisal Town</option>
                    </select>
                  </form>
                </li>
              </ul>
            </div>
          </nav>
        );}
        if(this.props.type ==='checkRequests'){
            return (
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
            );}
            if(this.props.type ==='inbox'){
                return (
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
                );}
            if(this.props.type ==='profile'){
                return (
                    <nav data-aos='fade-right' className="col-md-2 d-none d-md-block sidebar">
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
                );}

                if(this.props.type ==='posts_show'){
                    return (
                        <nav data-aos='fade-right' className="col-md-2 d-none d-md-block sidebar">
                         <ReactModal
                  isOpen={this.state.show3}
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
                  <button className="btn btn-dark" onClick= {this.handleCloseModal3} >Cancel</button>
              </ReactModal>

              <ReactModal
                  isOpen={this.state.show4}
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
                    );}
    }
}

function mapStateToProps(state){
    return { posts: state.posts };
  }
  
  export default connect(mapStateToProps, { deletePost, fetchPosts , addComments , addMesseges , addRatings })(LeftNav);