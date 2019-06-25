import React, { Component } from "react";

import { Field, reduxForm } from "redux-form";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { createUsers } from "../actions";


class CreateUser extends Component {
  
  renderField(field) {
    
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    
    return (    
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" placeholder={field.placeholder} type="text" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  renderFieldPass(field) {
    
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;  
    
    return (    
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" placeholder={field.placeholder} type="password" name="password" {...field.input} />
          <div className="text-help">
            {touched ? error : ""}
          </div>
      </div>
    );
  }

  onSubmit(values) {
    
    this.props.createUsers(values, () => {
      
      this.props.history.push("/success2");

    });
  }
  
  render() {
    const { handleSubmit } = this.props;
    
    
    return (
      <div className = "dark-color">
    
        <div className="container">
          <div className="py-5 text-center">
            <img src="./style/tutorlogo1.png" alt="Generic placeholder image" width="250" height="80" />
            <p className="text-light font-cursive">Fill the required information below for creating your Student/User account</p>
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3 text-light">General</h4>
              <form className = "text-muted" onSubmit={handleSubmit(this.onSubmit.bind(this))}>     
                <Field          label="Name" placeholder="Enter your name"
                name="name"
                component={this.renderField}
                />
                <Field
                label="Username"
                placeholder="@Username"
                name="username"
                component={this.renderField}
                />
                <Field
                label="Password"  placeholder="****"
                name="password"
                component={this.renderFieldPass}
                />
                <button type="submit" className="btn btn-outline-info text-light btn-lg">Continue</button>
                <Link to="/" className="btn btn-outline-danger text-light btn-lg">Cancel</Link>
              </form>
          </div>
        </div>
        <footer className="my-5 pt-5 text-muted text-center text-small">
          <p className="text-center text-light">&copy; Pixiv Studios, Inc. &middot;</p>
          <a href="#">All Rights Reserved</a>
        </footer>
      </div>
    );
  }
}


function validate(values) {
  
  const errors = {};
  
  // Validate the inputs from 'values'
  if (!values.name) {
    errors.name = "Enter Your Name";
  }
  
  if (!values.username) {
    errors.username = "Enter your username";
  }

 
  if (!values.password) {
    errors.password = "Enter password for username";
  } 
  return errors;
}


export default reduxForm({
  validate,
  form: "UserNewForm"
})(connect(null, { createUsers })(CreateUser));