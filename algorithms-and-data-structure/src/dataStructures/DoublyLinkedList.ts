import { NodeValue } from './baseTypes';

class Node {
	value: NodeValue;
	next: this;
	previous: this;
	
	constructor(value) {
		this.value = value;
		this.next = null;
		this.previous = null;
	}
}

class DoublyLinkedList {
	length: number;
	head: Node | null;
	tail: Node | null;
	
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}
	
	push(value: NodeValue): this {
		const newNode = new Node(value);
		
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		}
		else {
			this.tail.next = newNode;
			newNode.previous = this.tail;
			this.tail = newNode;
		}
		
		this.length++;
		
		return this;
	}
	
	pop(): Node | null {
		if (this.head === null) return null;
		
		const oldTail = this.tail;
		
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		}
		
		this.tail = oldTail.previous;
		this.tail.next = null;
		oldTail.previous = null;
		
		this.length--;
		
		return oldTail;
	}
	
	shift(): Node | null {
		if (this.length === 0) return null
		
		const oldHead = this.head;
		
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		}
		else {
			this.head = oldHead.next;
			this.head.previous = null;
			oldHead.next = null;
		}
		
		this.length--;
		
		return oldHead;
	}
	
	unshift(value: NodeValue): this {
		const newNode = new Node(value);
		
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		}
		else {
			this.head.previous = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		
		this.length++;
		
		return this;
	}
	
	get(index): Node | null {
		if (index < 0 || index > this.length) return null;
		
		let currentNode: Node;
		let count: number;
		
		if (index <= this.length / 2) {
			currentNode = this.head;
			count = 0;
			
			while (count !== index) {
				currentNode = currentNode.next;
				count++;
			}
		}
		else {
			currentNode = this.tail;
			count = this.length - 1;
			
			while (count !== index) {
				currentNode = currentNode.previous;
				count--;
			}
		}
		
		return currentNode;
	}
	
	set(index, value): boolean {
		const nodeToUpdate = this.get(index);
		
		if (nodeToUpdate === null) {
			return false;
		}
		
		nodeToUpdate.value = value;
		
		return true;
	}
	
	insert(index: number, value: NodeValue): boolean {
		if (index < 0 || index > this.length) {
			return false;
		}
		
		if (index === 0) {
			this.unshift(value);
			
			return true;
		}
		if (index === this.length) {
			this.push(value);
			
			return true;
		}
	
		const nodeToInsert = new Node(value);
		const nodeBeforeInserted = this.get(index - 1);
		const nodeAfterInserted = nodeBeforeInserted.next;
		
		nodeBeforeInserted.next = nodeToInsert;
		nodeToInsert.previous = nodeBeforeInserted;
		nodeToInsert.next = nodeAfterInserted;
		nodeAfterInserted.previous = nodeToInsert;
		
		this.length++;
		
		return true;
	}
}

const list = new DoublyLinkedList();
list.push('First');
list.push('Second');
list.push('Third');

// console.log(list.shift());
// console.log(list);
// console.log(list.unshift('Fourth'));
console.log(list.get(-1));
console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(20));
