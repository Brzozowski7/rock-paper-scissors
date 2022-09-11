import { motion } from "framer-motion";
import { Wrapper, OptionContainer } from "./Options.styles";
import { gameOptions } from "../../misc/gameOptions";

export default function Options({ setPlayerChoice }: ISetChoice) {
  const handleClick = (value: string, src: string, color: string): void => {
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
