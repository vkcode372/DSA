let sort = (arr) => {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  return margSort(sort(leftArr), sort(rightArr));
};

let margSort = (leftArr, rightArr) => {
  let result = [];

  // While both arrays have elements
  while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
          result.push(leftArr.shift());
      } else {
          result.push(rightArr.shift());
      }
  }

  // Append any remaining elements in leftArr or rightArr
  return [...result, ...leftArr, ...rightArr];
};

console.log(sort([11, 3, 2, 4, 5,1]));
