import { Dispatch, SetStateAction } from "react";
import { RulesWrapper, RulesImgContainer } from "./Rules.styles";
import xImage from "../../images/icon-close.svg";

interface RulesProps {
  setRulesActive: Dispatch<SetStateAction<boolean>>;
}

export default function Rules({ setRulesActive }: RulesProps) {
  return (
    <RulesWrapper>
      <RulesImgContainer>
        <img
          onClick={() => setRulesActive(false)}
          src={xImage}
          alt="close-icon"
        />
      </RulesImgContainer>
    </RulesWrapper>
  );
}
