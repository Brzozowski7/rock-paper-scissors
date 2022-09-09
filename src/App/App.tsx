import {Wrapper} from "./App.styles"
import Scoreboard from "../components/Scoreboard/Scoreboard";
import Options from "../components/Options/Options";
import RulesBtn from "../components/RulesBtn/RulesBtn";
function App() {
  return (
    <Wrapper>
      <Scoreboard/>
      <Options />
      <RulesBtn/>
    </Wrapper>
  );
}

export default App;
