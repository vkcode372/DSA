function shorArray(arr){
    let len=arr.length;
    for(var i=0;i<len;i++){
        // Bubble sort algorithm
        for(var j=0;j<len-i-1;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;    
            }
        }
        console.log(arr);
    }

  return arr;  // returns the sorted array
}
//[1,2,3,5]
let arr = [5,2,3,1];
console.log(shorArray(arr));