import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts } from "../actions";
import SearchBar from "./search_bar";
import InputSelect from "react-select-input";




class PostsIndex extends Component {
  
constructor(props) {
  super(props);
  this.state = { Area: "" , check: 1};
  this.handleChange = this.handleChange.bind(this);

}

componentDidMount() {
    this.props.fetchPosts();

  }

  
  
renderPosts() {

  if (!this.props.posts) {
    return <div>Loading...</div>;
  }
  else if (this.state.Area !== "") {
    return this.props.posts.map((post) => {
       if (post.location === this.state.Area) {
        return (
          <li>
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong class="d-block text-gray-dark"><Link to={`/posts/${post.id}`}> {post.name}</Link></strong>
            {post.content}, Available for {post.classes}
          </p>
          </li>
      
            
        );
      }
    });
  } 
return (<p>Select your area above to get list of tutors in your area</p>);
}

  

handleChange(event) {
 this.setState({Area: event.target.value});
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
            <Link className="btn btn-outline-info my-2 my-sm-0" to="/"> Back to Home    </Link>
          </form>
          </li>
        </ul> 
      </nav>

      <div class=" bg-white shadow-sm">
      <nav class="nav nav-underline">
        <a class="nav-link active" href="">Dashboard</a>
        <a class="nav-link active text-warning" href="">Search</a>
        <form class="form-inline my-2 my-lg-0">
          <select  class="form-control" placeholder = "Select Your area" onChange = {this.handleChange}>
            <option>Area</option> <option>Baldia</option> <option>Buffer-Zone</option> <option>Defence</option>  
            <option>Fedral-B-Area</option><option>Gadap</option> <option>Gulberg</option> <option>Gulshan</option> 
            <option>Gulshan-e-Meymar</option><option>Jamsh1ed Town</option> 
            <option>Johar</option> <option>Korangi</option> <option>Landhi</option> <option>Liaquatabad</option> 
            <option>Lyari</option> <option>Malir</option> <option>New Karchi</option> <option>Nazimabad</option>
            <option>Orangi Town</option><option>Saddar</option><option>Shah Faisal Town</option>
          </select>
        </form>
      </nav>
      </div>

      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <h6 class="border-bottom border-gray pb-2 mb-0">Mentors</h6>
        <div class="media text-muted pt-3">
          <ul>
          {this.renderPosts()}
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
  return { posts: state.posts.mentors };
 
}



export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
