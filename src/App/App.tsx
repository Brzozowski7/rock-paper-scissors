import {Wrapper} from "./App.styles"
import Scoreboard from "../components/Scoreboard/Scoreboard";
import Options from "../components/Options/Options";
function App() {
  return (
    <Wrapper>
      <Scoreboard/>
      <Options />
    </Wrapper>
  );
}

export default App;
