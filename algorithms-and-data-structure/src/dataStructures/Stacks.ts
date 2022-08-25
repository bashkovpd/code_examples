import { NodeValue } from './baseTypes';

class Node {
	value: NodeValue;
	next: this;
	
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	size: number;
	first: Node | null;
	last: Node | null;
	
	constructor() {
		this.size = 0;
		this.first = null;
		this.last = null;
	}
	
	push(value: NodeValue): number {
		const newNode = new Node(value);
		
		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		}
		else {
			newNode.next = this.first;
			this.first = newNode;
		}
		
		return ++this.size;
	}
	
	pop(): Node | null {
		if (this.size === 0) {
			return null;
		}
		
		const oldFirst = this.first;

		if (this.size === 1) {
			this.first = null;
			this.last = null;
		}
		else {
			this.first = oldFirst.next;
		}
		
		oldFirst.next = null;
		
		return oldFirst;
	}
}
