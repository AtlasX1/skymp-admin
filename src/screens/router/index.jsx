import React, { useEffect, useState, useCallback, Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { screenActions } from "../../redux";
import { Header } from "../../components";
import { Preloader, Login, Registration, Main } from "../";
import css from "./style.module.scss";
const { app } = window.require("electron").remote;

const routers = {
  Preloader: Preloader,
  Login: Login,
  Registration: Registration,
  Main: Main,
};

function ScreenWrapper({ component: Component }, ...rest) {
  return Component ? <Component {...rest} /> : <></>;
}

const Router = () => {
  const { user, loading } = useSelector((state) => state.accountReducer);
  const { screen } = useSelector((state) => state.screenReducer);
  const dispatch = useDispatch();
  const changeScreen = useCallback((screen) =>
    dispatch(screenActions.changeScreen(screen))
  );

  useEffect(() => {
    user && changeScreen("Main");
    !user && changeScreen("Login");
  }, [user]);
  return (
    <div className={css.app}>
      <ScreenWrapper
        component={routers[loading === "pending" ? "Preloader" : screen]}
      />
    </div>
  );
};

export default Router;
