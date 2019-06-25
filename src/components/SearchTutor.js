import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts } from "../actions";

import SearchBar from "./search_bar";

import InputSelect from "react-select-input";

import AOS from 'aos';


class SearchTutor extends Component {
  
  constructor(props) {
    super(props);
    this.state = { Area: "" , check: 1};
    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    this.props.fetchPosts();
    AOS.init({
      duration : 1000
    })

  }
  
  renderPosts() {

    if (!this.props.posts) {
        return <div>Loading...</div>;
    }

    else if (this.state.Area !== "") {
      
        return _.map(this.props.posts, post => {
      
            if (post.location === this.state.Area) {
                return (
                  <li>
                    <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                      <strong className="d-block text-gray-dark"><Link to={`/posts/${post.userId}`}> {post.name}</Link></strong>
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

      <div className="dark-color">       
        
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
          <nav  data-aos='fade-right' className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                  <span data-feather="home"></span>Tutors <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#">
                  <span data-feather="home"></span>Search Area <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <form className="form-inline my-2 my-lg-0 mrg">
                    <select  className="form-control" placeholder = "Select Your area" onChange = {this.handleChange}>
                      <option>Area</option> <option>Baldia</option> <option>Buffer-Zone</option> <option>Defence</option>  
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
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="my-3 p-3 bg-black rounded shadow-sm">
              <h6 className="border-bottom border-gray pb-2 mb-0 text-light">Tutors</h6>
                <div className="media text-muted pt-3">
                  <ul>
                    {this.renderPosts()}
                  </ul>
                </div>
                <small className="d-block text-right mt-3">
                  <a href="">Recent list</a>
                </small>
            </div>      
          </main>
          <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="text-center text-light">&copy; Pixiv Studios, Inc. &middot;</p>
            <a href="#">All Rights Reserved</a>
          </footer>
        </div>      
      </div> 
    );  
  }

}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(SearchTutor);