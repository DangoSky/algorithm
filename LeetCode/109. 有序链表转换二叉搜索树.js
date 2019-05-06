/* 
  给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。
  本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

  示例:
  给定的有序链表： [-10, -3, 0, 5, 9],

  一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：
        0
      / \
    -3   9
    /   /
  -10  5
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

// 把中间结点作为根节点，左右两边的结点分贝作为左右子树
var sortedListToBST = function(head) {
  if(head === null) {
    return null;
  }
  let slow = head;
  let fast = head;
  // 保存中间结点的前一个结点，便于后面切割head分离出左子树
  let pre = slow;
  // 通过快慢指针找到中间结点
  // 此处判断条件不能是 fast && fast.next。如果是这样的话，后续的中间结点可能会和右子树重复。
  while(fast.next && fast.next.next) {
    pre = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  // 右子树
  fast = slow.next;
  // 左子树
  pre.next = null;
  let root = new TreeNode(slow.val);
  // 如果左子树是中间结点相同的话，说明此时没有左子树。
  if(head !== slow) {
    root.left = sortedListToBST(head);
  }
  root.right = sortedListToBST(fast);
  return root;
};