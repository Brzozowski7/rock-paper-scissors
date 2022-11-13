import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { Wrapper, OptionContainer } from "./Options.styles";
import { gameOptions } from "../../misc/gameOptions";
import {Value} from "../../common"

interface OptionsProps {
  setPlayerChoice: Dispatch<SetStateAction<Choice>>;
}

export default function Options({ setPlayerChoice }: OptionsProps) {
  const handleClick = (value: Value, src: string, color: string): void => {
    setPlayerChoice({
      value: value,
      src: src,
      color: color,
    });
  };
  return (
    <Wrapper
      as={motion.div}
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
    >
      {gameOptions.map((item) => {
        return (
          <OptionContainer
            key={item.value}
            onClick={() => handleClick(item.value, item.src, item.color)}
            borderColor={item.color}
          >
            <img src={item.src} alt={item.alt} />
          </OptionContainer>
        );
      })}
    </Wrapper>
  );
}
