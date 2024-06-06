let nums=[0,1,2,2,3,0,4,2]
let val=2;

var removeElement = function (nums, val) {
    let j=0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            console.log("enter")
            nums[j] =nums[i];   
            j++;
        }
    }
console.log("return")             
    return j
}
console.log(
    removeElement(nums,val)
)
