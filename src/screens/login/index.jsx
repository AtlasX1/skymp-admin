import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NotificationContainer } from "react-notifications";
import { InputField, Button, CheckBox, Logo, Header } from "../../components";
import { storage } from "../../utils";
import { accountActions, screenActions } from "../../redux";
import css from "./style.module.scss";
const Login = () => {
  const [email, setEmail] = useState("testEmain@email.com");
  const [password, setPassword] = useState("1q2w3e4r5t");
  const [isSaveAccount, setIsSaveAccount] = useState(false);
  const dispatch = useDispatch();

  const login = useCallback((email, password) =>
    dispatch(
      accountActions.asyncActions.login({ email, password, isSaveAccount })
    )
  );
  const changeScreen = useCallback((screen) =>
    dispatch(screenActions.changeScreen(screen))
  );
  useEffect(
    () => storage.set("https://skymp-auth.herokuapp.com/api/", "authUrl"),
    []
  );
  return (
    <>
      <Header />
      <div className={css.loginContent}>
        <Logo />
        <div className={css.loginContent_form}>
          <InputField
            value={email}
            setValue={setEmail}
            // label={"Email"}
            type="text"
            placeholder="Почта"
          />
          <InputField
            value={password}
            setValue={setPassword}
            // label={"Password"}
            placeholder="Пароль"
            type="password"
          />
          <CheckBox
            isChecked={isSaveAccount}
            onClick={() => setIsSaveAccount((prev) => !prev)}
            label="Запомнить меня"
          />
          <Button name="Войти" onClick={() => login(email, password)} />
          <Button
            name="Регистрация"
            onClick={() => changeScreen("Registration")}
          />
        </div>

        <NotificationContainer />
      </div>
    </>
  );
};

export default Login;
