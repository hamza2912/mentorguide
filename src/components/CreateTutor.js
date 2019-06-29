import React, { Component } from "react";

import { Field, reduxForm } from "redux-form";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { createPost } from "../actions";


class CreateTutor extends Component {

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

  renderFieldNew(field) {
    
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    
    return (
      <div className={className}>
        <label>{field.label}</label>
        <select className="form-control" type="text" {...field.input} ><option>Area</option>
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
        <label>{field.label}</label>
        <select className="form-control" type="text"  ><option>Karachi</option></select>
        <div className="text-help">
          {touched ? error : ""}
        </div> 
      </div> 
    );
  }

  onSubmit(values) {
    
    this.props.createPost(values, () => {
    
      this.props.history.push("/success");

    });
  }
  
  render() {
    
    const { handleSubmit } = this.props;

    return (
      <div className = "dark-color" >
        <div className="container">
          <div className="py-5 text-center">
            <img src="./style/tutorlogo1.png" alt="Generic placeholder image" width="250" height="80" />
            <p className="text-light font-cursive">Fill the required information below for creating your Tutor profile</p>
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3 text-light">General Information</h4>
            <form className= "text-muted"  onSubmit={handleSubmit(this.onSubmit.bind(this))}>     
              <Field         label="Name" placeholder="Enter your name"
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
              <h4 className="mb-3 text-light">Tutor Career</h4>
              <Field
              label="Qualification"  placeholder="Studies"
              name="content"
              component={this.renderField}
              />
              
              <Field
              label="Target Classes" placeholder="Can Tutor O levels/Matric e.g.."
              name="classes"
              component={this.renderField}
              />

              <Field
              label="Tution Fee" placeholder="10000-15000 e.g.."
              name="salary"
              component={this.renderField}
              />

              <Field
              label="Contact number or Email" placeholder="+92.. OR abc@gmail.com"
              name="number"
              component={this.renderField}
              />
              
              <Field
              label="City"
              name="city"
              component={this.renderFieldCity}
              />

              <Field
              label="Target Location"
              name="location"
              component={this.renderFieldNew}
              />

              <Field
              label="Address (optional)" placeholder="Enter your exact location if you want users to reach you"
              name="mark"
              component={this.renderField}
              />
              
              <button type="submit" className="btn btn-outline-info text-light btn-lg">Continue</button>
              <Link to="/create" className="btn  btn-outline-danger text-light btn-lg">Cancel</Link>
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

  if (!values.content) {
    errors.content = "Enter some content";
  }

  if (!values.number) {
    errors.number = "Enter contact or leave it while typing NA";
  }

  if (!values.classes) {
    errors.classes = "Enter some content";
  }

  if (!values.mark) {
    errors.mark = "Enter Address or leave it while typing NA";
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