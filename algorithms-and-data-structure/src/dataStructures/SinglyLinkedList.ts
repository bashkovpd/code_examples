import { NodeValue } from './baseTypes';

class Node {
	next: this;
	value: NodeValue;
	
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class SinglyLinkedList {
	length: number;
	head: Node | null;
	tail: Node | null;

	constructor() {
		this.length = 0
		this.head = null
		this.tail = null
	}
	push(value: NodeValue) {
		const newNode = new Node(value)
		
		if (!this.head) {
			this.head = this.tail = newNode
		}
		else {
			this.tail.next = newNode
			this.tail = newNode
		}
		
		this.length++
		
		return this
	}
	pop() {
		// Condition for handle empty list
		if (!this.head) {
			return undefined
		}
		
		let current = this.head
		let newTail = current
		
		while (current.next) {
			newTail = current
			current = current.next
		}
		
		this.tail = newTail
		this.tail.next = null
		this.length--
		
		if (this.length === 0) {
			this.head = null
			this.tail = null
		}
		
		return current
	}
	shift() {
		if (!this.head) {
			return undefined
		}
		
		const oldHead = this.head
		
		this.head = oldHead.next
		this.length--
		
		if (this.length === 0) {
			this.tail = null
		}
		
		return oldHead
	}
	unshift(value: NodeValue) {
		const newNode = new Node(value)
		
		if (this.head === null) {
			this.head = this.tail = newNode
		}
		else {
			newNode.next = this.head
			
			this.head = newNode
		}
		
		this.length++
		
		return this
	}
	get(index: number) {
		if (index < 0 || index >= this.length) {
			return null
		}
		
		let currentNode = this.head
		
		for (let i = 0; i < index; i++) {
			currentNode = currentNode.next
		}
		
		return currentNode
	}
}

const list = new SinglyLinkedList()
list.push('Hello')
list.push('Goodbye')
list.push('!')

// console.log(list)
// console.log(list.unshift("FIRST"))
console.log(list.get(0))
