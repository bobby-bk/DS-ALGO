class Node{
    constructor(val){
        this.value=val;
        this.left=null;
        this.right=null;
    }
}
var reverseLevelTraversal=function(root){
    var parentNode=[root]
    var queue=[]
   while(parentNode.length){
       root=parentNode.shift()
      queue.push(root.value)
       if(root.left){
           parentNode.push(root.left)
       }
       if(root.right){
           parentNode.push(root.right)
       }
   }
   while(queue.length){
       console.log(queue.pop())
   }

}
root=new Node(5)
root.left=new Node(3);
root.right=new Node(6);
root.left.left=new Node(2);
root.left.right=new Node(4);
root.right.right=new Node(7);
reverseLevelTraversal(root)