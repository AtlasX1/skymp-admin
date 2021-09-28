import React, { useState, useEffect } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { serversApi, authApi } from "../../api";
import { storage } from "../../utils";
import { Table, Button, InputField, Header } from "../../components";
import css from "./style.module.scss";
const fs = window.require("fs");
const { shell } = window.require("electron").remote;

const Main = ({}) => {
  const [serversData, setServersData] = useState([]);
  const [user, setUser] = useState({});
  const [chosenServer, setChosenServer] = useState({
    "server-ip": "",
    "server-port": 0,
    "show-me": false,
    "enable-console": false,
    gameData: {
      session: "",
    },
  });
  const [gamePath, setGamePath] = useState(storage.get("gamePath") ?? "");

  useEffect(() => {
    storage.set(gamePath, "gamePath");
  }, [gamePath]);

  useEffect(() => {
    serversApi.getServers().then(setServersData);
    setUser(storage.get("connection"));
  }, []);

  const chooseServer = async (server) => {
    if (user)
      authApi
        .getSession(user.id, `${server.ip}:${server.port}`, user.token)
        .then((session) => {
          console.log(session);
          setChosenServer((prev) => ({
            ...prev,
            "server-ip": server.ip,
            "server-port": server.port,
            gameData: {
              session: session.session,
            },
          }));
        });
  };

  const runGame = () => {
    try {
      if (gamePath) {
        shell.openItem(`${gamePath}/skse64_loader.exe`);
      } else {
        alert("gamePath ");
      }
    } catch (e) {
      alert(e);
    }
  };
  const saveSession = () => {
    if (gamePath) {
      const fileName = `${gamePath}/Data/Platform/Plugins/skymp5-client-settings.txt`;
      try {
        const isExist = fs.existsSync(fileName);
        if (!isExist) {
          fs.appendFile(fileName, JSON.stringify(chosenServer), (err) =>
            console.log(err)
          );
        } else {
          fs.unlinkSync(fileName);
          fs.appendFile(fileName, JSON.stringify(chosenServer), (err) =>
            console.log(err)
          );
        }
        if (!chosenServer["server-ip"]) {
          NotificationManager.warning("Выбери сервер.");
        }

        user?.id && chosenServer["server-ip"] && runGame();
      } catch (e) {
        alert(e);
      }
    } else {
      NotificationManager.warning("Надо путь игры");
    }
  };
  return (

    <>
      <Header/>
      <div className={css.main}>
      <Table
        servers={serversData}
        chosenServer={chosenServer}
        chooseServer={chooseServer}
      />
      <InputField
        value={gamePath}
        setValue={setGamePath}
        placeholder="Путь игры (//)"
      />
      <div className={css.buttons}>
        <div>
          <Button
            name={"Играть"}
            onClick={() => {
              saveSession();
            }}
          />
        </div>
        <div>
          <Button
            name={"Обновить"}
            onClick={() => {
              serversApi.getServers().then(setServersData);
              NotificationManager.success("Обновлено");
            }}
          />
        </div>
      </div>
      <NotificationContainer />
    </div>
    </>

  );
};

export default Main;
