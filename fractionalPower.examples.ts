import { fractionalPower } from "./fractionalPower";

console.log(fractionalPower(2, 0.5), 2 ** 0.5);
console.log(fractionalPower(2, 0.123456789), 2 ** 0.123456789);

console.log(fractionalPower(0.2, 0.5), 2 ** 0.5);
console.log(fractionalPower(0.2, 0.123456789), 2 ** 0.123456789);
