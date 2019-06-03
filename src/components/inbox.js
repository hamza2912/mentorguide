import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts, deletePost } from "../actions";


class Inbox extends Component {

  renderChats(variable) {
    
      return variable.map((currentPost) => {
        return (
          <li>
            <div class="my-3 p-3 bg-white rounded shadow-sm">
            <p class="pb-3 lh-125">
              <strong className="d-block text-gray-dark">{currentPost}</strong>
            </p>
            </div>
          </li>
        );
      });
  }

  
  Logout() {
    var Logged = false;
    localStorage.setItem('Logged', JSON.stringify(Logged));
    this.props.history.push("");
  }

render() {

  const { id } = this.props.match.params;

  if (!this.props.posts) {
    return <div>Loading...</div>;
  }

  return this.props.posts.map((post) => {
  
    if (post.id === id) {

    var messeges = post.messeges;

    if (messeges === null) {
    
    return <div>No messeges...</div>;
    }

      return (
      <body class="bg-light">

  
      <nav class="navbar navbar-expand-lg fixed-top site-header">
      <span class="navbar-brand mr-auto mr-lg-0 text-light" href="#">Mentor Guide</span>
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <a class="nav-link" href="/"> <span class="sr-only">(current)</span></a>
          </li>
          <form class="form-inline mt-2 mt-md-0">
            <button className="btn btn-outline-info my-2 my-sm-0" onClick={this.Logout.bind(this)}> Log out    </button>
          </form>
          <form class="form-inline mt-2 mt-md-0">
            <Link className="btn btn-outline-info my-2 my-sm-0" to="/"> Back to Home   </Link>
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
      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <h6 class="border-bottom border-gray pb-2 mb-0">Messeges</h6>
        <div class="media text-muted pt-3">
          <ul>
          {this.renderChats(messeges)}
          </ul>
        </div>
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



export default connect(mapStateToProps, { fetchPosts, deletePost })(Inbox);
