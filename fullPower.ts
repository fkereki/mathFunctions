import { integerPower2 } from "./integerPower";
import { fractionalPower } from "./fractionalPower";

function fullPower(x: number, y: number): number {
  if (y < 0) {
    x = 1 / x;
    y = -y;
    // Or: return fullPower(1 / x, -y);
  }

  const intExp = Math.trunc(y);
  const fracExp = y - intExp;
  return integerPower2(x, intExp) * fractionalPower(x, fracExp);
}

export { fullPower };
