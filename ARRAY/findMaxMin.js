var array=[1,2,3,4,5,6,7,8,9,0,-6]
var max=array[0]
min=array[0]
for (let i=1;i<array.length;i++){
    max=Math.max(max,array[i]);
    min=Math.min(min,array[i])

    
}

console.log(max+' '+min)