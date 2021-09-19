import React from "react";
import css from "./style.module.scss";
const RadioButton = ({ isChecked = false, onClick, text = "" }) => {
  return (
    <div className={css.radioButton} onClick={() => !isChecked && onClick()}>
      <div className={css.radioButton_circle}>
        {isChecked && <div className={css.radioButton_circle_checked} />}
      </div>
      <div>{text}</div>
    </div>
  );
};

export default RadioButton;
