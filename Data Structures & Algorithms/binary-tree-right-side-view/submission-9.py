class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        ans = []

        def DFS(curNode, depth):
            if not curNode:
                return
            if len(ans) == depth:
                ans.append(curNode.val)
            DFS(curNode.right, depth + 1)
            DFS(curNode.left, depth + 1)
            
        DFS(root, 0)


        return ans
