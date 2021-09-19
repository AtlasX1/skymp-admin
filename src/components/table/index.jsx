import React from "react";
import css from "./style.module.scss";
const Row = ({
  ip,
  maxPlayers,
  name,
  online,
  port,
  isSelected = false,
  chooseServer,
  header
}) => {
  return (
    <div
      className={`${css.table_row} ${isSelected ? css.selected : ""}`}
      onClick={() =>!header&& chooseServer()}
    >
      <div className={css.table_row_ip}>
        {ip}:{port}
      </div>
      <div className={css.table_row_name}>{name}</div>
      <div className={css.table_row_online}>
        {online}
        {maxPlayers ? "/" : ""}
        {maxPlayers}
      </div>
    </div>
  );
};

const Table = ({ servers = [], chosenServer, chooseServer }) => {
  return (
    <div className={css.table}>
      <Row name="Имя" ip="ip" online="Онлайн" header/>
      {servers.map((serverData, i) => (
        <Row
          key={i}
          {...serverData}
          isSelected={chosenServer["server-ip"] === serverData.ip}
          chooseServer={() => chooseServer(serverData)}
        />
      ))}
    </div>
  );
};

export default Table;
