import { Dispatch, SetStateAction } from "react";
import { RulesButton } from "./RulesBtn.styles";

interface RulesBtnProps {
  setRulesActive: Dispatch<SetStateAction<boolean>>;
}

export default function RulesBtn({ setRulesActive }: RulesBtnProps) {
  return (
    <RulesButton onClick={() => setRulesActive((prev) => !prev)}>
      Rules
    </RulesButton>
  );
}
