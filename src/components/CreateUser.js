import React, { Component } from "react";

import { Field, reduxForm } from "redux-form";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { createUsers } from "../actions";

import AOS from 'aos';
import Header from "./Header";


class CreateUser extends Component {

  componentDidMount() {
    AOS.init({
      duration: 500
    })
  }


  renderField(field) {

    const { meta: { touched, error } } = field;
    const className = `${touched && error ? "has-danger" : ""}`;

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
    const className = `${touched && error ? "has-danger" : ""}`;

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

      this.props.history.push("/sign_user");

    });
  }

  render() {
    const { handleSubmit } = this.props;


    return (
      <main>
        <Header />
        <div className="text-center bglogin">
          <div className="center-place">
            <div className='sans-heading'>
              <h4 className="Sans6" >Create Account</h4>
              <div className="Sans6border " ></div>
            </div>
            <p data-aos="fade-up" className="font-ylish text-muted my-5 ">Please fill in below information to create your account. Already have an account? <a href="/sign_user"> Sign In </a>now</p>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Field
                placeholder="Name"
                name="name"
                component={this.renderField}
              />
              <Field
                placeholder="Username"
                name="username"
                component={this.renderField}
              />
              <Field
                placeholder="Password"
                name="password"
                component={this.renderFieldPass}
              />
              <button type="submit" className="btn btn-secondary">Continue</button>
            </form>
          </div>
        </div>
      </main>
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