import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts } from "../actions";



class PostsShow extends Component {

  constructor(props) {
    super(props);
    this.state = { Messege: ""}
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
  
  }

  renderChats() {

    const { id } = this.props.match.params;
    return this.props.posts.map((post) => {
      if (post.id === id) {
      for(var i=0; i<post.comments.length; i++){
      return(
        <li>
      <p class=" pb-3   lh-125 border-bottom border-gray">
        <strong class="d-block text-gray-dark">{post.comments[i]}</strong>
      </p>
      </li>
      );
    } }
    });
  }
    
  
  handleChange(event) {
  
    this.setState({Messege: event.target.value});
    
   }

   onSubmit(){

    const { id } = this.props.match.params;
    var mentors = JSON.parse(localStorage.getItem('mentors'));
    mentors.map((post) => {
  
      if (post.id === id) {
        return (
          post.comments.push(this.state.Messege)
        );
      }
    });
    localStorage.setItem('mentors', JSON.stringify(mentors));
    this.props.histrory.push(`/posts/${id}`);
    
  }


componentDidMount() {
    
    this.props.fetchPosts();
  }

render() {

    const { id } = this.props.match.params;
    
    if (!this.props.posts) {
      return <div>Loading...</div>;
    }

    return this.props.posts.map((post) => {
  
    if (post.id === id) {
      return (
      <body class="bg-light">

      <nav class="navbar navbar-expand-lg fixed-top site-header">
      <span class="navbar-brand mr-auto mr-lg-0 text-light" href="#">Mentor Guide</span>
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <a class="nav-link" href="/"> <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
          <Link className="btn btn-outline-info my-2 my-sm-0" to="/"> Back to Home    </Link>
          </li>
        </ul> 
      </nav>

      <div class="nav-scroller bg-white shadow-sm">
      <nav class="nav nav-underline">
        <a class="nav-link active" href="">Dashboard</a>
        <form class="form-inline mt-2 mt-md-0">
            <Link className="btn btn-outline-dark my-2 my-sm-0" to="/posts"> Back to List    </Link>
          </form>
      </nav>
      </div>
      <div>
      </div>

      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <h1 class="display-5">{post.name}</h1>
        <h5 class="text-muted"> Qualification: <span class="text-dark" > {post.content}</span></h5>
        <h5 class="text-muted"> Available for: <span class="text-dark"> {post.classes}</span></h5>
        <h5 class="text-muted"> Mentoring Fee: <span class="text-dark"> {post.salary}</span></h5>
        <h5 class="text-muted"> Location: <span class="text-dark"> {post.location}</span></h5>
        <h4><span class="badge badge-danger">Contact Number: {post.number}</span></h4>
        <h4><span class="badge badge-warning">Address: {post.mark}</span></h4>
      </div>
      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <textarea class="form-control" id="exampleTextarea" rows="3" placeholder="Leave a comment.." 
          onChange = {this.handleChange}></textarea>
          <button className="btn btn-success "  onClick={this.onSubmit}>
          Submit
      </button>
      </div>   
      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <h6 class="border-bottom border-gray pb-2 mb-0">Comments</h6>
        <div class="media text-muted pt-3">
          <ul>
          {this.renderChats()}
          </ul>
        </div>
      </div>  
      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">&copy; Hamza's Developer Company</p>
        <a href="#">All Rights Reserved</a>
      </footer>
  </body>
    );
        }
      });
  }
}



//function mapStateToProps({ posts }, ownProps)
function mapStateToProps(state){
  // return { post: posts[ownProps.match.params.id] };
  return { posts: state.posts.mentors };
}



export default connect(mapStateToProps, { fetchPosts })(PostsShow);
