
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:

        queue = collections.deque()
        queue.append(root)
        ans = []
        while queue:
            qlen = len(queue)
            level = []
            for _ in range(qlen):
                top = queue.popleft()
                if top:
                    level.append(top.val)
                    queue.append(top.left)
                    queue.append(top.right)
            if level:
                ans.append(level)

        return ans
