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

    <main role="main">
      <header>
            <nav class="site-header fixed-top py-1">
              <div class="container d-flex flex-column flex-md-row justify-content-between">
                <img  class="navbar-brand" src="./style/tutorlogo1.png" 
                alt="Generic placeholder image" width="120" height="50" /> 
                <Link className="btn btn-outline-info my-2 my-sm-0" to="/"> Back to Home    </Link>
              </div>
            </nav>
      </header>
      
      <div class="main-color">
        
        <div class=" bg-black shadow-sm">
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

        <div class="my-3 p-3 bg-black rounded shadow-sm">
          <h6 class="border-bottom border-gray pb-2 mb-0 text-light">Search Tutors around You!</h6>
          <div class="media text-muted pt-3">
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
          </div>
        </div> 

        <div class="my-3 p-3 bg-black rounded shadow-sm">
          <h6 class="border-bottom border-gray pb-2 mb-0 text-light">Tutors</h6>
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
        <p class="text-center text-light">&copy; Pixiv Studios, Inc. &middot;</p>
          <a href="#">All Rights Reserved</a>
        </footer> 

    </div>
     
  </main> 
  
  );  }
}



function mapStateToProps(state) {
  return { posts: state.posts.Tutors };
 
}



export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
