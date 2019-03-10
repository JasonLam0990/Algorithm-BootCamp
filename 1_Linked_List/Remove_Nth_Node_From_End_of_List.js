// 解法对应于Leetcode 19 删除链表倒数第 n 个结点

// 解法一：快慢指针法 - （一趟搞定）

// 思路：为了方便处理只有一个节点的情况，我们引入头指针guard。让快慢指针fast & slow均指向guard，然后
// 看传入的n的值，n为多少，则快指针就先走几步，由于我们引入了头节点，所以快指针相应的要多走一步，故为n+1。
// 接下来就是快慢指针同时往后走，直到快指针走到头。我们画图可以发现，当前的slow处于待删除节点的前方，我们接下来就使用slow.next = slow.next.next
// 即可删除对应的节点了，之后再返回头指针的next即可。

// 注意事项：引入头指针后，fast应先走n+1步。做链表题一定要同时画一画草图，思路更清晰

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let guard = new ListNode(null)
    guard.next = head
    let fast = guard
    let slow = guard
    for (let i = 0; i < n + 1; i++) {
        fast = fast.next
    }
    while (fast) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return guard.next
};

// 解法二：快慢指针法 - （两趟搞定）

// 思路：同样的，哨兵guard头节点是为了处理只有一个节点时的特殊情况。
// 第一遍先从头遍历完链表，计算出从head走到链表结尾需要的步数length。然后用length-n算出从head要到倒数第n个节点前需要的步数
// 那么如果是从guard开始走length - n步就可以走到待删除节点的前面，然后使用cursor.next = cursor.next.next即可

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let guard = new ListNode(null)
    guard.next = head
    let cursor = head
    let length = 0
    while (cursor) {
        length++
        cursor = cursor.next
    }
    cursor = guard
    length -= n
    while (length) {
        length--
        cursor = cursor.next
    }
    cursor.next = cursor.next.next
    return guard.next
};