declare module "*.svg";

interface Choice {
  value: string;
  color: string;
  src: string;
}
interface ISetBoolean {
  setRulesActive: Dispatch<SetStateAction<boolean>>;
}

interface ISetChoice {
  setPlayerChoice: Dispatch<SetStateAction<Choice>>;
}