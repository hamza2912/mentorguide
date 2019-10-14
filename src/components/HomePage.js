import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import Header from "./Header";

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

  checkSign() {
    var Logged = JSON.parse(localStorage.getItem('Logged'));
    var UserLogin = JSON.parse(localStorage.getItem('UserLogin'));
    if(Logged || UserLogin ){
        return (this.props.history.push("/posts"));
    }
    else{
      return (this.props.history.push("/sign"));
    }
  }

  componentDidMount() {
    AOS.init({
      duration : 2000
    })
  }
  

  render() {
  
    var ProfilePage = JSON.parse(localStorage.getItem('ProfilePage'));

   // if ((Logged === false && UserLogin === false) || Logged === null || UserLogin === null) {
      return (
        <main role="main">

          <Header />

          <div className="main-color">

            <div className="intro-section">
              <div className="container">
                <h1 data-aos="fade-right" data-aos-anchor-placement="top-bottom" className='main-heading'>
                  Tutor<br />Guide
                </h1>
                <p data-aos="fade-right" data-aos-anchor-placement="top-bottom" className="tebox">Now get tutors in your city while sitting at your home.</p>
                <Link data-aos="fade-right" data-aos-anchor-placement="top-bottom" className="btn btn-default btn-lg" to="/create"> Get Started</Link>
                <img src="/images/mac.png" className='intro-section__image' alt="Generic placeholder image" width="1000" height="600" />
              </div>
            </div>

            <div className="bgSearch ">
              <div className="container">
                <div className="separator" align="center">
                  <div  data-aos="fade-up" data-aos-duration="500">
                    <h2 className="Sans2" >Search your favorite Tutors</h2>
                    <p className="text-muted margin-bottom--x2">We have thousand of tutors avvailable. You can find Tutors nearby your areas.</p>
                    <button className="btn btn-secondary" onClick={this.checkSign.bind(this)}> Search Now       </button>
                  </div>
                  <div data-aos='zoom-in'>
                  <img className="featurette-image img-fluid mx-auto" src="/images/maps.png" width='700' height='350' alt="Generic placeholder image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bgGrey">
              <div className="container">
                <div align="center">
                  <div  data-aos-delay='1000' className ='separator2' data-aos="fade-up" data-aos-duration="500">
                    <h2 className="Sans2 text-center" >Create your own Tutor profile</h2>
                    <p className="text-muted">We have thousand of tutors avvailable. You can find Tutors nearby your areas.</p>
                  </div>
                  <div className="row comp1 margin-top--x4 margin-bottom--x2">
                        <div data-aos-delay='1000' data-aos="zoom-in"  data-aos-duration="1000" align="center" className="col-lg-4">
                          <img className="rounded-circle" src="./images/SignUp.png"
                            alt="Generic placeholder image" width="140" height="140" />
                          <p className="text-muted text-center smcp">Create your tutor account </p>
                        </div>
                        <div data-aos-delay='1500'  data-aos="zoom-in"  data-aos-duration="1000"  align="center" className="col-lg-4">
                          <img className="rounded-circle" src="./images/toter.png"
                            alt="Generic placeholder image" width="140" height="140" />
                          <p className="text-muted text-center smcp">Visit your profile </p>
                        </div>
                        <div data-aos-delay='2000' data-aos="zoom-in" data-aos-duration="1000" align="center" className="col-lg-4">
                          <img className="rounded-circle" src="./images/mess.png"
                            alt="Generic placeholder image" width="140" height="140" />
                          <p className="text-muted text-center smcp">Check messegs instantly </p>
                        </div>
                   </div>
                  <div className='separator4'>
                   <Link className="btn btn-secondary" to="/create_tutor"> Create Now       </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='bgScreen'>
              <div className='container'>
                <div className="row featurette">
                  <div data-aos='fade-up'data-aos-duration="500" className="col-md-7">
                    <h2 className="featurette-heading Sans2">Tutor Requests</h2>
                    <p className="text-muted">We have the best Tutors and tutors throughout the city. You can find Tutors available in your areas and could reach them easily.</p>
                    <Link className="btn btn-secondary" to="/create_request"> Post Now </Link>
                  </div>
                  <div data-aos-delay='2000' data-aos='fade-up-left' className="col-md-5">
                    <img className="featurette-image img-fluid mx-auto mt-5" src="./images/screen1.png" alt="Generic placeholder image" />
                  </div>
                </div>
              </div>
            </div>
            <div className='bgfooter'>
            <footer className="container py-5">
              <div className="row">
                <div className="col-12 col-md">
                <img  src="/images/logooo.png"
                alt="Generic placeholder image" width="200" height="125" />
                </div>
                <div className="col-6 col-md">
                  <h5>Features</h5>
                  <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Search tutor</a></li>
                    <li><a className="text-muted" href="#">Post request</a></li>
                    <li><a className="text-muted" href="#">Watch lectures</a></li>
                    <li><a className="text-muted" href="#">Visit tutor profiles</a></li>
                  </ul>
                </div>
                <div className="col-6 col-md">
                  <h5>Account </h5>
                  <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Create tutor account</a></li>
                    <li><a className="text-muted" href="#">Create user account</a></li>
                    <li><a className="text-muted" href="#">Check tutor rquests</a></li>
                    <li><a className="text-muted" href="#">Check messeges</a></li>
                  </ul>
                </div>
                <div className="col-6 col-md">
                  <h5>Log In</h5>
                  <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Main Log in</a></li>
                    <li><a className="text-muted" href="#">Tutor login</a></li>
                    <li><a className="text-muted" href="#">User login</a></li>
                    <li><a className="text-muted" href="#">Create account</a></li>
                  </ul>
                </div>
                <div className="col-6 col-md">
                  <h5>About</h5>
                  <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Team</a></li>
                    <li><a className="text-muted" href="#">Locations</a></li>
                    <li><a className="text-muted" href="#">Privacy</a></li>
                    <li><a className="text-muted" href="#">Terms</a></li>
                  </ul>
                </div>
              </div>
            </footer>
            </div>
          </div>
        </main>
      );
  }

}


function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(HomePage);
