import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost2 } from "../actions";




class UserNew extends Component {

  
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
    
    this.props.createPost2(values, () => {
      
      this.props.history.push("/success2");
    });
  }
  
  render() {
    const { handleSubmit } = this.props;
    
    
    return (
      <body class = "main-color">
    
      <div class="container">
      <div class="py-5 text-center">
      <img src="./style/tutorlogo1.png" alt="Generic placeholder image" width="250" height="80" />
        <p class="text-light font-cursive">Fill the required information below for creating your Student/User account</p>
      </div>
      <div class="col-md-8 order-md-1">
          <h4 class="mb-3 text-light">General</h4>
          <form class = "text-info" onSubmit={handleSubmit(this.onSubmit.bind(this))}>     
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
      
      
      <button type="submit" className="btn btn-primary text-light btn-lg">Continue</button>
      <Link to="/" className="btn  btn-danger btn-lg">Cancel</Link>
      </form>
      </div>
      </div>
      
      <footer class="my-5 pt-5 text-muted text-center text-small">
      <p class="text-center text-light">&copy; Pixiv Studios, Inc. &middot;</p>
        <a href="#">All Rights Reserved</a>
      </footer>
      </body>
    );
  }
}



function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  
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
  

  // If errors is empty, the form is fine to submit
  
  // If errors has *any* properties, redux form assumes form is invalid
  
  return errors;
}



export default reduxForm({
  validate,
  form: "UserNewForm"
})(connect(null, { createPost2 })(UserNew));
