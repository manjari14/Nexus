import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const registerParticipant = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/register`, data);
  return response.data;
};

export const getRegistrations = async () => {
  const response = await axios.get(`${API_BASE_URL}/registrations`);
  return response.data;
};
