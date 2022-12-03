enum Move {
  Rock = 1,
  Paper,
  Scissors,
}

enum Result {
  Lose,
  Draw = 3,
  Win = 6,
}

const Cons = {
  A: Move.Rock,
  B: Move.Paper,
  C: Move.Scissors,
  X: Move.Rock,
  Y: Move.Paper,
  Z: Move.Scissors,
};

const Results = {
  X: Result.Lose,
  Y: Result.Draw,
  Z: Result.Win,
};

const winResults = {
  [Result.Lose]: {
    [Move.Rock]: Move.Scissors,
    [Move.Paper]: Move.Rock,
    [Move.Scissors]: Move.Paper,
  },
  [Result.Draw]: {
    [Move.Rock]: Move.Rock,
    [Move.Paper]: Move.Paper,
    [Move.Scissors]: Move.Scissors,
  },
  [Result.Win]: {
    [Move.Rock]: Move.Paper,
    [Move.Paper]: Move.Scissors,
    [Move.Scissors]: Move.Rock,
  },
};

type kcon = keyof typeof Cons;
type krst = keyof typeof Results;

function calculateShouldWin(p: Move, shouldWin: Result) {
  return winResults[shouldWin][p];
}

function calculateWinner(p1: Move, p2: Move) {
  if (p1 == p2) return Result.Draw;

  switch (p1) {
    case Move.Rock:
      if (p2 === Move.Paper) return Result.Win;
      break;
    case Move.Paper:
      if (p2 === Move.Scissors) return Result.Win;
      break;
    case Move.Scissors:
      if (p2 === Move.Rock) return Result.Win;
      break;
    default:
      return Result.Lose;
  }
  return Result.Lose;
}

console.log("Day #2");

let score = 0;

const input = require("./input") as string;
for (let line of input.split("\n")) {
  const [elfChoice, myChoice] = line.split(" ");
  const result = calculateWinner(
    Cons[elfChoice as kcon],
    Cons[myChoice as kcon]
  );
  score += result + Cons[myChoice as kcon];
}
console.log(`Part 1: ${score}`);

score = 0

for (let line of input.split("\n")) {
  const [elfChoice, shouldWin] = line.split(" ");
  score +=
    Results[shouldWin as krst] +
    calculateShouldWin(Cons[elfChoice as kcon], Results[shouldWin as krst]);
}
console.log(`Part 2: ${score}`);
