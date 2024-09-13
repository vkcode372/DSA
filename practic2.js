// count  the number of Occurrences for each string values 

let string="leetcode";
function count(string){
     let myobj={};
     if(string.length==0) return "provide the string";
     for(let i=0;i<string.length;i++){
         if(!myobj[string[i]]){
             myobj[string[i]]=1;
         }else{
          myobj[string[i]]= myobj[string[i]]+1;; 
         }
         
     }
     return myobj
}

let result=count(string);
console.log(result)
