import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts  } from "../actions";

import { addComments  } from "../actions";

import { addMesseges  } from "../actions";

import ReactModal from "react-modal";



class PostsShow extends Component {

  constructor(props) {
    super(props);
    this.state = { Messege: "", Messege2: "",show1: false}
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmit2 = this.onSubmit2.bind(this);
    this.onSubmit3 = this.onSubmit3.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    
  
  }

  handleOpenModal () {
    if(this.state.Messege !== ""){
    this.setState({ show1: true });
    }
  }
  
  handleCloseModal () {
    this.setState({ show1: false });
  }

  renderChats() {

    const { id } = this.props.match.params;
    return this.props.posts.map((post) => {
      if (post.id === id) {
      return post.comments.map((currentPost) => {
        return (
          <li>
            <div class="my-3 p-3 bg-white rounded shadow-sm">
            <p class="pb-3 lh-125">
              <strong className="d-block text-gray-dark">{currentPost}</strong>
            </p>
            </div>
          </li>
        );
      });
      }
    });
  }
    
  
  handleChange(event) {
  
    this.setState({Messege: event.target.value});
    
   }

   handleChange2(event) {
  
    this.setState({Messege2: event.target.value});

   }

   onSubmit(){

    const { id } = this.props.match.params;
    var mentors = this.props.posts ;
    var userName = JSON.parse(localStorage.getItem('UserName'));
    if(this.state.Messege!== ""){
    mentors.map((post) => {
  
      if (post.id === id) {
        var comments = post.comments;
        comments.push(`${userName}: ${this.state.Messege}`)
        //return (
          //post.comments.push(`${userName}: ${this.state.Messege}`)
          this.props.addComments(id,`${userName}: ${this.state.Messege}`);

        //);
      }
    }); 
    //localStorage.setItem('mentors', JSON.stringify(mentors));
    this.props.history.push(`/posts/${id}`);
  }
  }

  onSubmit2(){

    this.setState({ show1: true });
    
  }

  onSubmit3(){

    const { id } = this.props.match.params;
    if(this.state.Messege2!== ""){
      var mentors = this.props.posts ;
    var userName = JSON.parse(localStorage.getItem('UserName'));
    mentors.map((post) => {
  
      if (post.id === id) {
        var messeges = post.messeges;
        messeges.push(`${userName}: ${this.state.Messege2}`)
        //return (
          //post.messeges.push(`${userName}: ${this.state.Messege2}`)
          this.props.addMesseges(id,`${userName}: ${this.state.Messege2}`);

        //);

      }
    }); 
    //localStorage.setItem('mentors', JSON.stringify(mentors));
    this.setState({ show1: false });
    }
    
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
      <ReactModal 
           isOpen={this.state.show1}
           contentLabel="Minimal Modal Example3"
           style={{
              content : {
                top                   : '50%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-50%',
                width                 : '50%',
                transform             : 'translate(-50%, -50%)'
              }
          }} >
           <div class="form-group">
            <label for="message-text" class="col-form-label text-muted">Your Message:</label>
            <textarea class="form-control" id="message-text"  onChange = {this.handleChange2}></textarea>
          </div>
          <button className="btn btn-success" onClick= {this.onSubmit3} >Send</button>
          <button className="btn btn-danger" onClick= {this.handleCloseModal} >Cancel</button>
        </ReactModal>
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
      

      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <h1 class="display-5">{post.name}</h1>
        <h5 class="text-muted"> Qualification: <span class="text-dark" > {post.content}</span></h5>
        <h5 class="text-muted"> Available for: <span class="text-dark"> {post.classes}</span></h5>
        <h5 class="text-muted"> Mentoring Fee: <span class="text-dark"> {post.salary}</span></h5>
        <h5 class="text-muted"> Location: <span class="text-dark"> {post.location}</span></h5>
        <h4><span class="badge badge-danger">Contact Number: {post.number}</span></h4>
        <h4><span class="badge badge-warning">Address: {post.mark}</span></h4>
      </div>
      <div class = "my-3 p-3">
      <button className="btn btn-primary pull-xs-right"  onClick= {this.onSubmit2} >
        Send a Messege 
        </button>
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
  return { posts: state.posts };
}



export default connect(mapStateToProps, { fetchPosts , addComments , addMesseges })(PostsShow);
