import axios from 'axios';
import { Navigate } from 'react-router-dom';

export const captainRegisterService = async (data) => {
  try {
    let response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, data);
    return response;
  } catch (error) {
    return error
  }
}

export const captainLoginService = async (data) => {
  try {
    let response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, data);
    return response;
  } catch (error) {
    return error
  }
}

export const captainLogoutService = async () => {
  try {
    let response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access-captain')}`
      }
    });
    return response;
  } catch (error) {
    return error
  }
}

export const captainProfileService = async () => {
  try {
    let response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access-captain')}`
      }
    });
    return response;
  } catch (error) {
    return error.response
  }
}