import { RulesWrapper, RulesImgContainer } from "./Rules.styles";
import xImage from "../../images/icon-close.svg";

export default function Rules({ setRulesActive }: ISetBoolean) {
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
