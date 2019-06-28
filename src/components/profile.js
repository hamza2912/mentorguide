import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts, deletePost } from "../actions";

import ReactModal from "react-modal";

import AOS from 'aos';

class ProfileShow extends Component {

  constructor(props) {
    super(props);
    this.state = {show1: false, show2: false};
  
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModalother = this.handleOpenModalother.bind(this);
    this.handleCloseModalother = this.handleCloseModalother.bind(this);
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

      var tutorId = post.userId.toString();

      if (tutorId === id) {
    
      return post.comments.map((currentPost) => {
        return (
          <li>
            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <p className="pb-3 lh-125">
              <strong className="d-block text-light">{currentPost}</strong>
            </p>
            </div>
          </li>
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
        
        var tutorId = post.userId.toString();
      
        if (tutorId === id) {

          var ProfilePage = `/inbox/${id}/inbox`;
          
          return (                
            
            <div className="container-fluid tea-bac">
              
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

              <header>
                <nav className="site-header fixed-top py-1">
                  <div className="container d-flex flex-column flex-md-row justify-content-between">
                    <img  src="/style/tutorlogo1.png" alt="Generic placeholder image" width="120" height="41" />
                    <a className="py-2 d-none d-md-inline-block" href="/">Back to Home</a>
                  </div>
                </nav>
              </header>
              <div className="row">
                <nav data-aos='fade-right' className="col-md-2 d-none d-md-block bg-light sidebar">
                  <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">
                        <span data-feather="home"></span>Profile <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href={ProfilePage} >
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
                  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="display-5 text-light ">Hi! {post.name}</h1>
                  </div>
                  <h6 className=" text-primary">@{post.username} </h6>
                    <h6 className="text-warning"><img  src="/style/qua.png" width="20" height="20" />
                    Qualification: <span className="text-light" > {post.content}</span></h6>
                    <h6 className="text-warning"><img  src="/style/ava.png" width="20" height="20" />
                     Available for: <span className="text-light"> {post.classes}</span></h6>
                    <h6 className="text-warning"><img  src="/style/credit.png" width="20" height="20" />
                     Tution Fee: <span className="text-light"> {post.salary}</span></h6>
                    <h6 className="text-warning"><img  src="/style/loc.png" width="20" height="20" />
                     Location: <span className="text-light"> {post.location}</span></h6>
                    <h6 className="text-warning"><img  src="/style/cont.png" width="20" height="20" />
                     Contact Details: <span className="text-light"> {post.number}</span></h6>
                    <h6 className="text-warning"><img  src="/style/address.png" width="20" height="20" />
                     Address: <span className="text-light"> {post.mark}</span></h6>
                    <h5 className="border-bottom text-light">Reviews</h5>
                    <div className="media text-warning pt-3">
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

export default connect(mapStateToProps, { fetchPosts, deletePost })(ProfileShow);