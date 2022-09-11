import { RulesButton } from "./RulesBtn.styles";

export default function RulesBtn({ setRulesActive }: ISetBoolean) {
  return (
    <RulesButton onClick={() => setRulesActive((prev: boolean) => !prev)}>
      Rules
    </RulesButton>
  );
}
