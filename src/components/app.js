import React, { Component } from 'react';


export default class App extends Component {
  
render() {
    return (
      
<div>
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand mr-auto mr-lg-0" href="">Mentor Guide</a>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            </li>
            <li class="nav-item active">
              <a class="nav-link disabled" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>
          <form class="form-inline mt-2 mt-md-0">
            <a className="btn btn-outline-info my-2 my-sm-0" to=""> Search      </a>
            <a className="btn btn-outline-info my-2 my-sm-0" to=""> Log in      </a>
          </form>
        </div>
      </nav>  

</div>
    );
  }
}
