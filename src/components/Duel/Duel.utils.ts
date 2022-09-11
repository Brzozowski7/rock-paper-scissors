import { combinations } from "./Duel.const";

export const checkWinner = (playerChoice: string, computerChoice: string) => {
  switch (playerChoice + computerChoice) {
    case combinations.ScissorsPaper:
    case combinations.RockScissors:
    case combinations.PaperRock:
    case combinations.LizardPaper:
    case combinations.SpockScissors:
    case combinations.RockLizard:
    case combinations.PaperSpock:
    case combinations.SpockRock:
    case combinations.ScissorsLizard:
    case combinations.LizardSpock:
      return 1;
    case combinations.RockRock:
    case combinations.LizardLizard:
    case combinations.PaperPaper:
    case combinations.SpockSpock:
    case combinations.ScissorsScissors:
      return 0;
    case combinations.SpockLizard:
    case combinations.LizardScissors:
    case combinations.RockSpock:
    case combinations.SpockPaper:
    case combinations.LizardRock:
    case combinations.ScissorsSpock:
    case combinations.PaperLizard:
    case combinations.RockPaper:
    case combinations.ScissorsRock:
    case combinations.PaperScissors:
      return -1;
    default:
      return 0;
  }
};
