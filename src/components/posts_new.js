import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";


//className="mark-selector"
class PostsNew extends Component {
  
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
      <option>Baldia</option> <option>Defence</option> <option>Gadap</option> <option>Gulberg</option> 
      <option>Gulshan</option> <option>Jamshed Town</option> 
      <option>Johar</option> <option>Korangi</option> <option>Landhi</option> <option>Liaquatabad</option> 
      <option>Lyari</option> <option>Malir</option> <option>New Karchi</option> <option>New Nazimabad</option>
      <option>Orangi Town</option><option>Saddar</option><option>Shah Faisal Town</option></select>
      <div className="text-help">
      {touched ? error : ""}
      </div> 
     </div> );
  }
  
  renderFieldCity(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    return (
    <div className={className}>
      <label>{field.label}</label>
      <select className="form-control" type="text"  ><option>Karachi</option>
      </select>
      <div className="text-help">
      {touched ? error : ""}
      </div> 
     </div> );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      //console.log(values);
      this.props.history.push("/");
    });
  }
  
  render() {
    const { handleSubmit } = this.props;
    
    
    return (
      <body class="bg-light">
      <div class="container">
      <div class="py-5 text-center">
        <h1><span class="badge badge-dark">Mentor Guide</span></h1>
        <p class="lead">Fill the required information below for creating your mentor profile</p>
      </div>
      <div class="col-md-8 order-md-1">
          <h4 class="mb-3">General</h4>
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>     
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
      <h4 class="mb-3">About Mentoring</h4>
      <Field
      label="Qualification"  placeholder="Studies"
      name="content"
      component={this.renderField}
      />
      
      <Field
      label="Target Classes" placeholder="Can mentor O levels/Matric e.g.."
      name="classes"
      component={this.renderField}
      />

       <Field
      label="Contact number or Email" placeholder="+92.."
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
      
      <button type="submit" className="btn btn-success btn-lg">Continue</button>
      
      <Link to="/" className="btn  btn-danger btn-lg">Cancel</Link>
      </form>
      </div>
      </div>
      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">&copy; Hamza's Developer Company</p>
        <ul class="list-inline">
          <li class="list-inline-item"><a href="#">Privacy</a></li>
          <li class="list-inline-item"><a href="#">Terms</a></li>
          <li class="list-inline-item"><a href="#">Support</a></li>
        </ul>
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

  if (!values.content) {
    errors.content = "Enter some content";
  }

  if (!values.number) {
    errors.number = "Enter contact details";
  }

  if (!values.classes) {
    errors.classes = "Enter some content";
  }

  if (!values.password) {
    errors.password = "Enter password for username";
  }
  
  if (!values.location) {
    errors.location = "Select your location";
  }
  
  // If errors is empty, the form is fine to submit
  
  // If errors has *any* properties, redux form assumes form is invalid
  
  return errors;
}



export default reduxForm({
  validate,
  form: "PostsNewForm"
})(connect(null, { createPost })(PostsNew));
