import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts } from "../actions";
import SearchBar from "./search_bar";




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
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong class="d-block text-gray-dark"><Link to={`/posts/${post.id}`}> {post.name}</Link></strong>
            {post.content}, Available for {post.classes}
          </p>
            
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

      <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <a class="navbar-brand mr-auto mr-lg-0" href="">Mentor Guide</a>
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <a class="nav-link" href="/"> <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/">Back to Home <span class="sr-only">(current)</span></a>
          </li>
        </ul> 
      </nav>

      <div class="nav-scroller bg-white shadow-sm">
      <nav class="nav nav-underline">
        <a class="nav-link active" href="">Dashboard</a>
        <form class="form-inline my-2 my-lg-0">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          <select onChange = {this.handleChange}>
            <option>Area</option> <option>Baldia</option> <option>Defence</option>  
            <option>Gadap</option> <option>Gulberg</option> <option>Gulshan</option> <option>Jamshed Town</option> 
            <option>Johar</option> <option>Korangi</option> <option>Landhi</option> <option>Liaquatabad</option> 
            <option>Lyari</option> <option>Malir</option> <option>New Karchi</option> <option>New Nazimabad</option>
            <option>Orangi Town</option><option>Saddar</option><option>Shah Faisal Town</option>
          </select>
        </form>
      </nav>
      </div>

      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <h6 class="border-bottom border-gray pb-2 mb-0">Mentors</h6>
        <div class="media text-muted pt-3">
          {this.renderPosts()}
        </div>
        <small class="d-block text-right mt-3">
          <a href="">Recent list</a>
        </small>
      </div>  
      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">&copy; Hamza's Developer Company</p>
        <ul class="list-inline">
          <li class="list-inline-item"><a href="#">Privacy</a></li>
          <li class="list-inline-item"><a href="#">Terms</a></li>
          <li class="list-inline-item"><a href="#">Support</a></li>
        </ul>
      </footer> 
  </body>  );  }
}



function mapStateToProps(state) {
  return { posts: state.posts.mentors };
 
}



export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
