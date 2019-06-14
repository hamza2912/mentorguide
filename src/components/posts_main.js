import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";



class PostsMain extends Component {

  Signout() {
    var UserLogin = false;
    localStorage.setItem('UserLogin', JSON.stringify(UserLogin));
    this.props.history.push("/");

  }


  render() {
    var Logged = JSON.parse(localStorage.getItem('Logged'));
    var UserLogin = JSON.parse(localStorage.getItem('UserLogin'));
    var ProfilePage = JSON.parse(localStorage.getItem('ProfilePage'));
    if ((Logged === false && UserLogin === false) || Logged === null || UserLogin === null) {
      return (
        <main role="main">
          <header>
            <nav class="site-header fixed-top py-1">
              <div class="container d-flex flex-column flex-md-row justify-content-between">
                <img  class="navbar-brand" src="./style/tutorlogo1.png" 
                alt="Generic placeholder image" width="120" height="50" /> 
                <span class="py-2 d-md-inline-block text-muted" href="#">Home</span>
                <a class="py-2 d-none d-md-inline-block" href="/Usersign">Search</a>
                <a class="py-2 d-none d-md-inline-block" href="/Mainsign">Requests</a>
                <a class="py-2 d-none d-md-inline-block" href="/Mainsign">Sign in</a>
              </div>
            </nav>
          </header>
          <div class = "main-color">

          <div class="carousel-item active">
                <div class="container">
                  <div class="carousel-caption text-left">
                    <h2>Tutor Guide</h2>
                    <p>Now get to know all about Tutors in your city while sitting at your home.</p>
                    <Link className="btn btn-lg btn-warning text-light" to="/mainnew"> Get Started   </Link>
                  </div>
                </div>
          </div>
          
          <div className="container">
            <hr class="featurette-divider" />
            <div class="row featurette">
              <div class="col-md-7">
                <h2 class="featurette-heading text-light">Search for a Tutor, <span class="text-danger">more than thousands of Tutors.</span></h2>
                <p class="text-light">We have the best Tutors and tutors throughout the city. You can find Tutors available in your areas and could reach them easily.</p>
                <Link className="btn btn-lg btn-primary" to="/Usersign"> Search Tutor       </Link>
              </div>
              <div class="col-md-5">
                <img class="featurette-image img-fluid mx-auto" src="./style/search.png" alt="Generic placeholder image" />
              </div>
            </div>
            <hr class="featurette-divider" />
            <div class="row featurette">
              <div class="col-md-7 order-md-2">
                <h2 class="featurette-heading text-light">Become a Tutor, <span class="text-danger">See for yourself.</span></h2>
                <p class="text-light">You can easily get Tutors and tutions while siiting at home. All you need
                is to submit a short form here and become part of our Tutors team. We will show your pofile to our users
            and they would respond to you if they find you suitable for them</p>
                <Link className="btn btn-lg btn-primary" to="/posts/new"> Become Tutor         </Link>
              </div>
              <div class="col-md-5 order-md-1">
                <img class="featurette-image img-fluid mx-auto" src="./style/tutor.png" alt="Generic placeholder image" />
              </div>
            </div>
            <hr class="featurette-divider" />
            <div class="row featurette">
              <div class="col-md-7">
                <h2 class="featurette-heading text-light">Do the needful, <span class="text-danger">post specific Tutor requests</span></h2>
                <p class="text-light">Create your Tutor request by adding details about your requirments and conditions. We
             will show it to our Tutors and they will approach you by your contact details if they find themselves appropraite.</p>
                <Link className="btn btn-lg btn-primary" to="/Usersign"> Create Request       </Link>
              </div>
              <div class="col-md-5">
                <img class="featurette-image img-fluid mx-auto" src="./style/request.png" alt="Generic placeholder image" />
              </div>
            </div>

        
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center ">
              <div class="col-md-5 p-lg-5 mx-auto my-5">
                <h1 class="display-4 font-weight-normal text-light">About us</h1>
                <p class="lead font-weight-normal">We at Tutor guide strive to create an educational network
                which can promote education by linking Tutors with students</p>
                <span class="btn btn-outline-secondary text-light" ><img class="rounded-circle" src="./style/email.png" 
                alt="Generic placeholder image" width="50" height="50" />  shamzaali.nq@gmail.com</span>
              </div>
              <div class="product-device shadow-sm d-none d-md-block"></div>
            </div>
          </div>
          <footer class = "footer-color">
            <p class="text-center text-light">&copy; Pixiv Studios, Inc. &middot; <a href="#">All Rights Reserved</a></p>
          </footer>
          </div>
          
        </main>
      );
    }
    else if (Logged === true) {
      return (
        <main role="main">
          <header>
            <nav class="site-header fixed-top py-1">
              <div class="container d-flex flex-column flex-md-row justify-content-between">
                <span class="navbar-brand mr-auto mr-lg-0 text-light" href="#">Tutor Guide</span>
                <a class="py-2 d-none d-md-inline-block" href="#">Home</a>
                <a class="py-2 d-none d-md-inline-block" href="/posts">Search</a>
                <a class="py-2 d-none d-md-inline-block" href="/checkrequests">Requests</a>
                <a class="py-2 d-none d-md-inline-block" href={ProfilePage}>Profile</a>
              </div>
            </nav>
          </header>
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container">
                  <div class="carousel-caption text-left">
                    <h1>Tutor Guide</h1>
                    <p>Now get to know all about Tutors in your city while sitting at your home.</p>
                    <Link className="btn btn-lg btn-primary" to="/mainnew"> Get Started   </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <hr class="featurette-divider" />
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Search for a Tutor, <span class="text-muted">more than thousands of Tutors.</span></h2>
              <p class="lead">We have the best Tutors and tutors throughout the city. You can find Tutors available in your areas and could reach them easily.</p>
              <Link className="btn btn-lg btn-primary" to="/posts"> Search for a Tutor       </Link>
            </div>
            <div class="col-md-5">
              <img class="featurette-image img-fluid mx-auto" src="./style/2.jpg" alt="Generic placeholder image" />
            </div>
          </div>
          <hr class="featurette-divider" />
          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading">Become a Tutor. <span class="text-muted">See for yourself.</span></h2>
              <p class="lead">You can easily get Tutors and tutions while siiting at home. All you need
              is to submit a short form here and become part of our Tutors team. We will show your pofile to our users
                and they would respond to you if they find you suitable for them</p>
              <Link className="btn btn-lg btn-primary" to="/posts/new"> Become a Tutor         </Link>
            </div>
            <div class="col-md-5 order-md-1">
              <img class="featurette-image img-fluid mx-auto" src="./style/1.jpg" alt="Generic placeholder image" />
            </div>
          </div>
          <hr class="featurette-divider" />
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Do the needful, <span class="text-muted">post specific Tutor requests</span></h2>
              <p class="lead">Create your Tutor request by adding details about your requirments and conditions. We
                 will show it to our Tutors and they will approach you by your contact details if they find themselves appropraite.</p>
              <Link className="btn btn-lg btn-primary" to="/requests"> Create Tutor Request       </Link>
            </div>
            <div class="col-md-5">
              <img class="featurette-image img-fluid mx-auto" src="./style/3.jpg" alt="Generic placeholder image" />
            </div>
          </div>
          <hr class="featurette-divider" />
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Do the needful, <span class="text-muted">post specific Tutor requests</span></h2>
              <p class="lead">Create your Tutor request by adding details about your requirments and conditions. We
                 will show it to our Tutors and they will approach you by your contact details if they find themselves appropraite.</p>
              <Link className="btn btn-lg btn-primary" to="/requests"> Create Tutor Request       </Link>
            </div>
            <div class="col-md-5">
              <img class="featurette-image img-fluid mx-auto" src="./style/3.jpg" alt="Generic placeholder image" />
            </div>
          </div>

          <hr class="featurette-divider" />
          <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div class="col-md-5 p-lg-5 mx-auto my-5">
              <h1 class="display-4 font-weight-normal">About us</h1>
              <p class="lead font-weight-normal">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dol
                    or id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac,
                  vestibulum at eros. Praesent commodo cursus magna.</p>
              <span class="btn btn-outline-secondary" ><img class="rounded-circle" src="./style/Hamza.jpg" alt="Generic placeholder image" width="50" height="50" />  Contact: hamzaali2912@gmail.com</span>
            </div>
            <div class="product-device shadow-sm d-none d-md-block"></div>
          </div>
          <footer >
            <p class="text-center">&copy; Hamza Developers, Inc. &middot; <a href="#">All Rights Reserved</a></p>
          </footer>
        </main>
      );


    }
    else if (UserLogin === true) {
      return (
        <main role="main">
          <header>
            <nav class="site-header fixed-top py-1">
              <div class="container d-flex flex-column flex-md-row justify-content-between">
                <span class="navbar-brand mr-auto mr-lg-0 text-light" href="#">Tutor Guide</span>
                <a class="py-2 d-none d-md-inline-block" href="#">Home</a>
                <a class="py-2 d-none d-md-inline-block" href="/posts">Search</a>
                <a class="py-2 d-none d-md-inline-block" href="/checkrequests">Requests</a>
                <button class="btn btn-outline-dark inline-block" onClick={this.Signout.bind(this)}>Sign out</button>
              </div>
            </nav>
          </header>
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container">
                  <div class="carousel-caption text-left">
                    <h1>Tutor Guide</h1>
                    <p>Now get to know all about Tutors in your city while sitting at your home.</p>
                    <Link className="btn btn-lg btn-primary" to="/posts/new"> Get Started   </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <hr class="featurette-divider" />
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Search for a Tutor, <span class="text-muted">more than thousands of Tutors.</span></h2>
              <p class="lead">We have the best Tutors and tutors throughout the city. You can find Tutors available in your areas and could reach them easily.</p>
              <Link className="btn btn-lg btn-primary" to="/posts"> Search for a Tutor       </Link>
            </div>
            <div class="col-md-5">
              <img class="featurette-image img-fluid mx-auto" src="./style/2.jpg" alt="Generic placeholder image" />
            </div>
          </div>
          <hr class="featurette-divider" />
          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading">Become a Tutor. <span class="text-muted">See for yourself.</span></h2>
              <p class="lead">You can easily get Tutors and tutions while siiting at home. All you need
              is to submit a short form here and become part of our Tutors team. We will show your pofile to our users
                and they would respond to you if they find you suitable for them</p>
              <Link className="btn btn-lg btn-primary" to="/posts/new"> Become a Tutor         </Link>
            </div>
            <div class="col-md-5 order-md-1">
              <img class="featurette-image img-fluid mx-auto" src="./style/1.jpg" alt="Generic placeholder image" />
            </div>
          </div>
          <hr class="featurette-divider" />
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Do the needful, <span class="text-muted">post specific Tutor requests</span></h2>
              <p class="lead">Create your Tutor request by adding details about your requirments and conditions. We
                 will show it to our Tutors and they will approach you by your contact details if they find themselves appropraite.</p>
              <Link className="btn btn-lg btn-primary" to="/requests"> Create Tutor Request       </Link>
            </div>
            <div class="col-md-5">
              <img class="featurette-image img-fluid mx-auto" src="./style/3.jpg" alt="Generic placeholder image" />
            </div>
          </div>

        
          <hr class="featurette-divider" />
          <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div class="col-md-5 p-lg-5 mx-auto my-5">
              <h1 class="display-4 font-weight-normal">About us</h1>
              <p class="lead font-weight-normal">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dol
                    or id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac,
                  vestibulum at eros. Praesent commodo cursus magna.</p>
              <span class="btn btn-outline-secondary" ><img class="rounded-circle" src="./style/Hamza.jpg" alt="Generic placeholder image" width="50" height="50" />  Contact: hamzaali2912@gmail.com</span>
            </div>
            <div class="product-device shadow-sm d-none d-md-block"></div>
          </div>
          <footer >
            <p class="text-center">&copy; Hamza Developers, Inc. &middot; <a href="#">All Rights Reserved</a></p>
          </footer>
        </main>
      );


    }

  }
}


function mapStateToProps(state) {
  return { posts: state.posts };
}



export default connect(mapStateToProps, { fetchPosts })(PostsMain);

/*ShowRatings() {
    var Tutors = JSON.parse(localStorage.getItem('Tutors'));
    var count = 0;
    var i = 0;
    Tutors.map((post) => {
      count = count + post.rating ;
      i++;
    });
    count = count/i;
    count = count + 1;
    Tutors.map((post) => {
      if(post.rating>count){
        var goto = `/posts/${post.id}`
        return(
          <div>
          <h1 class="display-6 font-weight-normal">{post.name}</h1>
            <p class="lead font-weight-normal">{post.content}</p>  
          <Link className="btn btn-info" to= {goto}> Show Profile >>     </Link>
           </div>
        );
      }
    });
  }*/


/*
<hr class="featurette-divider" />
            <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Top rated Tutors</h2>
              {this.ShowRatings.bind(this)}
            </div>
            </div>
            */
