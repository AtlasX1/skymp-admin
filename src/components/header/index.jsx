import React from "react";
import css from "./style.module.scss";
const { app } = window.require("electron").remote;
const Header = ({
  Left = () => <div></div>,
  Center = () => <div></div>,
  Right = () => <div></div>,
}) => {
  const closeApp = () => app.exit();
  const hideApp = () => {};
  return (
    <div className={css.header}>
      <Left />
      <Center />
      <div className={css.header_right}>
        <Right />
        <div className={css.header_right_hide} onClick={() => hideApp()} />
        <div className={css.header_right_close} onClick={() => closeApp()} />
      </div>
    </div>
  );
};

export default Header;
