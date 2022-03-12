
class Node{
    constructor(val){
        this.value=val;
        this.left=null;
        this.right=null;
    }
}
var traverseTreeByLevel=function(root){
    let queue=[root]
    while(queue.length){
        root=queue.shift()
    console.log(root.value);
    if(root.left){
        queue.push(root.left)
    }
    if(root.right){
        queue.push(root.right)
    }
    
}


}
 root=new Node(5);
 root.left=new Node(3);
 root.right=new Node(6);
 root.left.left=new Node(2);
 root.left.right=new Node(4);
 root.right.right=new Node(7)
 console.log(root)
 //console.log(typeof(root))
 traverseTreeByLevel(root)
