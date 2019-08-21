import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { fetchPosts } from "../actions";

import AOS from 'aos';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMapMarkerAlt , faStar , faSearch , faArrowRight } from '@fortawesome/free-solid-svg-icons';


class SearchTutor extends Component {
  
  constructor(props) {
    super(props);
    this.state = { Area: "" , check: 1};
    this.handleChange = this.handleChange.bind(this);
    this.renderRatings = this.renderRatings.bind(this);

  }

  componentDidMount() {
    this.props.fetchPosts();
    AOS.init({
      duration : 1000
    })

  }

  renderRatings(rate, pclass, icoclass){

    if (rate > 1 && rate <= 2) {
      return (
        <p className={pclass}><span className='pr-1'>{rate}</span>
                      <FontAwesomeIcon className={icoclass} icon={ faStar }/>
                      <FontAwesomeIcon className={icoclass} icon={ faStar }/>
                      </p> 
      );
    }
    else if (rate > 2 && rate <= 3) {
      return (
        <p className={pclass}><span className='pr-1'>{rate}</span>
                      <FontAwesomeIcon className={icoclass} icon={ faStar }/>
                      <FontAwesomeIcon className={icoclass} icon={ faStar }/>
                      <FontAwesomeIcon className={icoclass} icon={ faStar }/>
                      </p> 
      );
    }
    else if (rate > 3 && rate <= 4 && rate > 4) {
      return (
        <p className={pclass}><span className='pr-1'>{rate}</span>
                      <FontAwesomeIcon className={icoclass} icon={ faStar }/>
                      <FontAwesomeIcon className={icoclass} icon={ faStar }/>
                      <FontAwesomeIcon className={icoclass} icon={ faStar }/>
                      <FontAwesomeIcon className={icoclass} icon={ faStar }/>
                      </p> 
      );
    }
    else {
        return (
          <p className={pclass}><span className='pr-1'>{rate}</span>
          <FontAwesomeIcon className={icoclass} icon={ faStar }/>
          </p>
        );  
    }


  }
  
  renderPosts() {


    if (!this.props.posts) {
        return <div>Loading...</div>;
    }

    else if (this.state.Area !== "") {
      
        return _.map(this.props.posts, post => {
      
            if (post.location === this.state.Area) {
              var ProfilePage = `/posts/${post._id}`;
                return (
                    <div className="dp pb-5">        
                      <img   src="/style/dp.png" alt="Generic placeholder image" width="35" height="35" />
                      <p className="dp-name" >{post.name}</p>
                      {this.renderRatings(post.rating, "dp-name2", 'stttt' )}
                      <a className="dp-nameS" href={ProfilePage} >Visit Profile
                      <FontAwesomeIcon className='stttt3' icon={ faArrowRight }/>
                    </a>
                      <p className="dp-body" >{post.description}</p>
                  </div>
                );
            }
        });
    } 
    return (<p className="py-3 text-muted font-ylish">Select your area above to get list of tutors in your area</p>); 
  }

  handleChange(event) {
  this.setState({Area: event.target.value});
  }

  render() {
      return (

      <div className="bg-bowl">       
        
      <header>
            <nav className="site-header fixed-top py-1">
              <div className="container d-flex flex-column flex-md-row justify-content-between">
                <img  src="/style/logooo.jpg"
                alt="Generic placeholder image" width="100" height="62.5" />
                <a className="myNav text-dark" href="/">Home</a>
                <a className="myNav text-dark" href="/posts">Search</a>
                <a className="myNav text-dark" href="/lectures">Lectures</a>
                <a className="myNav text-dark" href="/create_request">Requests</a>
                <Link className="bluebutton boorder text-light font-ylish" to="/sign">Sign In</Link>
              </div>
            </nav>
        </header>
        <div className="row">
          <nav  data-aos='fade-right' className="col-md-2 d-none d-md-block sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                  <span data-feather="home"></span>Tutors' Gallery <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <form className="form-control-dark my-2 my-lg-0 mrg ml-2 pt-2">
                  <label for="thissearch" className="sr-only"><FontAwesomeIcon icon={ faSearch }/>
                  <span className='pl-1'>Hii</span></label>
                    <select  className="form-search" id="thissearch" name="thissearch" onChange = {this.handleChange}>
                      <option>Find your area</option> <option>Baldia</option> <option>Buffer-Zone</option> <option>Defence</option>  
                      <option>Fedral-B-Area</option><option>Gadap</option> <option>Gulberg</option> <option>Gulshan</option> 
                      <option>Gulshan-e-Meymar</option><option>Jamsh1ed Town</option> 
                      <option>Johar</option> <option>Korangi</option> <option>Landhi</option> <option>Liaquatabad</option> 
                      <option>Lyari</option> <option>Malir</option> <option>New Karchi</option> <option>Nazimabad</option>
                      <option>Orangi Town</option><option>Saddar</option><option>Shah Faisal Town</option>
                    </select>
                  </form>
                </li>
              </ul>
            </div>
          </nav>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <h2 className="Sans21 pt-8 pl-5 text-light mb-0" >Search your favorite Tutors</h2>
          <p className="pl-5 text-info loca" >
          <FontAwesomeIcon icon={ faMapMarkerAlt }/>
          <span className='pl-1'>Karachi, Pakistan</span></p>
            <div className="myBox mt-4 ml-3">
              <h6 className="smhd pb-4">Tutors</h6> 
                 {this.renderPosts()}
            </div>      
          </main>
        </div>      
      </div> 
    );  
  }

}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(SearchTutor);