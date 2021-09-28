import React, { useState, useEffect, useCallback } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useSelector, useDispatch } from "react-redux";
import { accountActions } from "../../redux";
import { Table, Button, InputField, Header } from "../../components";
import UserBlock from "./UserBlock";
import { storage } from "../../utils";

import { serversApi, authApi } from "../../api";
import css from "./style.module.scss";
const fs = window.require("fs");
const { shell } = window.require("electron").remote;

const tabs = [
  {
    id: "all",
    text: "Все сервера",
  },
  {
    id: "elects",
    text: "Все сервера",
  },
  {
    id: "news",
    text: "Новости",
  },
];

const Tabs = ({ selectedTab, setSelectedTab = () => {} }) => {
  return (
    <div className={css.tabs}>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`${css.tabs_tab} ${
            selectedTab === tab.id ? css.tabs_tab_selected : ""
          }`}
          onClick={() => setSelectedTab(tab.id)}
        >
          {tab.text}
        </div>
      ))}
    </div>
  );
};

const Main = () => {
  const [serversData, setServersData] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [tab, setTab] = useState("all");
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.accountReducer);
  const logout = useCallback(() => dispatch(accountActions.logout()));
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
      <Header
        backgroundColor="#1F1F1F"
        Left={() => <Tabs selectedTab={tab} setSelectedTab={setTab} />}
        Center={() => <div className={css.logoLittle} />}
        Right={() => (
          <UserBlock
            name={user?.name}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            logout={logout}
          />
        )}
      />
      <div
        className={css.main}
        onClick={() => {
          setShowMenu(false);
        }}
      >
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
