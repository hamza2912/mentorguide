import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts } from "../actions";
import SearchBar from "./search_bar";




class PostsIndex extends Component {
  
constructor(props) {
  super(props);
  this.state = { Area: "" , check: 1};
  this.handleChange = this.handleChange.bind(this);
}


componentDidMount() {
    this.props.fetchPosts();
  }

   
renderPosts() {
   
var check = false; 
if (this.state.Area!== ""){
return _.map(this.props.posts, post => {
  
if (post.content===this.state.Area){  
return (
        <li className="list-group-item" key={post.id}>
          
<Link to={`/posts/${post.id}`}>
            {post.title}
          
</Link>
        </li>
      );
  }
} );
 } 
return (<p>Select your area above to get list of tutors in your area</p>);
}

  

handleChange(event) {
 this.setState({Area: event.target.value});
}

render() {
    return (
      
<div> 
<div >
        <Link to="/">Back To Main</Link>
 </div>
<div className = "main" >
 </div>
<label>Where do you live?</label>
   
<div>
<select onChange = {this.handleChange}><option>Area</option> <option>Baldia</option> <option>Defence</option>  
<option>Gadap</option> <option>Gulberg</option> <option>Gulshan</option> <option>Jamshed Town</option> 
<option>Johar</option> <option>Korangi</option> <option>Landhi</option> <option>Liaquatabad</option> 
<option>Lyari</option> <option>Malir</option> <option>New Karchi</option> <option>New Nazimabad</option>
<option>Orangi Town</option><option>Saddar</option><option>Shah Faisal Town</option></select>
</div>
<div className = "main">
<h3>Mentors</h3>
</div>
   
<div>     
<ul className="list-group">
          
{this.renderPosts()}
        
</ul>

</div>     
 </div>
    );
  }
}



function mapStateToProps(state) {
  return { posts: state.posts };
}



export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
