
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        if not root:
            return -1
        hp = []
        heapq.heapify(hp)

        def DFS(curNode: Optional[TreeNode]):
            if not curNode:
                return
            heapq.heappush(hp, -curNode.val)
            if len(hp) > k:
                heapq.heappop(hp)
            if curNode.left:
                DFS(curNode.left)
            if curNode.right:
                DFS(curNode.right)

        DFS(root)

        return -hp[0] if hp else -1
