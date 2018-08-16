import React from "react";

import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { createStore, applyMiddleware } from "redux";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import promise from "redux-promise";

import reducers from "./reducers";

import PostsIndex from "./components/posts_index";
import SignIn from "./components/Sign";
import ProfileShow from "./components/profile";
import Requests from "./components/chats";
import checkRequests from "./components/chats2";

import PostsNew from "./components/posts_new";
import Success from "./components/success";

import PostsShow from "./components/posts_show";
import PostsMain from "./components/posts_main";
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  
<Provider store={createStoreWithMiddleware(reducers)}>
    
<BrowserRouter>
      

        
<Switch>
          
<Route path="/posts/new" component={PostsNew} />
          
<Route path="/posts/:id" component={PostsShow} />
<Route path="/posts" component={PostsIndex} />
<Route path="/sign" component={SignIn} />
<Route path="/profile/:id" component={ProfileShow} />
<Route path="/success" component={Success} />
<Route path="/requests" component={Requests} />
<Route path="/checkrequests" component={checkRequests} />
<Route path="/" component={PostsMain} />
        
</Switch>
      

   
 </BrowserRouter>
 
 </Provider>,
  
document.querySelector(".container")
);
