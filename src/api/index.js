import axios from "axios";

const getCharacters = async (port) =>
  axios.get(`http://localhost:${port ?? 3222}/api/charactes`);

const api = { getCharacters };

export default api;
