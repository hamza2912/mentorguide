import axios from "axios";


export const FETCH_POSTS = "fetch_posts";

export const FETCH_POST = "fetch_post";

export const CREATE_POST = "create_post";

export const DELETE_POST = "delete_post";


const ROOT_URL = "http://reduxblog.herokuapp.com/api";

const API_KEY = "?key=PAPERCLIP1";

var posts = [];
var ID = 1;


export function fetchPosts() {

  //const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  var mentors = JSON.parse(localStorage.getItem('mentors'));

  return {
    type: FETCH_POSTS,
    payload: mentors
  };
}



export function createPost(values, callback) {
  values.id = ID;
  ID++;
  posts.push(values);
  localStorage.setItem('mentors', JSON.stringify(posts));
  callback();



  return {
    type: CREATE_POST,
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

//export default request;
//266409