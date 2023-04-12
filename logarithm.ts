function logarithmBase(x: number, base: number): number {
  let result = 0;
  while (x >= base) {
    x /= base;
    result++;
  }

  // now x<base

  let n = 1;
  while (Math.abs(base - 1) > 0.000_000_000_000_001) {
    base = Math.sqrt(base);
    n /= 2;
    if (x >= base) {
      x /= base;
      result += n;
    }
  }

  return result;
}

function logarithm10(x: number): number {
  return logarithmBase(x, 10);
}

let E = 0;
let n = 1;
for (let i = 1; i < 20; i++) {
  E += 1 / n;
  n *= i;
}
/*
2.7182818284590455
*/

function logarithm(x: number): number {
  return logarithmBase(x, E);
}

export { logarithmBase, logarithm10, logarithm };
