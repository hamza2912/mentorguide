import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts  } from "../actions";

import { addComments  } from "../actions";

import { addMesseges  } from "../actions";

import ReactModal from "react-modal";

import AOS from 'aos';


class PostsShow extends Component {

  constructor(props) {
    super(props);
    this.state = { Messege: "", Messege2: "",show1: false}
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmit2 = this.onSubmit2.bind(this);
    this.onSubmit3 = this.onSubmit3.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    
  
  }

  handleOpenModal () {
    if(this.state.Messege !== ""){
        this.setState({ show1: true });
    }
  }
  
  handleCloseModal () {
    this.setState({ show1: false });
  }

  handleChange(event) {
  
    this.setState({Messege: event.target.value});
    
   }

  handleChange2(event) {
  
    this.setState({Messege2: event.target.value});

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

      var tutorId = post.userId.toString();

      if (tutorId === id) {
        return post.comments.map((currentPost) => {
          return (
            <li>
              <div className="my-3 p-3 bg-white rounded shadow-sm">
              <p className="pb-3 lh-125">
                <strong className="d-block text-gray-dark">{currentPost}</strong>
              </p>
              </div>
            </li>
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
  
        var tutorId = post.userId.toString();

        if (tutorId === id) {
            var reviews = post.comments;
            reviews.push(`${userName}: ${this.state.Messege}`);
            this.props.addComments(id,reviews);
        }
    }); 
    this.props.history.push(`/posts/${id}`);
  }
  }

  onSubmit2(){

    this.setState({ show1: true });
    
  }

  onSubmit3(){

    const { id } = this.props.match.params;
    if(this.state.Messege2!== ""){
    
    var userName = JSON.parse(localStorage.getItem('UserName'));
    return _.map(this.props.posts, post => {

          var tutorId = post.userId.toString();

          if (tutorId === id) {
              var messeges = post.messeges;
              messeges.push(`${userName}: ${this.state.Messege2}`)
              this.props.addMesseges(id,messeges);
          }
      }); 
      this.setState({ show1: false });
      }
  }

  render() {

      const { id } = this.props.match.params;
      
      if (!this.props.posts) {
        return <div>Loading...</div>;
      }

      return _.map(this.props.posts, post => {
    
        var tutorId = post.userId.toString();

        if (tutorId === id) {
          return (

            <div className="container-fluid dark-color">

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
                  <div className="form-group">
                    <p for="message-text" className="col-form-label text-muted">Please notify the tutor about
                    necessary details for example your className, location and tution fee. Dont forget to mention
                    your email or conatct number so that tutor can contact you back!</p>
                    <label for="message-text" className="col-form-label text-muted">Your Message:</label>
                    <textarea className="form-control" id="message-text"  onChange = {this.handleChange2}></textarea>
                  </div>
                  <button className="btn btn-info" onClick= {this.onSubmit3} >Send</button>
                  <button className="btn btn-dark" onClick= {this.handleCloseModal} >Cancel</button>
              </ReactModal>
                
              <header>
                <nav className="site-header fixed-top py-1">
                  <div className="container d-flex flex-column flex-md-row justify-content-between">
                    <img  className="navbar-brand" src="./style/tutorlogo1.png"
                        alt="Generic placeholder image" width="120" height="50" />
                    <a className="py-2 d-none d-md-inline-block" href="/">Home</a>
                  </div>
                </nav>
              </header>
              <div className="row">
                <nav data-aos='fade-right' className="col-md-2 d-none d-md-block bg-light sidebar">
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
                    <a className="d-flex align-items-center text-muted" href="#">
                    <span data-feather="plus-circle"></span>
                    </a>
                    </h6>
                      <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                          <button className="nav-link btnnn" onClick= {this.onSubmit2}>
                            <span data-feather="file-text"></span>
                              Send Messege
                          </button>
                        </li>                           
                      </ul>
                    </div>
                  </nav>
                  <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                      <h1 className="display-5 text-light ">Hi! {post.name}</h1>
                    </div>
                    <h6 className=" text-primary">@{post.username} </h6>
                    <h6 className="text-muted"> Qualification: <span className="text-light" > {post.content}</span></h6>
                    <h6 className="text-muted"> Available for: <span className="text-light"> {post.classes}</span></h6>
                    <h6 className="text-muted"> Tution Fee: <span className="text-light"> {post.salary}</span></h6>
                    <h6 className="text-muted"> Location: <span className="text-light"> {post.location}</span></h6>
                    <h6 className="text-muted"> Contact Number: <span className="text-light"> {post.number}</span></h6>
                    <h6 className="text-muted"> Address: <span className="text-light"> {post.mark}</span></h6>
                    <h6 className="border-bottom text-light">Reviews</h6>
                    <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Leave a comment.." 
                        onChange = {this.handleChange}>
                    </textarea>
                    <button className="btn btn-outline-info "  onClick={this.onSubmit}>
                      Submit
                    </button>
                    <div className="media text-dark pt-3">
                      <ul>
                        {this.renderChats()}
                      </ul>
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

export default connect(mapStateToProps, { fetchPosts , addComments , addMesseges })(PostsShow);