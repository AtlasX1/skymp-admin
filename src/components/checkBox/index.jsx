import React from "react";
import css from "./style.module.scss";
const CheckBox = ({ onClick, isChecked = false, label }) => {
  return (
    <div
      className={css.checkBox}
      onClick={() => onClick()}
    >
      <div className={css.checkBox_square}>
        {isChecked && <div className={css.checkBox_square_checked}></div>}
      </div>
      {label && <div>{label}</div>}
    </div>
  );
};
export default CheckBox;
