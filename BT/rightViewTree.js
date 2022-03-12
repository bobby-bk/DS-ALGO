function rightViewT(root,level,max_level){
    if(root==null){
        return
    }
    if(max_level<level){
        console.log(root.value)
    }
    rightViewT(root.right,level+1,max_level)
    rightViewT(root.left,level,max_level)

}