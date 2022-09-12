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
import { checkWinner } from "./Duel.utils";
import {Value} from "../../common"

interface DuelProps {
  playerChoice: {
    value: Value;
    color: string;
    src: string;
  };
  setPlayerChoice: Dispatch<SetStateAction<Choice>>;
  setScoreCounter: Dispatch<SetStateAction<number>>;
}

export default function Duel({
  playerChoice,
  setPlayerChoice,
  setScoreCounter,
}: DuelProps) {

  const [computerChoice, setComputerChoice] = useState({} as Choice);
  const [result, setResult] = useState<number>(0);

  const randomComputerChoice = (): void => {
    const randomNumber = Math.floor(Math.random() * 5);
    setComputerChoice({
      value: gameOptions[randomNumber].value,
      src: gameOptions[randomNumber].src,
      color: gameOptions[randomNumber].color,
    });
  };

  const goBack = (): void => {
    setPlayerChoice({
      value: Value.Null,
      color: "",
      src: "",
    });
  };

  useEffect(() => {
    randomComputerChoice();
  }, []);

  useEffect(() => {
    setResult(checkWinner(playerChoice.value, computerChoice.value));
  }, [computerChoice]);

  useEffect(() => {
    setScoreCounter((prev) => prev + result);
  }, [result]);

  return (
    <Wrapper
      as={motion.div}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
    >
      <p>
        {result === 1
          ? "Player wins"
          : result === -1
          ? "Computer wins"
          : "It's a draw"}
      </p>
      <Choices>
        <PlayerChoiceContainer borderColor={playerChoice.color}>
          <img src={playerChoice.src} alt="playerChoice icon" />
        </PlayerChoiceContainer>
        <ComputerChoiceContainer borderColor={computerChoice.color}>
          <img src={computerChoice.src} alt="computerChoice icon" />
        </ComputerChoiceContainer>
      </Choices>
      <BackBtn onClick={goBack}>Go back</BackBtn>
    </Wrapper>
  );
}
