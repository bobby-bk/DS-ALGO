var array=[0,1,1,0,0,2,1,0,2]
var low=0;
var mid=0;
var high=array.length-1;
console.log(array)
while(mid<=high){
    if(array[mid]==0){
        if(low!=mid){
            
            temp=array[mid]
            array[mid]=array[low]
            array[low]=temp
        }
        
        low=low+1;
            mid=mid+1;
       
    }
    else{
    if(array[mid]==1){
        mid=mid+1;

    }
    else{
       temp= array[high]
       array[high]=array[mid]
       array[mid]=temp
       high=high-1;
    }
}
}

console.log(array)