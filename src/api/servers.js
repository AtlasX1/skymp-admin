import axios from "axios";
import { storage } from "../utils";

const getServers = async (email, password) => {
  const url = storage.get("authUrl");
  return await axios
    .get(`${url}servers`, { email, password })
    .then((res) => res.data)
    .catch((e) => console.log(e));
};

const api = { getServers };
export default api;
