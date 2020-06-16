import axios from 'axios';

const api = axios.create({
  // baseURL: "http://localhost:3000"
  baseURL: "https://guarded-sea-27397.herokuapp.com"
})

// LOGIN
export const loginUser = async (loginData) => {
  try {
    const resp = await api.post('/auth/login', loginData);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
    localStorage.setItem('authToken', resp.data.auth_token);
    localStorage.setItem('id', resp.data.user.id);
    localStorage.setItem('name', resp.data.user.name);
    localStorage.setItem('email', resp.data.user.email);
    localStorage.setItem('location', resp.data.user.location);
    localStorage.setItem('position', resp.data.user.position);
    localStorage.setItem('fun_facts', resp.data.user.fun_facts);
    localStorage.setItem('first_img', resp.data.user.first_img);
    localStorage.setItem('second_img', resp.data.user.second_img);
    return resp.data.user;
  } catch (e) {
    if (e.response && e.response.status === 401) {
      return { errorMessage: `Email or password is incorrect` };
    }
  }
}

// REGISTER
export const registerUser = async (registerData) => {
  try {
    const resp = await api.post('/signup', registerData);
    console.log(resp);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
    localStorage.setItem('authToken', resp.data.auth_token);
    localStorage.setItem('id', resp.data.user.id);
    localStorage.setItem('name', resp.data.user.name);
    localStorage.setItem('email', resp.data.user.email);
    localStorage.setItem('location', resp.data.user.location);
    localStorage.setItem('position', resp.data.user.position);
    localStorage.setItem('fun_facts', resp.data.user.fun_facts);
    localStorage.setItem('first_img', resp.data.user.first_img);
    localStorage.setItem('second_img', resp.data.user.second_img);
    return resp.data.user;
  } catch (e) {
    if (e.response.status === 422) {
      return { errorMessage: "Email is already associated with a user, please login to continue" }
    } else {
      console.log(e);
    }
  }
}

// VERIFY USER
export const verifyUser = () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
  }
}

// get all users
export const getUsers = async () => {
  try {
    const resp = await api.get('/users');
    return resp.data;
  } catch (e) {
    console.log(e.response);
  }
}

