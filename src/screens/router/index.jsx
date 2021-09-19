import React, { useEffect, useState, useCallback } from "react";
import { Header } from "../../components";
import { Preloader, Login, Registration, Main } from "../";
import { storage } from "../../utils";
import css from "./style.module.scss";
const { app } = window.require("electron").remote;
const Router = (params) => {
  const [currentScreen, setCurrentScreen] = useState("Login");
  const [user, setUser] = useState(null);
  const getUser = useCallback(() => storage.get("connection"), []);
  const logout = () => {
    storage.set(null, "connection");
    setUser(null);
    setCurrentScreen("Login");
  };
  const closeApp = () => app.exit();
  const hideApp = () => {};

  useEffect(() => {
    const storage_user = getUser();
    setUser(storage_user);
    if (storage_user) {
      setCurrentScreen("Main");
    }
  }, []);
  return (
    <div className={css.app}>
      <Header
        closeApp={closeApp}
        hideApp={hideApp}
        user={user}
        logout={logout}
      />
      {/* {!currentScreen && <Preloader />} */}
      {!user && currentScreen === "Login" && (
        <Login setCurrentScreen={setCurrentScreen} setUser={setUser} />
      )}

      {currentScreen === "Registration" && (
        <Registration setCurrentScreen={setCurrentScreen} />
      )}
      {!!user && <Main setCurrentScreen={setCurrentScreen} />}
    </div>
  );
};

export default Router;
