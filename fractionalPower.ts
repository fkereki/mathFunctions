// Let's assume x>0 (it can be fixed otherwise)
// We have |y|<1; let's also assume 0<y
// (if not, calculate (1/x)**(-y))

function fractionalPower(x: number, y: number): number {
  let result = 1;
  while (Math.abs(x - 1) > 0.000_000_000_000_001) {
    y *= 2;
    x = Math.sqrt(x);
    if (y >= 1) {
      result *= x;
      y--;
    }
  }
  return result;
}

export { fractionalPower };
