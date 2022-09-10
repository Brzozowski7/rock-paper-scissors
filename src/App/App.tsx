import { useState } from "react";
import { Wrapper } from "./App.styles";
import Scoreboard from "../components/Scoreboard/Scoreboard";
import Options from "../components/Options/Options";
import RulesBtn from "../components/RulesBtn/RulesBtn";
import Rules from "../components/Rules/Rules";
import Duel from "../components/Duel/Duel";

interface PChoice {
  value: string;
  color: string;
  src: string;
}

function App() {
  const [rulesActive, setRulesActive] = useState(false);
  const [playerChoice, setPlayerChoice] = useState<PChoice>({
    value: "",
    color: "",
    src: "",
  });
  const [scoreCounter, setScoreCounter] = useState<number>(0);

  return (
    <Wrapper>
      <Scoreboard score={scoreCounter} />
      {playerChoice.value ? (
        <Duel
          setScoreCounter={setScoreCounter}
          setPlayerChoice={setPlayerChoice}
          player={playerChoice}
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
