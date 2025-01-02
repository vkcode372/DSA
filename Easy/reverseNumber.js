reverseNumber=(num)=>{
    let reverse = 0;
    while(num!=0){
        let pop = num%10;
        num = parseInt(num/10);
        reverse = reverse*10 + pop;
    }
   return reverse;
}
let num=-123
console.log(reverseNumber(num))