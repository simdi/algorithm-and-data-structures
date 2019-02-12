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

    // Add to the list.
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

    // Remove the last node in the list.
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

    // Remove the first node in the list.
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

    // Add a new node to the beginning of the list.
    unshift(val) {
        const node = new Node(val);
        // Edge case: If there are no nodes in the list, make the head and the tail to be the new node.
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    // Get a node based off of it's index.
    get(index) {
        // Edge case: If index is less than zero or index is greater than the length of the list, return null.
        if (this.length < 0 || index >= this.length) return null;

        let count = 0;
        let current = this.head;
        while(count !== index) {
            current = current.next;
            count++;
        }
        return current;
    }

    // Update a node with the value passed.
    set(index, val) {
        let found = this.get(index);
        if (found) {
            found.val = val;
            return true;
        }
        return false;
    }

    // insert a node with the index passed to the current val.
    insert(index, val) {
        // Edge case: if index is less than zero or index is greater the length of the list, return undefined;
        if (this.length < 0 || index > this.length) return false;
        if (this.length === 0) return !!this.unshift(val);
        if (this.length === index) return !!this.push(val);
        const node = new Node(val);
        let prevNode = this.get(index - 1);
        let temp = prevNode.next;
        prevNode.next = node;
        node.next = temp;
        this.length++;
        return true;
    }
}

let list = new SinglyLinkedList();
list.push(3);
list.push(10);
list.push(11);
list.push(20);
list.insert(4, 19);
console.log('New list', list);
// 3 -> 4 -> 5 -> 9
    //     c
    // p -> new ->c