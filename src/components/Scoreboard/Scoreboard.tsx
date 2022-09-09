import { ScoreboardWrapper,GameTitle, ScoreContainer } from "./Scoreboard.styles"
import logo from "../../images/logo-bonus.svg"
export default function Scoreboard() {
  return (
    <ScoreboardWrapper>
      <GameTitle>
        <img src={logo} alt="logo"/>
      </GameTitle>
      <ScoreContainer>
        <h2>Score</h2>
        <p>0</p>
      </ScoreContainer>
    </ScoreboardWrapper>
  )
}
