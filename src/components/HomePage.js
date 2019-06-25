import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts } from "../actions";

import AOS from 'aos';


class HomePage extends Component {

  Signout() {
    var UserLogin = false;
    var Logged = false;
    localStorage.setItem('UserLogin', JSON.stringify(UserLogin));
    localStorage.setItem('Logged', JSON.stringify(Logged));
    this.props.history.push("/");
  }

  componentDidMount() {
    AOS.init({
      duration : 2000
    })
  }

  render() {
    
    var Logged = JSON.parse(localStorage.getItem('Logged'));
    var UserLogin = JSON.parse(localStorage.getItem('UserLogin'));
    var ProfilePage = JSON.parse(localStorage.getItem('ProfilePage'));
    
    if ((Logged === false && UserLogin === false) || Logged === null || UserLogin === null) {
      return (
        <main role="main">
          <header>
            <nav className="site-header fixed-top py-1">
              <div className="container d-flex flex-column flex-md-row justify-content-between">
                <img  className="navbar-brand" src="./style/tutorlogo1.png"
                alt="Generic placeholder image" width="120" height="50" />
                <span className="py-2 d-md-inline-block text-muted" href="#">Home</span>
                <a className="py-2 d-none d-md-inline-block" href="/sign_user">Search</a>
                <a className="py-2 d-none d-md-inline-block" href="/create">Requests</a>
                <a className="py-2 d-none d-md-inline-block" href="/sign">Sign in</a>
              </div>
            </nav>
          </header>
          
          <div className="main-color">

            <div className="carousel-item active">
                  <div className="container">
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="carousel-caption text-left">
                      <h2>Tutor Guide</h2>
                      <p>Now get to know all about Tutors in your city while sitting at your home.</p>
                      <Link className="btn btn-lg btn-warning text-light" to="/create"> Get Started   </Link>
                    </div>
                  </div>
            </div>

            <div className="container">
            
                <hr className="featurette-divider" />
                <div className="row featurette">
                  <div data-aos='fade-up-right' className="col-md-7">
                    <h2 className="featurette-heading text-light">Search for a Tutor, <span className="text-danger">more than thousands of Tutors.</span></h2>
                    <p className="text-light">We have the best Tutors and tutors throughout the city. You can find Tutors available in your areas and could reach them easily.</p>
                    <Link className="btn btn-lg btn-primary" to="/sign_user"> Search Tutor       </Link>
                  </div>
                  <div data-aos='fade-up-left' className="col-md-5">
                  <img className="featurette-image img-fluid mx-auto" src="./style/search.png" alt="Generic placeholder image" />
                  </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                  <div data-aos='fade-up-right' className="col-md-7 order-md-2">
                    <h2 className="featurette-heading text-light">Become a Tutor, <span className="text-danger">See for yourself.</span></h2>
                    <p className="text-light">You can easily get Tutors and tutions while siiting at home. All you need
                      is to submit a short form here and become part of our Tutors team. We will show your pofile to our users
                      and they would respond to you if they find you suitable for them</p>
                    <Link className="btn btn-lg btn-primary" to="/create_tutor"> Become Tutor         </Link>
                  </div>
                  <div data-aos='fade-up-left' className="col-md-5 order-md-1">
                    <img className="featurette-image img-fluid mx-auto" src="./style/tutor.png" alt="Generic placeholder image" />
                  </div>
                </div>

                <hr className="featurette-divider" />
                <div className="row featurette">
                  <div data-aos='fade-up-right' className="col-md-7">
                    <h2 className="featurette-heading text-light">Do the needful, <span className="text-danger">post specific Tutor requests</span></h2>
                    <p className="text-light">Create your Tutor request by adding details about your requirments and conditions. We
                      will show it to our Tutors and they will approach you by your contact details if they find themselves appropraite.</p>
                    <Link className="btn btn-lg btn-primary" to="/sign_user"> Create Request       </Link>
                  </div>
                  <div  data-aos='fade-up-left' className="col-md-5">
                    <img className="featurette-image img-fluid mx-auto" src="./style/request.png" alt="Generic placeholder image" />
                  </div>
                </div>
                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center ">
                  <div data-aos='zoom-in' className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal text-light">About us</h1>
                    <p className="lead font-weight-normal">We at Tutor guide strive to create an educational network
                    which can promote education by linking Tutors with students</p>
                    <span data-aos='zoom-in' className="btn btn-outline-secondary text-light" ><img className="rounded-circle" src="./style/email.png"
                    alt="Generic placeholder image" width="50" height="50" />  shamzaali.nq@gmail.com</span>
                  </div>
                  <div className="product-device shadow-sm d-none d-md-block"></div>
                </div>
            </div>
            <footer className="footer-color">
                <p className="text-center text-light">&copy; Pixiv Studios, Inc. &middot; <a href="#">All Rights Reserved</a></p>
            </footer>
          </div>
        </main>
      );
    }
    else if (Logged === true) {
      return (
        <main role="main">
          <header>
            <nav className="site-header fixed-top py-1">
              <div className="container d-flex flex-column flex-md-row justify-content-between">
                <img  className="navbar-brand" src="./style/tutorlogo1.png"
                alt="Generic placeholder image" width="120" height="50" />
                <span className="py-2 d-md-inline-block text-muted" href="#">Home</span>
                <a className="py-2 d-none d-md-inline-block" href="/posts">Search</a>
                <a className="py-2 d-none d-md-inline-block" href="/checkrequests">Requests</a>
                <a className="py-2 d-none d-md-inline-block" href={ProfilePage}>My Profile</a>
              </div>
            </nav>
          </header>
          
          <div className="main-color">

            <div className="carousel-item active">
                  <div className="container">
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="carousel-caption text-left">
                      <h2>Tutor Guide</h2>
                      <p>Now get to know all about Tutors in your city while sitting at your home.</p>
                      <Link className="btn btn-lg btn-warning text-light" to="/create"> Get Started   </Link>
                    </div>
                  </div>
            </div>

            <div className="container">
              
                <hr className="featurette-divider" />
                <div className="row featurette">
                  <div data-aos='fade-up-right' className="col-md-7">
                    <h2 className="featurette-heading text-light">Search for a Tutor, <span className="text-danger">more than thousands of Tutors.</span></h2>
                    <p className="text-light">We have the best Tutors and tutors throughout the city. You can find Tutors available in your areas and could reach them easily.</p>
                    <Link className="btn btn-lg btn-primary" to="/posts"> Search Tutor       </Link>
                  </div>
                  <div data-aos='fade-up-left' className="col-md-5">
                    <img className="featurette-image img-fluid mx-auto" src="./style/search.png" alt="Generic placeholder image" />
                  </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                  <div data-aos='fade-up-right' className="col-md-7 order-md-2">
                    <h2 className="featurette-heading text-light">Become a Tutor, <span className="text-danger">See for yourself.</span></h2>
                    <p className="text-light">You can easily get Tutors and tutions while siiting at home. All you need
                    is to submit a short form here and become part of our Tutors team. We will show your pofile to our users
                and they would respond to you if they find you suitable for them</p>
                    <Link className="btn btn-lg btn-primary" to="/create_tutor"> Become Tutor         </Link>
                  </div>
                  <div data-aos='fade-up-left' className="col-md-5 order-md-1">
                    <img className="featurette-image img-fluid mx-auto" src="./style/tutor.png" alt="Generic placeholder image" />
                  </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                  <div data-aos='fade-up-right' className="col-md-7">
                    <h2 className="featurette-heading text-light">Do the needful, <span className="text-danger">post specific Tutor requests</span></h2>
                    <p className="text-light">Create your Tutor request by adding details about your requirments and conditions. We
                will show it to our Tutors and they will approach you by your contact details if they find themselves appropraite.</p>
                    <Link className="btn btn-lg btn-primary" to="/create_request"> Create Request       </Link>
                  </div>
                  <div  data-aos='fade-up-left' className="col-md-5">
                    <img className="featurette-image img-fluid mx-auto" src="./style/request.png" alt="Generic placeholder image" />
                  </div>
                </div>


                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center ">
                  <div data-aos='zoom-in' className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal text-light">About us</h1>
                    <p className="lead font-weight-normal">We at Tutor guide strive to create an educational network
                    which can promote education by linking Tutors with students</p>
                    <span data-aos='zoom-in' className="btn btn-outline-secondary text-light" ><img className="rounded-circle" src="./style/email.png"
                    alt="Generic placeholder image" width="50" height="50" />  shamzaali.nq@gmail.com</span>
                  </div>
                  <div className="product-device shadow-sm d-none d-md-block"></div>
                </div>
            </div>
            <footer className="footer-color">
                <p className="text-center text-light">&copy; Pixiv Studios, Inc. &middot; <a href="#">All Rights Reserved</a></p>
            </footer>
        </div>
      </main>
      );
    }
    else if (UserLogin === true) {
      return (
        <main role="main">
          <header>
            <nav className="site-header fixed-top py-1">
              <div className="container d-flex flex-column flex-md-row justify-content-between">
                <img  className="navbar-brand" src="./style/tutorlogo1.png"
                alt="Generic placeholder image" width="120" height="50" />
                <span className="py-2 d-md-inline-block text-muted" href="#">Home</span>
                <a className="py-2 d-none d-md-inline-block" href="/posts">Search</a>
                <a className="py-2 d-none d-md-inline-block" href="/create_request">Requests</a>
                <button className="btn btn-outline-dark py-2 d-none d-md-inline-block" onClick={this.Signout.bind(this)}>Sign out</button>
              </div>
            </nav>
          </header>
          
          <div className="main-color">

            <div className="carousel-item active">
                  <div className="container">
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="carousel-caption text-left">
                      <h2>Tutor Guide</h2>
                      <p>Now get to know all about Tutors in your city while sitting at your home.</p>
                      <Link className="btn btn-lg btn-warning text-light" to="/create"> Get Started   </Link>
                    </div>
                  </div>
            </div>

            <div className="container">

                <hr className="featurette-divider" />
                <div className="row featurette">
                  <div data-aos='fade-up-right' className="col-md-7">
                    <h2 className="featurette-heading text-light">Search for a Tutor, <span className="text-danger">more than thousands of Tutors.</span></h2>
                    <p className="text-light">We have the best Tutors and tutors throughout the city. You can find Tutors available in your areas and could reach them easily.</p>
                    <Link className="btn btn-lg btn-primary" to="/posts"> Search Tutor       </Link>
                  </div>
                  <div data-aos='fade-up-left' className="col-md-5">
                    <img className="featurette-image img-fluid mx-auto" src="./style/search.png" alt="Generic placeholder image" />
                  </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                  <div data-aos='fade-up-right' className="col-md-7 order-md-2">
                    <h2 className="featurette-heading text-light">Become a Tutor, <span className="text-danger">See for yourself.</span></h2>
                    <p className="text-light">You can easily get Tutors and tutions while siiting at home. All you need
                       is to submit a short form here and become part of our Tutors team. We will show your pofile to our users
                       and they would respond to you if they find you suitable for them</p>
                    <Link className="btn btn-lg btn-primary" to="/create_tutor"> Become Tutor         </Link>
                  </div>
                  <div data-aos='fade-up-left' className="col-md-5 order-md-1">
                    <img className="featurette-image img-fluid mx-auto" src="./style/tutor.png" alt="Generic placeholder image" />
                  </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                  <div data-aos='fade-up-right' className="col-md-7">
                    <h2 className="featurette-heading text-light">Do the needful, <span className="text-danger">post specific Tutor requests</span></h2>
                    <p className="text-light">Create your Tutor request by adding details about your requirments and conditions. We
                        will show it to our Tutors and they will approach you by your contact details if they find themselves appropraite.</p>
                    <Link className="btn btn-lg btn-primary" to="/create_request"> Create Request       </Link>
                  </div>
                  <div  data-aos='fade-up-left' className="col-md-5">
                    <img className="featurette-image img-fluid mx-auto" src="./style/request.png" alt="Generic placeholder image" />
                  </div>
              </div>
              <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center ">
                <div data-aos='zoom-in' className="col-md-5 p-lg-5 mx-auto my-5">
                  <h1 className="display-4 font-weight-normal text-light">About us</h1>
                  <p className="lead font-weight-normal">We at Tutor guide strive to create an educational network
                  which can promote education by linking Tutors with students</p>
                  <span data-aos='zoom-in' className="btn btn-outline-secondary text-light" ><img className="rounded-circle" src="./style/email.png"
                  alt="Generic placeholder image" width="50" height="50" />  shamzaali.nq@gmail.com</span>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
              </div>
            </div>
            <footer className="footer-color">
              <p className="text-center text-light">&copy; Pixiv Studios, Inc. &middot; <a href="#">All Rights Reserved</a></p>
            </footer>
          </div>
      </main>
      );
    }
  }

}


function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(HomePage);

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
          <h1 className="display-6 font-weight-normal">{post.name}</h1>
            <p className="lead font-weight-normal">{post.content}</p>
          <Link className="btn btn-info" to= {goto}> Show Profile >>     </Link>
           </div>
        );
      }
    });
  }*/


/*
<hr className="featurette-divider" />
            <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Top rated Tutors</h2>
              {this.ShowRatings.bind(this)}
            </div>
            </div>
            */