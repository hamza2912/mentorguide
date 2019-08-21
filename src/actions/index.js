import axios from "axios";

export const FETCH_POSTS = "fetch_posts";

export const FETCH_POST = "fetch_post";

export const CREATE_POST = "create_post";

export const UPDATE_POST = "update_post";

export const DELETE_POST = "delete_post";

const ROOT_URL = "http://localhost:8000";

var ID = 1;
var rating = 0;

//Creating  Tutor Account
export function createPost(values, callback) {

  values.userId = ID;
  values.rating = rating;
  ID++;

  const request = axios
    .post(`${ROOT_URL}/newmentor`, values)
    .then(() => callback());

  return {
      type: CREATE_POST,
      payload: request
    };
}

//Fetching All tutor Accounts
export function fetchPosts() {

  const request = axios.get(`${ROOT_URL}/mentorposts`);

  return {
      type: FETCH_POSTS,
      payload: request
    };
}

//Deleting tutor account
export function deletePost(id) {

  const request = axios
      .delete(`${ROOT_URL}/posts/:${id}`);
  
  
  return {
      type: DELETE_POST,
      payload: id
    };
}

//creating User Accounttt
export function createUsers(values, callback) {

  const request = axios
      .post(`${ROOT_URL}/newuser`, values)
      .then(() => callback());

  return {
      type: CREATE_POST,
      payload: request
    };
}

//getting all user accounts
export function fetchUsers() {

  const request = axios.get(`${ROOT_URL}/userposts`);

  return {
      type: FETCH_POSTS,
      payload: request
    };
}

//getting all tutor requests
export function fetchTutorRequests() {

  const request = axios.get(`${ROOT_URL}/allchats`);

  return {
    type: FETCH_POSTS,
    payload: request
    };
}

//create tutor requests
export function createTutorRequest(values) {

  const request = axios
        .post(`${ROOT_URL}/newTutorRequest`, values);

  return {
    type: CREATE_POST,
    payload: request
    };
}

//Add messeges into tutor account
export function addMesseges(id, values) {

  const request = axios.put(`${ROOT_URL}/mentorMesseges/:${id}`,values);

  return {
      type: UPDATE_POST,
      payload: request
    };
}

//Add comments into tutor account
export function addComments(id, Comments) {

    const request = axios.put(`${ROOT_URL}/mentorComments/:${id}`, Comments);

  return {
        type: UPDATE_POST,
        payload: request
    };
}

//Add ratings
export function addRatings(id, rating) {

  console.log(rating);

  const request = axios.put(`${ROOT_URL}/tutorRating/:${id}`, rating);

return {
      type: UPDATE_POST,
      payload: request
  };
}

/*import axios from "axios";


export const FETCH_POSTS = "fetch_posts";

export const FETCH_POST = "fetch_post";

export const CREATE_POST = "create_post";

export const DELETE_POST = "delete_post";


const ROOT_URL = "localhost:3000";

const API_KEY = "?key=PAPERCLIP1";

var posts = [];
var comments = [];
var messeges = [];
var ID = 1;

    
export function fetchPost(id) {

const request = axios.get(`${ROOT_URL}/mentorposts:noteId`);


return {
    type: FETCH_POST,
    payload: request
  };
}

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
  values.rating = 1;
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

const request = axios.get(`${ROOT_URL}/posts/${id}`);


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
}*/
