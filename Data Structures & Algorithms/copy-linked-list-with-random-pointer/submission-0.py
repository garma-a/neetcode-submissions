class Solution:
    def copyRandomList(self, head: Optional[Node]) -> Optional[Node]:
        if not head:
            return None
        mp, temp = {}, head
        while temp:
            mp[temp] = Node(temp.val)
            temp = temp.next
        temp = head
        while temp:
            mp[temp].next = mp.get(temp.next)
            mp[temp].random = mp.get(temp.random)
            temp = temp.next
        return mp[head]
