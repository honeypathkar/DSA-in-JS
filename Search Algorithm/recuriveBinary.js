function recursiveBinary(arr, t) {
  return search(arr, t, 0, arr.length - 1);
}

function search(arr, t, left, right) {
  if (left > right) {
    return -1;
  }
  let mid = Math.floor((left + right) / 2);
  if (t === arr[mid]) {
    return mid;
  }

  if (t < arr[mid]) {
    return search(arr, t, left, mid - 1);
  } else {
    return search(arr, t, mid + 1, right);
  }
}

console.log(recursiveBinary([-1, 20, 40, 100, 120], 120));
console.log(recursiveBinary([-1, 20, 40, 100, 120], 40));
console.log(recursiveBinary([-1, 20, 40, 100, 120], -10));

