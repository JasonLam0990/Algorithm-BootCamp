// 解法对应于Leetcode 21 两个有序的链表合并

// 解法一：新建链表法

// 思路：新的链使用哨兵guard，然后l1与l2反复比较头节点大小，小的就摘除，接到新的链后面。
// 相等的话就l1先l2后，都接到新的链后面。当其中一条链为空，就把另外一条链剩下的都接到新链后即可。

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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    let guard = new ListNode(null)
    let cursor = guard
    while (l1 && l2) {
        if (l1.val < l2.val) {
            cursor.next = l1
            l1 = l1.next
        } else if (l1.val > l2.val) {
            cursor.next = l2
            l2 = l2.next
        } else {
            cursor.next = l1
            l1 = l1.next
            cursor = cursor.next
            cursor.next = l2
            l2 = l2.next
        }
        cursor = cursor.next
    }
    cursor.next = l1 || l2
    return guard.next
};

// 解法二：原地合并法（递归）

// 递归指的是把问题分解成为规模更小的、 具有与原问题有着相同解法的问题。

// 递归特性一： 必须有一个明确的结束条件
// 递归特性二： 每次递归都是为了让问题规模变小
// 递归特性三：层次过多会导致栈溢出， 且效率不高

// 思路：使用递归的方法，明确结束条件是当其中一条链为空时，递归就会结束。每次递归都使得head所在的链少一个节点，进而使问题规模变小

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2
    if (!l2) return l1

    let head = l1.val < l2.val ? l1 : l2
    let left = l1.val < l2.val ? l2 : l1

    head.next = mergeTwoLists(head.next, left)

    return head
};