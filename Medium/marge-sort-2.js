let margeSort = (arr, start, end) => {
    if (arr.length <= 1) return arr;
    if (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        margeSort(arr, start, mid);
        margeSort(arr, mid + 1, end);
        marge(arr, start, mid, end);
    }
};

let marge = (arr, start, mid, end) => {
    let i = start,
        j = mid + 1,
        result = [];

    while (i <= mid && j <= end) {
        if (arr[i] <= arr[j]) {
            result.push(arr[i]);
            i++;
        } else {
            result.push(arr[j]);
            j++;
        }
    }
    while (i <= mid) {
        result.push(arr[i]);
        i++;
    }
    while (j <= end) {
        result.push(arr[j]);
        j++;
    }

    // Copy sorted result back to the original array at the correct position
    for (let k = 0; k < result.length; k++) {
        arr[start + k] = result[k];
    }
};

let main = () => {
    let arr = [11, 3, 2, 4];
    margeSort(arr, 0, arr.length - 1);
    console.log(arr);
};

main();
