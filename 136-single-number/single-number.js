/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj={};
   for(let i=0;i<nums.length;i++){
       if(!obj.hasOwnProperty(nums[i])){
        obj[nums[i]]=false
       }else{
        obj[nums[i]]=true;
       }
   }
    for(let [key,value] of Object.entries(obj)){
      if(value==false){
        return Number(key)
      }
    }
    // let answer=0;
    // for(let i=0;i<=nums.length;i++){
    //    answer^=nums[i];
    // }
    // return answer;
};