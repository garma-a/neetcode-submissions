class Solution:
    def cloneGraph(self, node: Optional["Node"]) -> Optional["Node"]:
        if not node:
            return None
        oldToNew = {}

        def DFS(node: Node):
            if node in oldToNew:
                return oldToNew[node]
            copy = Node(node.val)
            oldToNew[node] = copy
            for nie in node.neighbors:
                copy.neighbors.append(DFS(nie))
            return copy

        return DFS(node)
