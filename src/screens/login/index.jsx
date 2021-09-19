import React, { useState, useEffect } from "react";
import css from "./style.module.scss";
import { InputField, Button, RadioButton } from "../../components";
import { authApi } from "../../api";
import { storage } from "../../utils";

const serversAuth = [
  "https://skymp-auth.herokuapp.com/api/",
  "https://skymp.io/api/",
];

const Login = ({ setUser, setCurrentScreen }) => {
  const [email, setEmail] = useState("testEmain@email.com");
  const [password, setPassword] = useState("1q2w3e4r5t");
  const [connectionData, setConnectionData] = useState(null);
  const [authUrl, setAuthUrl] = useState(
    storage.get("authUrl")
      ? storage.get("authUrl")
      : "https://skymp-auth.herokuapp.com/api/"
  );
  const onLogin = () =>
    authApi.login(email, password).then((data) => {
      setConnectionData(data);
      setUser(data);
    });

  const changeAuthApi = (url) => {
    setAuthUrl(url);
    storage.set(url, "authUrl");
  };

  useEffect(() => {
    const localConnection = storage.get("connection");
    if (localConnection) {
      storage.set(localConnection, "connection");
    }
    if (connectionData) {
      storage.set(connectionData, "connection");
    }
    storage.set(authUrl, "authUrl");
  }, [connectionData]);

  return (
    <div className={css.loginContent}>
      <div className={css.loginContent_servers}>
        {serversAuth.map((url, i) => (
          <RadioButton
            key={i}
            isChecked={authUrl === url}
            text={url}
            value={url}
            onClick={() => changeAuthApi(url)}
          />
        ))}
      </div>

      <div className={css.loginContent_form}>
        <InputField
          value={email}
          setValue={setEmail}
          label={"Email"}
          type="text"
          placeholder="Почта"
          isLabel
        />
        <InputField
          value={password}
          setValue={setPassword}
          label={"Password"}
          placeholder="Пароль"
          type="password"
          isLabel
        />
        <Button name="Войти" onClick={() => onLogin()} />
        <Button
          name="Регистрация"
          onClick={() => setCurrentScreen("Registration")}
        />
      </div>
    </div>
  );
};

export default Login;
