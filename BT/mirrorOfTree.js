function mirrorOfT(root){
  if(root==null){
      return
  }
  temp=root.left
  root.left=root.right
  root.right=temp
  if(root.left){
      mirrorOfT(root.left)
  }
  if(root.right){
      mirrorOfT(root.right)
  }
}
function swapNode(){}

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

 console.log(root);
 mirrorOfT(root)
 console.log(root)