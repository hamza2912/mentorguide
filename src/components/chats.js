import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchChats } from "../actions";
import { createChat } from "../actions";

import ReactModal from "react-modal";




class Requests extends Component {
  
constructor(props) {
  super(props);
  this.state = { Body: {} , Messege: "" , Email: "" , Messeges: [], show1: false}
  this.handleChange = this.handleChange.bind(this);
  this.handleChange1 = this.handleChange1.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  this.handleOpenModal = this.handleOpenModal.bind(this);
  this.handleCloseModal = this.handleCloseModal.bind(this);

}


handleOpenModal () {
  if(this.state.Messege !== ""){
  this.setState({ show1: true });
  }
}

handleCloseModal () {
  this.setState({ show1: false });
}


onSubmit(){

  var chats = tis.props.fetchChats;
  if(chats!== null){
     if (chats.length!== 0){
     this.state.Messeges = chats;
         if(this.state.Messege !== ""){
           this.state.Body.Messege = this.state.Messege;
           this.state.Body.Email = this.state.Email;
           this.state.Messeges.push(this.state.Body);
           this.props.createChat(JSON.stringify(this.state.Messeges));
           this.setState({ show1: true });
         } 
     }
  }

  else if(chats=== null) {
   if(this.state.Messege !== ""){
    this.state.Body.Messege = this.state.Messege;
    this.state.Body.Email = this.state.Email;
     this.state.Messeges.push(this.state.Body);
     this.props.createChat(JSON.stringify(this.state.Messeges));
     this.setState({ show1: true });
   } 

  }
}

handleChange(event) {
  
 this.setState({Messege: event.target.value});
 
}

handleChange1(event) {
  
  this.setState({Email: event.target.value});
  
 }

render() {
    return (
      
    <body class="bg-light">
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
          <p class="lead">Your mentor request has been successfully posted.</p>
          <Link className="btn btn-primary" to= "/" >Close</Link>
        </ReactModal>

      <nav class="navbar navbar-expand-lg fixed-top site-header">
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
      </nav>
      </div>
      <div class="my-3 p-3 bg-white rounded shadow-sm">
      <label for="exampleTextarea"><h1 class="display-8 text-warning ">Create Mentor Request</h1></label>
      <textarea class="form-control" id="exampleTextarea" rows="3" placeholder="Details, for example Hi, My name is Salim, I live in Johar and need a mentor for my child which is in 5 class. Mentor should fullfill these requirments.. etc" onChange = {this.handleChange}></textarea>
      <input className="form-control" type="text" placeholder="Email or Contact number"  onChange={this.handleChange1} />
      <button className="btn btn-success "  onClick={this.onSubmit}>
          Submit
      </button>
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



export default connect(mapStateToProps, { fetchChats , createChat })(Requests);
