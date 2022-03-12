var array1=[1, 3, 4, 5, 7]
var array2=[2,3,5,6]
var union=[]
var intersection=[]

function findUnionIntersection(array1,array2,union,intersection){
let n1=array1.length;
let n2=array2.length;
let i=0;
let j=0;
while(i<n1 && j<n2){
    if(array1[i]==array2[j]){
        intersection.push(array1[i])
        union.push(array1[i])
        i=i+1;
        j=j+1
    }
    else{
    if( array1[i]<array2[j]){
        union.push(array1[i])
        i=i+1
    }
    else{
        union.push(array2[j])
        j=j+1


    }
}
}
while(i<n1){
    union.push(array1[i])
    i=i+1
}
while(j<n2){
    union.push(array2[j])
    j=j+1
}
   
}


findUnionIntersection(array1,array2,union,intersection)

console.log(union)
console.log(intersection)
