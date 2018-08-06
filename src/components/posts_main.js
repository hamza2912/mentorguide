import _ from "lodash";

import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";


class PostsMain extends Component {
  


render() {
    return (
  
    
<div> 
<div className="main">

<h4 className="main1">WELCOME TO METOR GUIDE</h4>
</div> 
<div className="text-xs-center">
         
<Link className="btn btn-primary" to="/posts/new">
            Become a mentor         </Link>

<Link className="btn btn-primary" to="/posts">
            Search for a mentor       </Link>
          
</div>
   
<div className="main">

<h4>About us</h4>
</div> 
<div className="main">

<p>Now you dont have to be worried about searching or getting tutions and guidance. It's all on your way while sitting at your home. 
Mentor Guide provides you with two great opportunities. Either you can search for the best mentors and tutors all over the city.
You can find best one in your own areas. Or you can easily get mentors and tutions while siiting at home. All you need
is to submit a short form here and become part of our mentors team. We will show your pofile to our users
and they would respond to you if they find you suitable for them.</p>
</div>     
 </div>
 
  );
  }
}


function mapStateToProps(state) {
  return { posts: state.posts };
}



export default connect(mapStateToProps, { fetchPosts })(PostsMain);
