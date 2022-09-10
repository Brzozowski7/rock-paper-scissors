import { Dispatch, SetStateAction } from "react";
import { RulesButton } from "./RulesBtn.styles";

interface ChildProps {
  setRulesActive: Dispatch<SetStateAction<boolean>>;
}
export default function RulesBtn({ setRulesActive }: ChildProps) {
  return (
    <RulesButton onClick={() => setRulesActive((prev) => !prev)}>
      Rules
    </RulesButton>
  );
}
