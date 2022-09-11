import {
  ScoreboardWrapper,
  GameTitle,
  ScoreContainer,
} from "./Scoreboard.styles";
import logo from "../../images/logo-bonus.svg";

interface IProps {
  score: number;
}

export default function Scoreboard({ score }: IProps) {
  return (
    <ScoreboardWrapper>
      <GameTitle>
        <img src={logo} alt="logo" />
      </GameTitle>
      <ScoreContainer>
        <h2>Score</h2>
        <p>{score}</p>
      </ScoreContainer>
    </ScoreboardWrapper>
  );
}
