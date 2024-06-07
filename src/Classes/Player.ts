class Player extends Entity {
  heal(): number {
    this.hp += 10;
    return this.hp > 100 ? 100 : this.hp;
  }
}
