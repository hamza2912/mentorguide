import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchChats } from "../actions";




class checkRequests extends Component {
  

renderChats() {
  var chats = this.props.posts;
  if (!chats) {
    return <div>Loading...</div>;
  }
  else {
  return chats.map((chat)=>{
    return (
    <li>
    <p class=" pb-3   lh-125 border-bottom border-gray">
      <strong class="d-block text-gray-dark">{chat.Messege}</strong>
      <span class="badge badge-danger">{chat.Email}</span>
    </p>
    </li>
    );
  });
}
  
}

render() {
    return (
      
    <body class="bg-light">

      <nav class="navbar navbar-expand-lg fixed-top site-header ">
      <span class="navbar-brand mr-auto mr-lg-0 text-light" href="#">Mentor Guide</span>
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <a class="nav-link" href="/"> <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
          <form class="form-inline mt-2 mt-md-0">
            <Link className="btn btn-outline-info my-2 my-sm-0" to="/"> Back to Home   </Link>
          </form>
          </li>
        </ul> 
      </nav>

      <div class=" bg-white shadow-sm">
      <nav class="nav nav-underline">
        <a class="nav-link active" href="">Dashboard</a>
      </nav>
      </div>
     
      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <h6 class="border-bottom border-gray pb-2 mb-0">Mentor Requests</h6>
        <div class="media text-muted mb-0">
          <ul>
          {this.renderChats()}
          </ul>
        </div>
        <small class="d-block text-right mt-3">
          <a href="">Recent list</a>
        </small>
      </div>  
      
      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">&copy; Hamza's Developer Company</p>
        <a href="#">All Rights Reserved</a>
      </footer> 

  </body>  );  }
}



function mapStateToProps(state) {
  return { posts: state.posts };
 
}



export default connect(mapStateToProps, { fetchChats })(checkRequests);
