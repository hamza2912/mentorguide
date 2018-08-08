import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";


class PostsMain extends Component {
  


render() {
    return (
<body>  
  <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <h3><a class="badge badge-light" href="#">MentorGuide</a></h3>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link disabled" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>
          <form class="form-inline mt-2 mt-md-0">
            <Link className="btn btn-outline-success my-2 my-sm-0" to="/posts"> Search      </Link>
            <button type="button" class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" href="#exampleModal">
              Login
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </nav>
    </header>
    <main role="main">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="first-slide" src="./style/education.jpg" alt="First slide"/>
            <div class="container">
              <div class="carousel-caption text-left">
                <h1>Mentor Guide</h1>
                <p>Now get to know all about mentors in your city while sitting at your home.</p>
                <Link className="btn btn-lg btn-primary" to="/posts/new"> Sign up today   </Link>
              </div>
            </div>
          </div>
        </div>
        <hr class="featurette-divider"/>
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">Search for a Mentor. <span class="text-muted">While sittig at home.</span></h2>
            <p class="lead">We have the best mentors and tutors throughout the city. You can find mentors available in your areas and could reach them easily.</p>
            <Link className="btn btn-lg btn-primary" to="/posts"> Search for a mentor       </Link>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" src="./style/2.jpg" alt="Generic placeholder image"/>
          </div>
        </div>
        <hr class="featurette-divider"/>
        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">Become a Mentor. <span class="text-muted">See for yourself.</span></h2>
            <p class="lead">You can easily get mentors and tutions while siiting at home. All you need
            is to submit a short form here and become part of our mentors team. We will show your pofile to our users
            and they would respond to you if they find you suitable for them</p>
            <Link className="btn btn-lg btn-primary" to="/posts/new"> Become a mentor         </Link>     
          </div>
        <div class="col-md-5 order-md-1">
          <img class="featurette-image img-fluid mx-auto" src="./style/1.jpg" alt="Generic placeholder image"/>
        </div>
      </div>
    </div>
    <hr class="featurette-divider"/>
    <footer class="container">
        <p class="float-right"><a href="#">Back to top</a></p>
        <p>&copy; Hamza Developers, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
    </footer>
  </main> 
</body>  
);
}
}


function mapStateToProps(state) {
  return { posts: state.posts };
}



export default connect(mapStateToProps, { fetchPosts })(PostsMain);


