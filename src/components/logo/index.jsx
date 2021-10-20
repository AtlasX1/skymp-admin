import React from "react";
import css from "./style.module.scss";

const StopWorking = () => <h2 style={{color:'white'}}>Лаунчер больше не поддерживаеться!</h2>;

const Logo = ({ text = "Добро пожаловать" }) => {
  return (
    <div className={css.welcome}>
      <div className={css.welcome_logo}></div>
      <div className={css.welcome_text}>
        <div className={css.welcome_text_line}></div>
        <div className={css.welcome_text_value}>{text} </div>
        <div className={css.welcome_text_line}></div>
      </div>
      <StopWorking />
    </div>
  );
};

export default Logo;
