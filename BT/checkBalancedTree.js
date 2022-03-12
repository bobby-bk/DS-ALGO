var isBalanced= (root,res)=>{
    if(root==null){
        return 1;
    }
   l= isBalanced(root.left,res)
   r=isBalanced(root.right,res)
   res=Math.abs(l-r)
   console.log(res)
   return 1+Math.max(l,r)

}
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
 root1=Object.assign({},root)
 var res=-1;
 isBalanced(root1,res);
if(res>1){
    console.log(res+'balanced')
}
else{
    console.log(res+' not balanced');
} 
