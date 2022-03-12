var array=[-9,-8,0,9,7,-4,0,-6,-4,7,3,-4]
console.log(array)

function posNegPartion(list){
    let low=0
  for(let i=0;i<list.length;i++){
      if(list[i]<0){
          temp=list[low]
          list[low]=list[i]
          list[i]=temp
          low=low+1;
      }

  }
  return list
}

console.log(posNegPartion(array))
