import axios from 'axios';

export const userRegisterService = async (data) => {
  try {
    let response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, data);
    return response;
  } catch (error) {
    return error
  }
}

export const userLoginService = async (data) => {
  try {
    let response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, data);
    return response;
  } catch (error) {
    return error
  }
}

export const userLogoutService = async () => {
  try {
    let response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access-user')}`
      }
    });
    return response;
  } catch (error) {
    return error
  }
}

export const userProfileService = async () => {
  try {
    let response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access-user')}`
      }
    });
    return response;
  } catch (error) {
    return error
  }
}