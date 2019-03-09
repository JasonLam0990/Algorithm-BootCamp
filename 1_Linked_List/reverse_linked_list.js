// 解法对应于Leetcode 206 单链表反转

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let node = null
    let cursor = head
    while (cursor != null) {
        let nextNode = cursor.next
        cursor.next = node
        node = cursor
        cursor = nextNode
    }
    return node
};

// 思路：在遍历单链表的同时反转指针，从而达到使单链表逆序的功能。
// 注意事项：要在纸上简单画一下过程，理顺一下每一步的顺序，不要丢失指针即可。

// 方法：首先新建null节点为node，并让一个游标cursor指向head，因为我们需要反转指针，
// cursor.next = node如果先执行了的话，就会造成丢失指针，故需要有一个临时的nextNode
// 保存当前处理节点的下一个节点，并在最后使得cursor = nextNode