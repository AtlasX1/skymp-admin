import React from "react";
import css from "./style.module.scss";
const Logo = ({ text = "Добро пожаловать" }) => {
  return (
    <div className={css.welcome}>
      <div className={css.welcome_logo}></div>
      <div className={css.welcome_text}>
        <div className={css.welcome_text_line}></div>
        <div className={css.welcome_text_value}>{text} </div>
        <div className={css.welcome_text_line}></div>
      </div>
    </div>
  );
};

export default  Logo;
