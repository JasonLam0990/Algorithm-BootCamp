// 解法对应于Leetcode 141 链表中环的检测

// 解法一：快慢指针法

// 思路：快指针跑在前头，慢指针在后，如果存在环的话，快指针就一定能追上慢指针
// 注意事项：while的条件，因为快指针跑的快，所以主要是判断fast的临界。只有当
// fast和fast.next均不为null时，才不会发生TypeError: Cannot read property 'next' of null之类的错误

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let fast = head
    let slow = head
    while (fast != null && fast.next != null) {
        fast = fast.next.next
        slow = slow.next
        if (fast == slow) {
            return true
        }
    }
    return false
};

// 解法二：Set集合映射法

// 思路：新建一个Set，遍历链表，判断Set是否含有当前处理的节点，若有，说明之前已经遇到过，有环。
// 否则就说明是新的节点，那么就add到Set中，然后初夏下一个节点

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let set = new Set()
    while (head != null) {
        if (set.has(head)) {
            return true
        }
        set.add(head)
        head = head.next
    }
    return false
};