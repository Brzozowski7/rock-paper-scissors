import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import {
  Wrapper,
  PlayerChoiceContainer,
  ComputerChoiceContainer,
  Choices,
  BackBtn,
} from "./Duel.styles";
import { gameOptions } from "../../misc/gameOptions";
import { combinations } from "./Duel.const";

interface ChildProps {
  player: {
    value: string;
    color: string;
    src: string;
  };
  setPlayerChoice: Dispatch<SetStateAction<CChoice>>;
  setScoreCounter: Dispatch<SetStateAction<number>>;
}
interface CChoice {
  value: string;
  color: string;
  src: string;
}

export default function Duel({
  player,
  setPlayerChoice,
  setScoreCounter,
}: ChildProps) {
  const [computerChoice, setComputerChoice] = useState<CChoice>();
  const [result, setResult] = useState<string>();

  const randomComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    setComputerChoice({
      value: gameOptions[randomNumber].value,
      src: gameOptions[randomNumber].src,
      color: gameOptions[randomNumber].color,
    });
  };
  const checkWinner = () => {
    switch (player.value + computerChoice?.value) {
      case combinations.ScissorsPaper:
      case combinations.RockScissors:
      case combinations.PaperRock:
      case combinations.LizardPaper:
      case combinations.SmockScissors:
      case combinations.RockLizard:
      case combinations.PaperSmock:
      case combinations.SmockRock:
      case combinations.ScissorsLizard:
      case combinations.LizardSmock:
        setResult("Player");
        setScoreCounter((prev) => prev + 3);
        break;
      case combinations.RockRock:
      case combinations.LizardLizard:
      case combinations.PaperPaper:
      case combinations.SmockSmock:
      case combinations.ScissorsScissors:
        setResult("Draw");
        break;
      default:
        setResult("Computer");
        setScoreCounter((prev) => prev - 1);
    }
  };
  const goBack = () => {
    setPlayerChoice({
      value: "",
      color: "",
      src: "",
    });
  };

  useEffect(() => {
    randomComputerChoice();
  }, []);

  useEffect(() => {
    checkWinner();
  }, [computerChoice]);

  return (
    <Wrapper
      as={motion.div}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
    >
      <p>
        {result === "Player"
          ? "Player wins"
          : result === "Computer"
          ? "Computer wins"
          : "It's a draw"}
      </p>
      <Choices>
        <PlayerChoiceContainer borderColorPlayer={player.color}>
          <img src={player.src} alt="playerChoice icon" />
        </PlayerChoiceContainer>
        <ComputerChoiceContainer borderColorComputer={computerChoice?.color}>
          <img src={computerChoice?.src} alt="computerChoice icon" />
        </ComputerChoiceContainer>
      </Choices>
      <BackBtn onClick={goBack}>Go back</BackBtn>
    </Wrapper>
  );
}