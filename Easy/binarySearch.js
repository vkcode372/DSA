const binarySearch = (arr,target)=>{
    if(arr.length==0) return -1;
    if(arr.length==1) return 0;
    let start=0, end=arr.length-1,mid;
    while(start<=end){
        mid= Math.floor(start+((end-start)/2));
       if(arr[mid]==target){
        return mid;
       }else if(target>arr[mid]){
        start=mid+1;
       }else{
        end=mid-1;
       }

    }
    return -1
}

let arr=[2,5,6,9,23,46];
let target=46;
console.log(binarySearch(arr,target))