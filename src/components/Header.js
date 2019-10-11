import PropTypes from "prop-types";
import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Header extends Component {
    static propTypes = {
        active: PropTypes.string,
    }

    componentDidMount() {
    }

    Signout() {
        var UserLogin = false;
        var Logged = false;
        localStorage.setItem('UserLogin', JSON.stringify(UserLogin));
        localStorage.setItem('Logged', JSON.stringify(Logged));
        this.props.history.push("/");
      }

    render() {

        var Logged = JSON.parse(localStorage.getItem('Logged'));
        var UserLogin = JSON.parse(localStorage.getItem('UserLogin'));
        var ProfilePage = JSON.parse(localStorage.getItem('ProfilePage'));

        let loginStatus = (
            <div className='d-flex align-items-center'>
                <Link className="btn btn-default" to="/sign">{'Sign In'}</Link>
            </div>
        )

        if (Logged === true) {
            loginStatus = (
                <div className="dropdown d-flex align-items-center ">
                  <span>. . .</span>
                  <div className="dropdown-content">
                  <ul>
                    <li>
                      <button className="btn btn-secondary  py-2 d-none d-md-inline-block" onClick={this.Signout.bind(this)}>Sign out</button>
                    </li>
                    <li>
                      <a className=" py-2 d-none d-md-inline-block" href={ProfilePage}>Profile</a>
                    </li>
                  </ul>
                  </div>
                </div>
            )
        }

        else if (UserLogin === true) {
            loginStatus = (
                <div className="dropdown d-flex align-items-center ">
                <span>. . .</span>
                <div className="dropdown-content">
                <ul>
                  <li>
                    <button className="btn btn-secondary  py-2 d-none d-md-inline-block" onClick={this.Signout.bind(this)}>Sign out</button>
                  </li>
                </ul>
                </div>
              </div>
            )

        }




        return (
            <header className='fixed-top'>
                  <div className="container">
                      <img src="/images/logooo.jpg"
                          alt="Generic placeholder image" width="100" height="62.5" />
                      <a className="myNav text-dark" href="/">{'Home'}</a>
                      <a className="myNav text-dark" href="/posts">{'Search'}</a>
                      <a className="myNav text-dark" href="/lectures">{'Lectures'}</a>
                      <a className="myNav text-dark" href="/create_request">{'Requests'}</a>
                      {loginStatus}
                  </div>
            </header>
        );
    }
}