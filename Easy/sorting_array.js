function shorArray(arr){
    for(var i=0;i<arr.length;i++){
        // Bubble sort algorithm
        for(var j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;    
            }
        }
    }
  return arr;  // returns the sorted array
}

let arr = [5,2,3,1];
console.log(shorArray(arr));