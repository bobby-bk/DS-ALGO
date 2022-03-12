function rotateByK(array,k){
  for(let i=0;i<array.length;i++){
if(k>i){
    console.log(array[array.length-k+i])
}
else{
    console.log(array[i-k])
}
  }
}