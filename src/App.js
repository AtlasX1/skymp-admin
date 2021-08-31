import React, { useState } from "react";
import api from "./api";
import { BoxCharacter } from "./components";

function App() {
  const [port, setPort] = useState(3222);
  const [characters, setCharacters] = useState([]);
  const setCharactersInfo = () =>
    api.getCharacters(port).then((res) => setCharacters(res.data.data));
  return (
    <div>
      <div>
        <div>localhost port:</div>
        <div>
          <input value={port} onChange={(e) => setPort(e.target.value)} />
        </div>
      </div>
      <div>
        <button onClick={() => setCharactersInfo()}>Get characters</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {characters.map((character, i) => (
          <BoxCharacter {...character} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
