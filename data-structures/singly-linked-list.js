/*
* @author: Chisimdi Damian Ezeanieto
* @date: 11/02/2019
*/

// Define the linked list class and its methods.
// Piece of data = val.
// reference to the next node.
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
};

// let first = new Node("Hello");
// first.next = new Node("dear,");
// first.next.next = new Node("How are you?");
// first.next.next.next = new Node("I hope you are good?");
// console.log(first);

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        // Edge case: if there is no head on the list, set the head and the tail to the new value.
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        // Edge case: If there are no nodes in the list, return undefined
        if (this.length === 0) return undefined;
        // Loop through the list until you reach the tail
        let currNode = this.head;
        let newTail = currNode;
        while (currNode.next) {
            newTail = currNode;
            currNode = currNode.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return currNode;
    }

    shift() {
        // Edge case: If there are no nodes in the list, return undefined
        if (this.length === 0) return undefined;
        let currHead = this.head;
        this.head = currHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currHead;
    }
}

let list = new SinglyLinkedList();
list.push(3);
list.push(10);
list.push(11);
list.pop();
console.log('List', list);
list.shift();
list.shift();
console.log('New list', list);