import React from "react";
import css from "./style.module.scss";

const Header = ({ closeApp, hideApp, showPanel = false, user, logout }) => {
  return (
    <div className={css.header}>
      <div
        className={`no-drag ${css.header_close}`}
        onClick={() => closeApp()}
      ></div>
      <div
        className={`no-drag ${css.header_hide}`}
        onClick={() => hideApp()}
      ></div>
      <div
        onClick={() => logout()}
        className="no-drag"
        style={{
          color: "white",
          marginRight: "40px",
          userSelect: "none",
          cursor: "pointer",
        }}
      >
        Выйти
      </div>
      <div style={{ color: "white", marginRight: "30px" }}>{user?.name}</div>
    </div>
  );
};

export default Header;
