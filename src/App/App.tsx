import { useState, useEffect } from "react";
import { Wrapper } from "./App.styles";
import Scoreboard from "../components/Scoreboard";
import Options from "../components/Options";
import RulesBtn from "../components/RulesBtn";
import Rules from "../components/Rules";
import Duel from "../components/Duel";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const [rulesActive, setRulesActive] = useState<boolean>(false);
  const [playerChoice, setPlayerChoice] = useState<Choice>({} as Choice);
  const [scoreCounter, setScoreCounter] = useState<number>(0);
  const [localStorageScore, setLocalStorageScore] = useLocalStorage(
    "score",
    scoreCounter
  );
  
  useEffect(() => {
    setScoreCounter(localStorageScore);
  }, []);
  useEffect(() => {
    setLocalStorageScore(scoreCounter);
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
