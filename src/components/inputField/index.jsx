import React from "react";
import css from "./style.module.scss";
const InputField = ({
  placeholder = "placeholder",
  value,
  setValue,
  isLabel = false,
}) => {
  return (
    <>
      {isLabel && <div style={{color:'white'}}>{placeholder}</div>}
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={css.input}
        placeholder={placeholder}
      ></input>
    </>
  );
};

export default InputField;
