function binarySearch(arr, t) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (t == arr[mid]) {
      return mid;
    }
    if (t < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-1, 3, 5, 7, 9], 19));
