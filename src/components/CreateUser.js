import React, { Component } from "react";

import { Field, reduxForm } from "redux-form";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { createUsers } from "../actions";

import AOS from 'aos';


class CreateUser extends Component {

  componentDidMount() {
    AOS.init({
      duration : 500
    })
}


  renderField(field) {

    const { meta: { touched, error } } = field;
    const className = `${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-account" placeholder={field.placeholder} type="email" {...field.input} />
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
        <input className="form-account" placeholder={field.placeholder} type="password" name="password" {...field.input} />
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
      <div className = "text-center bglogin">
       <div className="center-place">
        <h4 className="Sans6" >Create Account</h4>
              <div className="Sans6border mx-50" ></div>
              <p data-aos="fade-up" className="font-ylish text-muted my-5 mx-25">Please fill in below information to create your account. Already have an account? <a href="/sign_user"> Sign In </a>now</p>
              <form className = "form-account" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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