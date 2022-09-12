import { Dispatch, SetStateAction } from "react";
import { RulesButton } from "./RulesBtn.styles";

interface ISetBoolean {
  setRulesActive: Dispatch<SetStateAction<boolean>>;
}

export default function RulesBtn({ setRulesActive }: ISetBoolean) {
  return (
    <RulesButton onClick={() => setRulesActive((prev) => !prev)}>
      Rules
    </RulesButton>
  );
}
