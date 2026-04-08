# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:

        def validate(curNode: Optional[TreeNode]):
            if not curNode or (not curNode.left and not curNode.right):
                return True
            if (curNode.left and curNode.left.val > curNode.val) or (
                curNode.right and curNode.right.val < curNode.val
            ):
                return False

            return validate(root.left) and validate(root.right)

        return validate(root)
