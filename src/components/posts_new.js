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
      <input className="form-control" type="text" {...field.input} />
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
      
      </div>
    );
  }
  
  
  
  onSubmit(values) {
    this.props.createPost(values, () => {
      console.log(values);
      // this.props.history.push("/");
    });
  }
  
  
  
  render() {
    const { handleSubmit } = this.props;
    
    
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      
      <div className = "main">       
      <Field          label="Name"
      name="title"
      component={this.renderField}
      />
      
      <Field
      label="Details (Qualification/Target classes/Contact Number)"
      name="bubbles"
      component={this.renderField}
      />
      
      <Field
      label="Details (Qualification/Target classes/Contact Number)"
      name="bubble2s"
      component={this.renderField}
      />
      
      <Field
      label="Details (Qualification/Target classes/Contact Number)"
      name="sadsadsad"
      component={this.renderField}
      />
      
      <Field
      label="Target Location"
      name="content"
      component={this.renderFieldNew}
      />
      
      </div>  
      
      <button type="submit" className="btn btn-primary">Submit</button>
      
      <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}



function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  
  const errors = {};
  
  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter Your Name";
  }
  
  if (!values.categories) {
    errors.categories = "Enter some content please";
  }
  
  if (!values.content) {
    errors.content = "Enter some content please";
  }
  
  // If errors is empty, the form is fine to submit
  
  // If errors has *any* properties, redux form assumes form is invalid
  
  return errors;
}



export default reduxForm({
  validate,
  form: "PostsNewForm"
})(connect(null, { createPost })(PostsNew));
