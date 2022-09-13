import { useEffect, useState } from "react";
import { gameOptions } from "../../misc/gameOptions";

const useRandomComputerChoice = () => {
  const [computerChoice, setComputerChoice] = useState({} as Choice);

  const randomComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    setComputerChoice({
      value: gameOptions[randomNumber].value,
      src: gameOptions[randomNumber].src,
      color: gameOptions[randomNumber].color,
    });
  };
  useEffect(() => {
    randomComputerChoice();
  }, []);
  return computerChoice;
};
export default useRandomComputerChoice;
