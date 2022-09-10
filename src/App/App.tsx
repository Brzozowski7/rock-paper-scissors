import { useState, useEffect } from "react";
import { Wrapper } from "./App.styles";
import Scoreboard from "../components/Scoreboard/Scoreboard";
import Options from "../components/Options/Options";
import RulesBtn from "../components/RulesBtn/RulesBtn";
import Rules from "../components/Rules/Rules";
import Duel from "../components/Duel/Duel";

interface Choice {
  value: string;
  color: string;
  src: string;
}

function App() {
  const [rulesActive, setRulesActive] = useState<boolean>(false);
  const [playerChoice, setPlayerChoice] = useState<Choice>({
    value: "",
    color: "",
    src: "",
  });
  const [scoreCounter, setScoreCounter] = useState<number>(0);

  useEffect(() => {
    const checkLocalStorageForScore = localStorage.getItem("score");
    if (checkLocalStorageForScore) {
      setScoreCounter(JSON.parse(checkLocalStorageForScore));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(scoreCounter));
  }, [scoreCounter]);

  return (
    <Wrapper>
      <Scoreboard score={scoreCounter} />
      {playerChoice.value ? (
        <Duel
          setScoreCounter={setScoreCounter}
          setPlayerChoice={setPlayerChoice}
          playerChoice={playerChoice}
        />
      ) : (
        <Options setPlayerChoice={setPlayerChoice} />
      )}
      {rulesActive && <Rules setRulesActive={setRulesActive} />}
      <RulesBtn setRulesActive={setRulesActive} />
    </Wrapper>
  );
}

export default App;
