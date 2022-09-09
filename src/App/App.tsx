import {useState} from "react"
import {Wrapper} from "./App.styles"
import Scoreboard from "../components/Scoreboard/Scoreboard";
import Options from "../components/Options/Options";
import RulesBtn from "../components/RulesBtn/RulesBtn";
import Rules from "../components/Rules/Rules";
function App() {
  const [rulesActive, setRulesActive] = useState(false);

  return (
    <Wrapper>
      <Scoreboard/>
      <Options />
      {rulesActive && <Rules setRulesActive={setRulesActive}/>}
      <RulesBtn setRulesActive={setRulesActive}/>
    </Wrapper>
  );
}

export default App;
