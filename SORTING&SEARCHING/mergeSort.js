function mergeSorting(arr,left,right){
    if(right-left==1){
        return
    }
    mid=Math.floor(right/2)
    mergeSorting(arr,left,mid);
    mergeSorting(arr,mid+1,right)
    merge(arr,left,right)
}
function merge(arr,left,right){
    let n=Math.floor((right-left)/2);
    right=n;
    while(left<n){
        if(arr[left]>arr[right]){
            temp=arr[left]
            arr[left]=arr[right]
            arr[right]=temp
            left=left+1

        }
        else{
            right=right+1
        }
    }

}

var array=[6,5,3,1,8,7,2,4]
mergeSorting(array,0,array.length-1)
console.log(array)

