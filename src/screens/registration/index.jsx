import React, { useState, useEffect } from "react";
import css from "./style.module.scss";
import { InputField, Button } from "../../components";
import { authApi } from "../../api";
import { storage } from "../../utils";

const Registration = ({ setCurrentScreen }) => {
  const [email, setEmail] = useState("testEmain@email.com");
  const [password, setPassword] = useState("1q2w3e4r5t");
  const [name, setName] = useState("TestName1233");

  const onRegistration = () => {
    authApi.registration(email, password, name);
  };
  return (
    <div className={css.registrationContent}>
      <div className={css.registrationContent_form}>
        <InputField
          value={name}
          setValue={setName}
          label={"Email"}
          type="text"
          placeholder="Имя"
          isLabel
        />
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
        <Button
          name="Регистрация"
          onClick={() => onRegistration()}
        />
        <Button name="Назад" onClick={() => setCurrentScreen("Login")} />
      </div>
    </div>
  );
};
export default Registration;
