import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, { email, password });
        return response.data;
    } catch (error) {
        throw new Error('Login failed: ' + error.response.data.message);
    }
};

export const register = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, { email, password });
        return response.data;
    } catch (error) {
        throw new Error('Registration failed: ' + error.response.data.message);
    }
};

export const logout = async () => {
    try {
        await axios.post(`${API_URL}/auth/logout`);
    } catch (error) {
        throw new Error('Logout failed: ' + error.response.data.message);
    }
};