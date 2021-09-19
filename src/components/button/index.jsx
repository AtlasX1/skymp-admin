import React from "react";
import css from "./style.module.scss";
const Button = ({ name, type = "white", onClick }) => {
  return (
    <div className={`${css[`button_${type}`]} ${css.button}`} onClick={() => onClick()}>
      {name}
    </div>
  );
};
export default Button;
