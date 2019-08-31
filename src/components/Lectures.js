import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { createTutorRequest } from "../actions";

import ReactModal from "react-modal";

import AOS from 'aos';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMapMarkerAlt , faStar , faSearch } from '@fortawesome/free-solid-svg-icons';

import { Player } from 'video-react';


class Lectures extends Component {

  constructor(props) {
    super(props);
    this.state = { Body: {} , Messege: "" , Email: "" , Messeges: {}, show1: false}
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

  }

  componentDidMount() {
    AOS.init({
      duration : 1000
    })

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

  handleChange1(event) {

    this.setState({Email: event.target.value});

  }

  onSubmit(){

    if(this.state.Messege !== ""){
      this.state.Body.Messege = this.state.Messege;
      this.state.Body.Email = this.state.Email;
      this.props.createTutorRequest(this.state.Body);
      this.setState({ show1: true });
    }

  }

  render() {

    return (


    <div className="bg-vid">
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
                  transform             : 'translate(-50%, -50%)'
                }
            }} >
            <p className="lead">Your Tutor request has been successfully posted.</p>
            <Link className="btn btn-primary" to= "/" >Close</Link>
        </ReactModal>
        <header>
          <nav className="site-header fixed-top">
              <div className="container d-flex flex-column flex-md-row justify-content-between">
                <img  src="/style/logooo.jpg"
                alt="Generic placeholder image" width="100" height="62.5" />
                <a className="myNav text-dark" href="/">Home</a>
                <a className="myNav text-dark" href="/posts">Search</a>
                <a className="myNav text-dark" href="/lectures">Lectures</a>
                <a className="myNav text-dark" href="/create_request">Requests</a>
                <Link className="bluebutton boorder text-light font-ylish" to="/sign">Sign In</Link>
              </div>
            </nav>
        </header>
            <div className="row">
              <main role="main" className="pl-5 ml-5">
              <h2 className="Sans21 pt-8 pl-5 ml-5 text-light mb-0" >Lectures Gallery</h2>
              <form className="pl-5 ml-5 mt-3 mb-5 form-lectures" role="search">
              <label for="srch-term" className="sr-only"><FontAwesomeIcon icon={ faSearch }/>
              </label>
                  <input className="form-search" placeholder="Search" name="srch-term" id="srch-term" type="text"/>
                  </form>
                  <form className="navbar-form" role="search">
                    <div className="input-group add-on">
                    </div>
                  </form>
                <div className="myBox9 mt-4 ml-5">
                <h6 className="smhd pb-2">Most Popular</h6>
                <div className='d-flex flex-column flex-md-row justify-content-between'>
                <Player fluid={false}  width={320} height={200} >
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />

                </Player>
                <Player fluid={false}  width={320} height={200} >
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />

                </Player>
                <Player fluid={false}  width={320} height={200} >
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />

                </Player>
                </div>
                </div>
              </main>
            </div>
    </div>
    );
  }

}


function mapStateToProps(state) {

  return { posts: state.posts };

}

export default connect(mapStateToProps, {createTutorRequest})(Lectures);