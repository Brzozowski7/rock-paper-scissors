import { Combinations } from "./Duel.const";

export const checkWinner = (playerChoice: string, computerChoice: string) => {
  switch (playerChoice + computerChoice) {
    case Combinations.ScissorsPaper:
    case Combinations.RockScissors:
    case Combinations.PaperRock:
    case Combinations.LizardPaper:
    case Combinations.SpockScissors:
    case Combinations.RockLizard:
    case Combinations.PaperSpock:
    case Combinations.SpockRock:
    case Combinations.ScissorsLizard:
    case Combinations.LizardSpock:
      return 1;
    case Combinations.RockRock:
    case Combinations.LizardLizard:
    case Combinations.PaperPaper:
    case Combinations.SpockSpock:
    case Combinations.ScissorsScissors:
      return 0;
    case Combinations.SpockLizard:
    case Combinations.LizardScissors:
    case Combinations.RockSpock:
    case Combinations.SpockPaper:
    case Combinations.LizardRock:
    case Combinations.ScissorsSpock:
    case Combinations.PaperLizard:
    case Combinations.RockPaper:
    case Combinations.ScissorsRock:
    case Combinations.PaperScissors:
      return -1;
    default:
      return 0;
  }
};
