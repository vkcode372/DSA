/**
 * Heapify function to maintain the heap property.
 *
 * @param {Array} arr - The input array to be heapified.
 * @param {number} n - The total number of elements in the array.
 * @param {number} i - The index of the element to heapify.
 *
 * @returns {void} The function modifies the input array in-place.
 */
const heapify = (arr, n, i) => {
    let largest = i; 
    let left = 2 * i + 1; 
    let right = 2 * i + 2;

    if (left < n && arr[largest] < arr[left]) {
        largest = left;
    }

    if (right < n && arr[largest] < arr[right]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[largest], arr[i]] = [arr[i], arr[largest]]; 
        heapify(arr, n, largest); 
    }
};

/**
 * Main function to perform heap sort.
 *
 * @param {Array} arr - The input array to be sorted.
 *
 * @returns {void} The function modifies the input array in-place.
 */
const heapSort = (arr) => {
    let n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for(let size = n - 1; size > 0; size--) {
        [arr[0], arr[size]] = [arr[size], arr[0]];
        heapify(arr, size, 0);
    }
};

// Example usage:
let arr = [24,5,2,1,0,78]; 
heapSort(arr);
console.log(arr);
