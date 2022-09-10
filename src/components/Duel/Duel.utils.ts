import { combinations } from "./Duel.const";

export const checkWinner = (
  playerChoice: string,
  computerChoice: string | undefined
) => {
  switch (playerChoice + computerChoice) {
    case combinations.ScissorsPaper:
    case combinations.RockScissors:
    case combinations.PaperRock:
    case combinations.LizardPaper:
    case combinations.SmockScissors:
    case combinations.RockLizard:
    case combinations.PaperSmock:
    case combinations.SmockRock:
    case combinations.ScissorsLizard:
    case combinations.LizardSmock:
      return "Player";
      break;
    case combinations.RockRock:
    case combinations.LizardLizard:
    case combinations.PaperPaper:
    case combinations.SmockSmock:
    case combinations.ScissorsScissors:
      return "Draw";
      break;
    case combinations.SmockLizard:
    case combinations.LizardScissors:
    case combinations.RockSmock:
    case combinations.SmockPaper:
    case combinations.LizardRock:
    case combinations.ScissorsSmock:
    case combinations.PaperLizard:
    case combinations.RockPaper:
    case combinations.ScissorsRock:
    case combinations.PaperScissors:
      return "Computer";
      break;
    default:
      return;
  }
};
