import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";


class PostsMain extends Component {
  


render() {
    return (
<body >  
  <header>
  <nav class="site-header sticky-top py-1">
      <div class="container d-flex flex-column flex-md-row justify-content-between">
      <span class="navbar-brand mr-auto mr-lg-0 text-light" href="#">Mentor Guide</span>
        <a class="py-2 d-none d-md-inline-block" href="#">Home</a>
        <a class="py-2 d-none d-md-inline-block" href="/posts">Search</a>
        <a class="py-2 d-none d-md-inline-block" href="/sign">Sign in</a>
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
                <Link className="btn btn-lg btn-primary" to="/posts/new"> Get Started   </Link>
              </div>
            </div>
          </div>
        </div>
        </div>



        <hr class="featurette-divider"/>
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">Search for a Mentor, <span class="text-muted">more than thousands of mentors.</span></h2>
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
      <hr class="featurette-divider"/>
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">Do the needful, <span class="text-muted">post specific mentor requests</span></h2>
            <p class="lead">Create your mentor request by adding details about your requirments and conditions. We
             will show it to our mentors and they will approach you by your contact details if they find themselves appropraite.</p>
            <Link className="btn btn-lg btn-primary" to="/requests"> Create Mentor Request       </Link>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" src="./style/3.jpg" alt="Generic placeholder image"/>
          </div>
        </div>
    
    <hr class="featurette-divider"/>
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 font-weight-normal">About us</h1>
        <p class="lead font-weight-normal">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dol
              or id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, 
              vestibulum at eros. Praesent commodo cursus magna.</p>
        <span class="btn btn-outline-secondary" ><img class="rounded-circle" src="./style/Hamza.jpg" alt="Generic placeholder image" width="50" height="50"/>  Contact: hamzaali2912@gmail.com</span>
      </div>
      <div class="product-device shadow-sm d-none d-md-block"></div>
    </div>
    <footer >
      <p class ="text-center">&copy; Hamza Developers, Inc. &middot; <a href="#">All Rights Reserved</a></p>
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


