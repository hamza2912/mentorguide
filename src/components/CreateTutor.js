import React, { Component } from "react";

import { Field, reduxForm } from "redux-form";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { createPost } from "../actions";

import AOS from 'aos';
import Header from "./Header";


class CreateTutor extends Component {

  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: '' };
  }

  _handleSubmit(e) {
    e.preventDefault();
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  componentDidMount() {
    AOS.init({
      duration: 500
    })
  }

  renderFieldPhoto(field) {

    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <input className="form-control" placeholder={field.placeholder} type="file" onChange={(e) => this._handleImageChange(e)} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  renderField(field) {

    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <input className="form-control" placeholder={field.placeholder} type="tutor" {...field.input} />
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
        <input className="form-control" placeholder={field.placeholder} type="password" name="password" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  renderFieldNew(field) {

    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <select className="form-control" type="tutor" {...field.input} ><option>Target Area</option>
          <option>Baldia</option><option>Buffer-Zone</option> <option>Defence</option> <option>Fedral-B-Area</option>
          <option>Gadap</option> <option>Gulberg</option><option>Gulshan-e-Meymar</option>
          <option>Gulshan</option> <option>Jamshed Town</option>
          <option>Johar</option> <option>Korangi</option> <option>Landhi</option> <option>Liaquatabad</option>
          <option>Lyari</option> <option>Malir</option> <option>New Karchi</option> <option>Nazimabad</option>
          <option>Orangi Town</option><option>Saddar</option><option>Shah Faisal Town</option>
        </select>
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  renderFieldCity(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <select className="form-control" type="tutor"  ><option>Karachi</option></select>
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/sign_tutor");
    });
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <main>
        <Header />
        <div className="text-center bgCreate" >
          <div className="center-place">
            <div className='sans-heading'>
              <h4 className="Sans6" >Create Account</h4>
              <div className="Sans6border " ></div>
            </div>
            <p data-aos="fade-up" className="font-ylish text-muted my-4 ">Please fill in below information to create your account. Do you have an account already? <a href="/sign_tutor"> Sign In </a>now</p>
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
              <Field
                placeholder="Qualification"
                name="content"
                component={this.renderField}
              />

              <Field
                placeholder="Tution classes"
                name="classes"
                component={this.renderField}
              />

              <Field
                placeholder="Core Subjects"
                name="subjects"
                component={this.renderField}
              />

              <Field
                placeholder="Tution fee"
                name="salary"
                component={this.renderField}
              />

              <Field
                name="city"
                component={this.renderFieldCity}
              />

              <Field
                name="location"
                component={this.renderFieldNew}
              />

              <Field
                placeholder="Email"
                name="email"
                component={this.renderField}
              />

              <Field
                placeholder="Contact (optional)"
                name="number"
                component={this.renderField}
              />

              <Field
                placeholder="Address (optional)"
                name="mark"
                component={this.renderField}
              />


              <Field
                placeholder="Description (One or two Liner)"
                name="description"
                component={this.renderField}
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

  if (!values.content) {
    errors.content = "Enter some content";
  }

  if (!values.classes) {
    errors.classes = "Enter some content";
  }

  if (!values.salary) {
    errors.salary = "Suggest Salary or leave it while typing NA";
  }


  if (!values.password) {
    errors.password = "Enter password for username";
  }

  if (!values.location) {
    errors.location = "Select your location";
  }

  return errors;
}


export default reduxForm({
  validate,
  form: "PostsNewForm"
})(connect(null, { createPost })(CreateTutor));

/*
<Field
              placeholder="Photo (optional)"
              name="photo"
              component={this.renderFieldPhoto}
              />
              */