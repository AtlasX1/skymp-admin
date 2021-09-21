import axios from "axios";
import { storage } from "../utils";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const login = async (email, password) => {
  const url = storage.get("authUrl");
  return await axios
    .post(`${url}users/login`, { email, password })
    .then((res) => res.data)
    .catch((e) => alert(e));
};

const registration = async (email, password, name) => {
  const url = storage.get("authUrl");
  return await axios
    .post(`${url}users`, { email, password, name })
    .then((res) => alert("Ok!"))
    .catch((e) => alert(e?.response?.data ?? "Something wrong."));
};

const getSession = async (usrId, address, token) => {
  const url = storage.get("authUrl");

  return await axios
    .post(
      `${url}users/${usrId}/play/${address}`,
      {},
      { headers: { Authorization: token } }
    )
    .then((res) => res.data)
    .catch((e) => console.log(e));
};

const api = { login, registration, getSession };
export default api;
