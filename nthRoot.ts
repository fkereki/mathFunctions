import { fullPower } from "./fullPower";

function nthRoot(x: number, n: number): number {
  return fullPower(x, 1 / n);
}

export { nthRoot };
