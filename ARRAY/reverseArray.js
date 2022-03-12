var array=[1,2,3,4,5,6,7,8,9]
console.log(array)
var n=array.length;
var halfOFArraySize=n/2
for(let i=0;i<halfOFArraySize;i++){
    let temp=array[i];
    array[i]=array[n-i-1]
    array[n-i-1]=temp
}
console.log(array)