import React from "react";

import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { createStore, applyMiddleware } from "redux";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import promise from "redux-promise";

import reducers from "./reducers";

//Importing Pages
import SearchTutor from "./components/SearchTutor";
import TutorSignIn from "./components/TutorSignIn";
import UserSignIn from "./components/UserSign";
import SignIn from "./components/SignIn";
import ProfileShow from "./components/profile";
import CreateRequest from "./components/CreateRequest";
import checkRequests from "./components/checkRequests";
import CreateTutor from "./components/CreateTutor";
import CreateUser from "./components/CreateUser";
import CreateAccount from "./components/CreateAccount";
import Success from "./components/success";
import Success2 from "./components/success2";
import Inbox from "./components/inbox";
import PostsShow from "./components/posts_show";
import HomePage from "./components/HomePage";
import Lectures from "./components/Lectures";


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(

<Provider store={createStoreWithMiddleware(reducers)}>

<BrowserRouter>

<Switch>

<Route path="/create_tutor" component={CreateTutor} />
<Route path="/create_user" component={CreateUser} />
<Route path="/create" component={CreateAccount} />
<Route path="/posts/:id" component={PostsShow} />
<Route path="/posts" component={SearchTutor} />
<Route path="/sign_tutor" component={TutorSignIn} />
<Route path="/sign_user" component={UserSignIn} />
<Route path="/sign" component={SignIn} />
<Route path="/profile/:id" component={ProfileShow}/>
<Route path="/success" component={Success} />
<Route path="/success2" component={Success2} />
<Route path="/create_request" component={CreateRequest} />
<Route path="/lectures" component={Lectures} />
<Route path="/checkrequests" component={checkRequests} />
<Route path="/inbox/:id" component={Inbox} />
<Route path="/" component={HomePage} />

</Switch>

 </BrowserRouter>

 </Provider>,

document.querySelector(".myapp-container")
);