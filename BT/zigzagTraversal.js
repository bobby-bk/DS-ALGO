function zigZag(rot){
    let queue=[rot]
    let stack=[]
  while(queue.length || stack.length){
      while(queue.length){
     p= queue.pop()
     console.log(p.value)
     if(p.left){
        stack.push(p.left)

    }
     if(p.right){
         stack.push(p.right)
     }
    

  }
  while(stack.length){
      p=stack.pop();
      console.log(p.value)
     
    if(p.right){
        queue.push(p.right)
    }
    if(p.left){
        queue.push(p.left)

    }
    
  }
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
 zigZag(root1)