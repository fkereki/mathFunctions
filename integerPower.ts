// Let's assume x>0 (it can be fixed otherwise)
// Let's also assume y>0 (if not, calculate (1/x)**(-y))

function integerPower(x: number, y: number): number {
  if (y < 0) {
    return integerPower(1 / x, -y);
  }

  let result = 1;
  for (let i = 1; i <= y; i++) {
    result *= x;
  }
  return result;
}

function integerPower2(x: number, y: number): number {
  if (y < 0) {
    return integerPower2(1 / x, -y);
  } else if (y === 0) {
    return 1;
  } else if (y % 2 === 0) {
    return integerPower2(x * x, y / 2);
  } else {
    return x * integerPower2(x, y - 1);
  }
}

function integerPower3(x: number, y: number, result: number = 1): number {
  if (y < 0) {
    return integerPower3(1 / x, -y, result);
  } else if (y === 0) {
    return result;
  } else if (y % 2 === 0) {
    return integerPower3(x * x, y / 2, result);
  } else {
    return integerPower3(x, y - 1, x * result);
  }
}

function integerPower4(x: number, y: number, result: number = 1): number {
  for (;;) {
    if (y < 0) {
      x = 1 / x;
      y = -y;
    } else if (y === 0) {
      return result;
    } else if (y % 2 === 0) {
      x = x * x;
      y = y / 2;
    } else {
      result *= x;
      y = y - 1;
    }
  }
}

export { integerPower, integerPower2, integerPower3, integerPower4 };
