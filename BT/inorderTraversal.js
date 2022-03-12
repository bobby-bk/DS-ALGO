function inorderTByRecurssion(root){
    if(root==null){
        return
    }
    inorderTByRecurssion(root.left)
    console.log(root.value)
    inorderTByRecurssion(root.right)
}
function inorderTByIteration(root){
    inorderStack=[]
    while(root || inorderStack.length){
        while(root){
            inorderStack.push(root)
            root=root.left
        }
        lastNode=inorderStack.pop()
        console.log(lastNode.value)
        root=lastNode.right;

    }
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
 //inorderTByRecurssion(root1)
 inorderTByIteration(root1)
