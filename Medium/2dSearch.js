
var searchMatrix = function(matrix, target) {
    let row = matrix.length;
    let col = matrix[0].length;
    for (let i = 0; i < row; i++) {
        if (matrix[i][0] <= target && target <= matrix[i][col - 1]) {
            let start = 0, end = col - 1;
            while (start <= end) {
                let mid = Math.floor((start + end) / 2);
                
                if (matrix[i][mid] === target) {
                    return true;
                } else if (matrix[i][mid] < target) {
                    start = mid + 1;
                } else {
                    end = mid - 1;
                }
            }
            return false;
        }
    }
    
    return false;
};

let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 13;
let res = searchMatrix(matrix, target);
console.log(res);
