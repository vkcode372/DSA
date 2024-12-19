/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWater=0,left=0,right=height.length-1;
    while(left<right){
      let width=right-left;
      let h=Math.min(height[left],height[right]);
      let cWater=width*h;
      maxWater=Math.max(maxWater,cWater);

      height[left]<height[right] ? left++ : right--;
    }
    return  maxWater;
};