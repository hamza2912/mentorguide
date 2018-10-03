import axios from "axios";


export const FETCH_POSTS = "fetch_posts";

export const FETCH_POST = "fetch_post";

export const CREATE_POST = "create_post";

export const DELETE_POST = "delete_post";


const ROOT_URL = "http://reduxblog.herokuapp.com/api";

const API_KEY = "?key=PAPERCLIP1";

var posts = [];
var comments = [];
var messeges = [];
var ID = 1;


export function fetchPosts() {
  
var mentors = JSON.parse(localStorage.getItem('mentors'));
//console.log(mentors);

  
return {
    type: FETCH_POSTS,
    payload: mentors
  };
}



export function createPost(values,callback) {
  
var mentors = JSON.parse(localStorage.getItem('mentors'));
if(mentors!== null){
if (mentors.length!== 0){
  posts = mentors;
  ID = mentors.length+1;
  values.id = `${ID}`;
  values.comments = comments;
  values.messeges = messeges;
  posts.push(values);
  localStorage.setItem('mentors', JSON.stringify(posts));
  var Logged = true;
  var ProfilePage = `/profile/${values.id}`;
  localStorage.setItem('ProfilePage', JSON.stringify(ProfilePage));
  localStorage.setItem('Logged', JSON.stringify(Logged));
  callback();
  
}
}
else if(mentors=== null) {
values.id = `${ID}`;
ID++;
values.comments = comments;
posts.push(values);
localStorage.setItem('mentors', JSON.stringify(posts));
var Logged = true;
var ProfilePage = `/profile/${post.id}`;
localStorage.setItem('ProfilePage', JSON.stringify(ProfilePage));
localStorage.setItem('Logged', JSON.stringify(Logged));
callback();
}
  
return {
    type: CREATE_POST,
    payload: values
  };
}

export function createPost2(values,callback) {
  
  var mentors = JSON.parse(localStorage.getItem('users'));
  if(mentors!== null){
  if (mentors.length!== 0){
    posts = mentors;
    ID = mentors.length+1;
    values.id = `${ID}`;
    posts.push(values);
    localStorage.setItem('users', JSON.stringify(posts));
    var UserLogin = true;
    localStorage.setItem('UserLogin', JSON.stringify(UserLogin));
    callback();
    
  }
  }
  else if(mentors=== null) {
  values.id = `${ID}`;
  ID++;
  posts.push(values);
  localStorage.setItem('users', JSON.stringify(posts));
  var UserLogin = true;
  localStorage.setItem('UserLogin', JSON.stringify(UserLogin));
  callback();
  }
  return {
    payload: values
  };
    
  }



export function fetchPost(id) {
  
const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  
return {
    type: FETCH_POST,
    payload: request
  };
}



export function deletePost(id, callback) {
  
const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  
return {
    type: DELETE_POST,
    payload: id
  };
}
