let reverseWords = function(s) {
    let arr= s.split(" ");
    let result = [];
    console.log(arr)
    for(let i=arr.length-1; i>=0; i--) {
        if(arr[i]){
            result.push(arr[i]);
        }
      
    }
    return result.join(" ");
};
console.log(reverseWords("a good   example"));