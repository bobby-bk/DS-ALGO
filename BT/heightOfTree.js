class Node{
    constructor(val){
        this.value=val;
        this.left=null;
        this.right=null;
    }
}
root=new Node(5);
 root.left=new Node(3);
 root.right=new Node(6);
 root.left.left=new Node(2);
 root.left.right=new Node(4);
 root.right.right=new Node(7)

 function heightT(rot){
     if(rot==null){
         return 0;
     }
     return 1+ Math.max(heightT(rot.left),heightT(rot.right))

 }
h=heightT(root)
console.log(h)