function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitWise(5));
console.log(isPowerOfTwoBitWise(4));

/* function powerOfTwo(n) {
  while (n > 1) {
    n = n / 2;
  }
  return n === 1;
}

console.log(powerOfTwo(4)); */
// console.log(powerOfTwo(5));
// console.log(powerOfTwo(8));
// console.log(powerOfTwo(-2));
// console.log(powerOfTwo(2));
