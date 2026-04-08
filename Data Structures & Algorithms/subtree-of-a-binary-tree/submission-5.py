from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        def valid(r: Optional[TreeNode], s: Optional[TreeNode]) -> bool:
            if not r and not s:
                return True
            if not r and s or not s and r:
                return False
            if r.val != s.val:  # type:ignore
                return valid(r.left, s) or valid(r.right, s)  # type:ignore
            else:
                return valid(r.left, s.left) and valid(r.right, s.right)  # type:ignore

        return valid(root, subRoot)
