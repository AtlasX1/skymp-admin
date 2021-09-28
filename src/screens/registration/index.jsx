import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import css from "./style.module.scss";
import { InputField, Button, Logo, Header } from "../../components";
import { accountActions, screenActions } from "../../redux";
import { authApi } from "../../api";

const BackButton = ({ text, onClick = () => {} }) => {
  return (
    <div className={css.backButton} onClick={() => onClick()}>
      <div className={css.backButton_icon}></div>
      <div className={css.backButton_text}>{text}</div>
    </div>
  );
};

const Registration = () => {
  const [email, setEmail] = useState("testEmain@email.com");
  const [password, setPassword] = useState("1q2w3e4r5t");
  const [name, setName] = useState("TestName1233");

  const dispatch = useDispatch();
  const changeScreen = useCallback((screen) =>
    dispatch(screenActions.changeScreen(screen))
  );
  const onRegistration = () => {
    authApi.registration(email, password, name);
  };
  return (
    <>
      <Header
        Left={() => (
          <BackButton text="Назад" onClick={() => changeScreen("Login")} />
        )}
      />
      <div className={css.registrationContent}>
        <Logo text="Регистрация" />
        <div className={css.registrationContent_form}>
          <InputField
            value={name}
            setValue={setName}
            // label={"Имя"}
            type="text"
            placeholder="Имя"
          />
          <InputField
            value={email}
            setValue={setEmail}
            // label={"Почта"}
            type="text"
            placeholder="Почта"
          />
          <InputField
            value={password}
            setValue={setPassword}
            // label={"Пароль"}
            placeholder="Пароль"
            type="password"
          />
          <Button name="Регистрация" onClick={() => onRegistration()} />
        </div>
      </div>
    </>
  );
};
export default Registration;
