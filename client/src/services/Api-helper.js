import axios from 'axios';

const api = axios.create({
  // baseURL: "http://localhost:3000"
  baseURL: "https://pure-island-69489.herokuapp.com"
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
    const resp = await api.post('/register', registerData);
    console.log(resp);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
    localStorage.setItem('authToken', resp.data.auth_token);
    localStorage.setItem('id', resp.data.user.id);
    localStorage.setItem('name', resp.data.user.name);
    localStorage.setItem('email', resp.data.user.email);
    return resp.data.user;
  } catch (e) {
    console.log(e.response);
    if (e.response.status === 422) {
      return { errorMessage: "Email is already associated with a user, please login to continue" }
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


