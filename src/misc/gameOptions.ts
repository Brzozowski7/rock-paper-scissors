import scissors from "../images/icon-scissors.svg";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import lizard from "../images/icon-lizard.svg";
import spock from "../images/icon-spock.svg";

export const gameOptions: {
  value: string;
  alt: string;
  src: string;
  color: string;
}[] = [
  {
    value: "Scissors",
    alt: "scissors icon",
    src: scissors,
    color: "hsla(23, 90%, 52%, 1)",
  },
  {
    value: "Paper",
    alt: "paper icon",
    src: paper,
    color: "hsla(240, 100%, 50%, 1)",
  },
  {
    value: "Rock",
    alt: "rock icon",
    src: rock,
    color: "hsla(0, 100%, 50%, 1)",
  },
  {
    value: "Lizard",
    alt: "lizard icon",
    src: lizard,
    color: "hsla(270, 50%, 40%, 1)",
  },
  {
    value: "Spock",
    alt: "spock icon",
    src: spock,
    color: "hsla(180, 100%, 50%,1)",
  },
];
