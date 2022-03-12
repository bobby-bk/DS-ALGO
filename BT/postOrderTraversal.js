function postOrderT(root){
    if(root==null){
        return
    }
    postOrderT(root.left)
    postOrderT(root.right)
    console.log(root.value)

}
