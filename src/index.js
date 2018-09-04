import React from "react";

import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { createStore, applyMiddleware } from "redux";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import promise from "redux-promise";

import reducers from "./reducers";

import PostsIndex from "./components/posts_index";

import SignIn from "./components/Sign";
import UserSignIn from "./components/UserSign";
import MainSignIn from "./components/MainSign";
import ProfileShow from "./components/profile";
import Requests from "./components/chats";
import checkRequests from "./components/chats2";

import PostsNew from "./components/posts_new";
import UserNew from "./components/UserNew";
import MainNew from "./components/MainNew";
import Success from "./components/success";
import Success2 from "./components/success2";

import PostsShow from "./components/posts_show";
import PostsMain from "./components/posts_main";
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  
<Provider store={createStoreWithMiddleware(reducers)}>
    
<BrowserRouter>
      

        
<Switch>
          
<Route path="/posts/new" component={PostsNew} />
<Route path="/usernew" component={UserNew} />
<Route path="/mainnew" component={MainNew} />         
<Route path="/posts/:id" component={PostsShow} />
<Route path="/posts" component={PostsIndex} />
<Route path="/sign" component={SignIn} />
<Route path="/Usersign" component={UserSignIn} />
<Route path="/Mainsign" component={MainSignIn} />
<Route path="/profile/:id" component={ProfileShow} />
<Route path="/success" component={Success} />
<Route path="/success2" component={Success2} />
<Route path="/requests" component={Requests} />
<Route path="/checkrequests" component={checkRequests} />
<Route path="/" component={PostsMain} />

        
</Switch>
      

   
 </BrowserRouter>
 
 </Provider>,
  
document.querySelector(".container")
);
