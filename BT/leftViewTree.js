function leftViewT(root,level,max_level){
    if(root==null){
        return
    }
    if(max_level<level){
        console.log(root.value)
        max_level=level
    }
    leftViewT(root.left,level+1,max_level);
    leftViewT(root.right,level,max_level);
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
 max_level=0
 level=1
 leftViewT(root,1,max_level)