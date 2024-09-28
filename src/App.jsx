import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [gameStarted, setGameStarted] = useState(true);

  const toggle = () => {
    setGameStarted( (prev) => !prev );
  };

  return (
    <>
      {
        gameStarted ? <GamePlay/> : <StartGame toggle={toggle} />
      }
    </>
  );
}

export default App;
