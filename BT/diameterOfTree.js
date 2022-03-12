  function diameterOfTree(root,res){
      if(root==null){
          return 0
      }
      l=diameterOfTree(root.left,res);
      r=diameterOfTree(root.right,res);
     res= Math.max(l+r+1,res)
     return 1+Math.max(l,r);


  }