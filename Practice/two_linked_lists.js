//Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  //Node called 'mergedHead'
  var mergedHead = { val: -1, next: null };
  //Track current node
  var current = mergedHead;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      //Set connection from first node(-1) to list2
      current.next = list2;
      //Move on to the next node in list2
      list2 = list2.next;
    } else {
      current.next = list1;
      list1 = list1.next;
    }
    //Redefine the current node to equal the next node in list1 or list2
    current = current.next;
  }
  //Redefine the current node equal to the node inlist1 or list2 if either of them exists
  current.next = list1 || list2;
  console.log(mergedHead.next);

  return mergedHead.next;
};

mergeTwoLists([1, 2, 4], [1, 3, 4]);
