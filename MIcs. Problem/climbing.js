function climbingStairCase(n) {
  const noOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[n - 1];
}

console.log(climbingStairCase(2));
console.log(climbingStairCase(3));
console.log(climbingStairCase(4));
console.log(climbingStairCase(5));

