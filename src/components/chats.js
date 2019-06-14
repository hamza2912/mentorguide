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
      
    <body class="main-color">
      
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
          <p class="lead">Your Tutor request has been successfully posted.</p>
          <Link className="btn btn-primary" to= "/" >Close</Link>
      </ReactModal>

       <nav class="site-header fixed-top py-1">
          <div class="container d-flex flex-column flex-md-row justify-content-between">
            <img  class="navbar-brand" src="./style/tutorlogo1.png" 
              alt="Generic placeholder image" width="120" height="50" /> 
            <Link className="btn btn-outline-info my-2 my-sm-0" to="/"> Back to Home    </Link>
          </div>
        </nav>

      <div class="my-3 p-3  rounded shadow-sm">
        <label for="exampleTextarea"><h1 class="display-8 text-light ">Create Tutor Request</h1></label>
        <textarea class="form-control" id="exampleTextarea" rows="3" placeholder="Details, for example Hi, My name is Salim, I live in Johar and need a Tutor for my child which is in 5 class. Tutor should fullfill these requirments.. etc" onChange = {this.handleChange}></textarea>
        <input className="form-control" type="text" placeholder="Email or Contact number"  onChange={this.handleChange1} />
          <button className="btn btn-success "  onClick={this.onSubmit}>
            Submit
          </button>
      </div>
      
      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="text-center text-light">&copy; Pixiv Studios, Inc. &middot;</p>
        <a href="#">All Rights Reserved</a>
      </footer> 

  </body>  
  
);  }
}



function mapStateToProps(state) {
  return { posts: state.posts.Tutors };
 
}



export default connect(mapStateToProps, { fetchChats , createChat })(Requests);
