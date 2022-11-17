/* Fighter class definition */
const maxLife = 100;

class Fighter {
  constructor(name, strenght, dexterity) {
    this.name = name;
    this.strenght = strenght;
    this.dexterity = dexterity;
    this.life = maxLife;
  }
  fight(enemy) {
    const potentialAttack = this.getRandom (this.strenght);
    const damage = Math.max(potentialAttack - enemy.dexterity, 0);
    enemy.life = Math.max(enemy.life - damage, 0);
  }

  getRandom(max){
    return Math.floor(Math.random() * max) + 1
  }

  isAlive(){
    return this.life > 0;
  }

}

module.exports = Fighter;
