abstract class Random {
  static rnd(start: number, end: number): number {
    const startFloor = Math.floor(start);
    const endFloor = Math.floor(end);
    return Math.floor(Math.random() * (endFloor - startFloor + 1) + startFloor);
  }
}
