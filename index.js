// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const Fighter = require("./Fighter.js");

const displayScore = (winner, loser) => {
  console.log(
    `${winner.name} 🔪 ${loser.name} ❤️ ${winner.name} : ${winner.life}`
  );
};

const heracles = new Fighter("🧔 Heracles", 20, 6);
const Nemean = new Fighter("🦁 Nemean Lion", 11, 13);

console.log(`${heracles.name} a ❤️ ${heracles.life} vie`);
console.log(`${Nemean.name} a ❤️ ${Nemean.life} vie`);

let round = 0;

while (heracles.isAlive() && Nemean.isAlive()) {
  round++;
  console.log(`round ${round}`);
  heracles.fight(Nemean);
  console.log(`${Nemean.name} a ❤️ ${Nemean.life} vie`);

  if (Nemean.isAlive()) {
    Nemean.fight(heracles);
    console.log(`${heracles.name} a ❤️ ${heracles.life} vie`);
  }
}

if (heracles.isAlive()) {
  displayScore(heracles, Nemean);
} else {
  displayScore(Nemean, heracles);
}
