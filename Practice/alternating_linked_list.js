// var list = 1 -> 2 -> 3 -> 4 -> 5 -> null
// alternatingSplit(list).first === 1 -> 3 -> 5 -> null
// alternatingSplit(list).second === 2 -> 4 -> null

//Template for nodes
function Node(data) {
  this.data = data;
  this.next = null;
}

//Determines which alternating sequence we are returning
function Context(first, second) {
  this.first = first;
  this.second = second;
}

function alternatingSplit(head) {
  //if (!head || !head.next) throw new Error("invalid arguements");
  return new Context(split(head), split(head.next));
}

function split(head) {
  const list = new Node(head.data);
  if (head.next && head.next.next) list.next = split(head.next.next);
  return list;
}

var list = {data:1}
console.log(alternatingSplit(list).first);