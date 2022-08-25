import { NodeValue } from './baseTypes';

class Node {
	value: NodeValue;
	left: this;
	right: this;

	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	root: Node;
	
	constructor() {
		this.root = null;
	}
	
	insert(value: NodeValue) {
		const newNode = new Node(value);
		
		if (this.root === null) {
			this.root = newNode;
			
			return this;
		}
		else {
			let currentNode = this.root;
			
			while(true) {
				if (value === currentNode.value) return null;

				if (value < currentNode.value) {
					if (currentNode.left === null) {
						currentNode.left = newNode;
						
						return this;
					}
					else {
						currentNode = currentNode.left;
					}
				}
				else if (value > currentNode.value) {
					if (currentNode.right === null) {
						currentNode.right = newNode;
						
						return this;
					}
					else {
						currentNode = currentNode.right;
					}
				}
			}
		}
	}
	
	find(value: NodeValue): Node | null {
		if (this.root === null) {
			return null;
		}
		else {
			let currentNode = this.root;
			let wasValueFound = false;
			
			while(
				currentNode !== null &&
				!wasValueFound
			) {
				if (value < currentNode.value) {
					currentNode = currentNode.left;
				}
				else if (value > currentNode.value) {
					currentNode = currentNode.right;
				}
				else {
					wasValueFound = true;
				}
			}
			
			if (!wasValueFound) {
				return null;
			}
			
			return currentNode;
		}
	}
	
	contains(value): boolean {
		if (this.root === null) {
			return false;
		}
		else {
			let currentNode = this.root;
			let wasValueFound = false;
			
			while(
				currentNode !== null &&
				!wasValueFound
			) {
				if (value < currentNode.value) {
					currentNode = currentNode.left;
				}
				else if (value > currentNode.value) {
					currentNode = currentNode.right;
				}
				else {
					return true;
				}
			}
			
			return false;
		}
	}
}
