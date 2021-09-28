import React from "react";
import css from "./style.module.scss";
const InputField = ({
  placeholder = "placeholder",
  value,
  setValue,
  label = "",
  type = "text",
}) => {
  return (
    <>
      {!!label && <div style={{ color: "white" }}>{label}</div>}
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={css.input}
        placeholder={placeholder}
        type={type}
      ></input>
    </>
  );
};

export default InputField;
