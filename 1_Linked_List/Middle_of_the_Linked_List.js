// 解法对应于Leetcode 876 求链表的中间结点

// 解法一：快慢指针法

// 思路：这个很简单，就没什么好说的了。

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
var middleNode = function (head) {
    let fast = head
    let slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
};