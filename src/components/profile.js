import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts, deletePost } from "../actions";

import ReactModal from "react-modal";

//ReactModal.setAppElement('container');

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
    //this.props.fetchPost(id);
    this.props.fetchPosts();
  }
  
    
onDeleteClick() {
    const { id } = this.props.match.params;
    var mentors = JSON.parse(localStorage.getItem('mentors'));
    var posts = [];
    posts = mentors;
    posts.map((post) => {
      if (post.id === id) {
       var val = posts.indexOf(post);
       delete posts[val];
       function filterer(arr) {return arr > 0|| isNaN(arr) === true;}
       posts = posts.filter(filterer);
       localStorage.setItem('mentors', JSON.stringify(posts));
       this.props.history.push("/");
      }
    });
  }

  onDeleteClick1() {
    const { id } = this.props.match.params;
    var mentors = JSON.parse(localStorage.getItem('mentors'));
    var posts = [];
    posts = mentors;
    posts.map((post) => {
      if (post.id === id) {
       var val = posts.indexOf(post);
       delete posts[val];
       function filterer(arr) {return arr > 0|| isNaN(arr) === true;}
       posts = posts.filter(filterer);
       localStorage.setItem('mentors', JSON.stringify(posts));
       this.props.history.push("/posts/new");
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

    return this.props.posts.map((post) => {
  
    if (post.id === id) {
      return (
      <body class="bg-light">

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
          <p class="lead">You are about to delete your mentor profile!</p>
          <button className="btn btn-danger" onClick={this.onDeleteClick.bind(this)} >
            Continue
          </button>
          <button className="btn btn-success" onClick={this.handleCloseModal}>Cancel</button>
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
          <p class="lead">You are about to delete your this mentor profile and re create it with new details!</p>
          <button className="btn btn-danger" onClick={this.onDeleteClick1.bind(this)} >
             Continue
          </button>
          <button className="btn btn-success" onClick={this.handleCloseModalother}>Cancel</button>
        </ReactModal>
        
      <nav class="navbar navbar-expand-lg fixed-top site-header">
      <span class="navbar-brand mr-auto mr-lg-0 text-light" href="#">Mentor Guide</span>
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <a class="nav-link" href="/"> <span class="sr-only">(current)</span></a>
          </li>
          <form class="form-inline mt-2 mt-md-0">
            <Link className="btn btn-outline-info my-2 my-sm-0" to="/sign"> Log out    </Link>
          </form>
        </ul> 
      </nav>

      <div class="bg-white shadow-sm">
      <nav class="nav nav-underline">
        <a class="nav-link active" href="">Profile</a>
        <form class="form-inline mt-2 mt-md-0">
            <button className="btn btn-outline-dark my-2 my-sm-0" onClick={this.handleOpenModalother}> Recreate    </button>
          </form>
        <form class="form-inline mt-2 mt-md-0">
            <Link className="btn btn-outline-dark my-2 my-sm-0" to="/checkrequests"> Mentor Requirments   </Link>
          </form>
      </nav>
      </div>
      <div>
      <button className="btn btn-danger pull-xs-right" onClick={this.handleOpenModal} >
      Delete Profile
      </button>
      </div>

      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <h1 class="display-4 ">Hi! {post.name}</h1>
        <h5 class="text-info">@{post.username}</h5>
        <hr class="featurette-divider"/>
        <h1 class="display-6">Details </h1>
        <h5 class="text-muted"> Your Qualification: <span class="text-dark" > {post.content}</span></h5>
        <h5 class="text-muted"> You are Available for: <span class="text-dark"> {post.classes}</span></h5>
        <h5 class="text-muted"> Your Mentoring Fee: <span class="text-dark"> {post.salary}</span></h5>
        <h5 class="text-muted"> Your Location: <span class="text-dark"> {post.location}</span></h5>
        <h4><span class="badge badge-danger">Contact Number: {post.number}</span></h4>
        <h4><span class="badge badge-warning">Address: {post.mark}</span></h4>
      </div>   
      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">&copy; Hamza's Developer Company</p>
        <a href="#">All Rights Reserved</a>
      </footer>
  </body>
    );
        }
      });
  }
}



//function mapStateToProps({ posts }, ownProps)
function mapStateToProps(state){
  // return { post: posts[ownProps.match.params.id] };
  return { posts: state.posts.mentors };
}



export default connect(mapStateToProps, { fetchPosts, deletePost })(ProfileShow);
