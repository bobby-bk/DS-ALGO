function maxSum(array){
    let best_sum=array[0]
    let current_sum=Number.MIN_SAFE_INTEGER; 
    let best_start=0
    for(let i=0 ;i<array.length;i++){
        current_sum=Math.max(current_sum+array[i],array[i]);
        if(current_sum>best_sum){
            best_sum=current_sum
        }
    }
    return best_sum
}
var a=[−2, 1, −3, 4, −1, 2, 1, −5, 4];
console.log(maxSum(a)); 