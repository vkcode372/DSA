/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n===0){
        return arr.slice()
    }
    let result=[];
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
     let nestedArr=flat(arr[i],n-1);
     result.push(...nestedArr);
    }else{
    result.push(arr[i])
    }
  }
  return result;
};