import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { createTutorRequest } from "../actions";

import ReactModal from "react-modal";

import AOS from 'aos';


class CreateRequest extends Component {
  
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

  
    <div className="bk-book">  
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
              <nav className="site-header fixed-top py-1">
                <div className="container d-flex flex-column flex-md-row justify-content-between">
                  <img  src="./style/tutorlogo1.png" alt="Generic placeholder image" width="120" height="41" />
                  <a className="py-2 d-none d-md-inline-block" href="/">Back to Home</a>
                </div>
              </nav>
            </header>
            <div className="row">
              <nav  data-aos='fade-right' className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">
                      <span data-feather="home"></span>Create Requests <span className="sr-only">(current)</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div className="my-3 p-3 bg-black rounded shadow-sm">
                  <div className="my-3 p-3  rounded shadow-sm">
                    <label for="exampleTextarea"><h3 className="display-8 text-light ">Create Tutor Request</h3></label>
                    <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Details, for example Hi, My name is Salim, I live in Johar and need a Tutor for my child which is in 5 class. Tutor should fullfill these requirments.. etc" onChange = {this.handleChange}></textarea>
                    <input className="form-control" type="text" placeholder="Email or Contact number"  onChange={this.handleChange1} />
                    <button className="btn btn-outline-info "  onClick={this.onSubmit}>
                    Submit
                    </button>
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

export default connect(mapStateToProps, {createTutorRequest})(CreateRequest);