import { logarithm } from "./logarithm";

console.log(logarithm(2, 10));
console.log(Math.log10(2));

console.log(logarithm(567.89, 12.34));
console.log(Math.log10(567.89) / Math.log10(12.34));

export { logarithm };
