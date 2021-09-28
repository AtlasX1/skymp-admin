import React from "react";
import css from "./style.module.scss";
const UserBlock = ({ name = "", setShowMenu, showMenu, logout }) => {
  const Menu = () => {
    return (
      <div className={css.userBlock_menu}>
        <div className={css.userBlock_menu_button} onClick={() => logout()}>
          Выйти
        </div>
      </div>
    );
  };

  return (
    <div className={css.userBlock}>
      {showMenu && <Menu />}
      <div className={css.userBlock_friend}></div>
      <div className={css.userBlock_question}></div>
      <div className={css.userBlock_setting}></div>
      <div className={css.userBlock_name}>{name}</div>
      <div
        className={css.userBlock_arrowDown}
        onClick={() => setShowMenu((prev) => !prev)}
      ></div>
      <div className={css.userBlock_line}></div>
    </div>
  );
};
export default UserBlock;
