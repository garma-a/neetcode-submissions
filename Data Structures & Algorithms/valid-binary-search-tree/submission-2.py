
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:

        def validate(left: float, node: Optional[TreeNode], right: float):
            if not node:
                return True
            if not (left < node.val < right):
                return False
            return validate(left, node.left, node.val) and validate(
                node.val, node.right, right
            )

        return validate(float("-inf"), root, float("inf"))
