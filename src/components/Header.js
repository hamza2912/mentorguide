import PropTypes from "prop-types";
import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Header extends Component {
    static propTypes = {
        active: PropTypes.string,
    }

    componentDidMount() {
        // var Logged = JSON.parse(localStorage.getItem('Logged'));
    }

    render() {
        var UserLogin = JSON.parse(localStorage.getItem('UserLogin'));
        console.log(UserLogin);

        let loginStatus = (
            <div className='d-flex align-items-center'>
                <Link className="btn btn-default" to="/sign">{'Sign In'}</Link>
            </div>
        )

        if (UserLogin) {
            loginStatus = (
                <div>{'Logged in'}</div>
            )
        }

        return (
            <header>
                <nav className="site-header fixed-top">
                    <div className="container d-flex flex-column flex-md-row justify-content-between">
                        <img src="/style/logooo.jpg"
                            alt="Generic placeholder image" width="100" height="62.5" />
                        <a className="myNav text-dark" href="/">{'Home'}</a>
                        <a className="myNav text-dark" href="/posts">{'Search'}</a>
                        <a className="myNav text-dark" href="/lectures">{'Lectures'}</a>
                        <a className="myNav text-dark" href="/create_request">{'Requests'}</a>
                        {loginStatus}
                    </div>
                </nav>
            </header>
        );
    }
}