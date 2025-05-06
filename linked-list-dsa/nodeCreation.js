class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Add a new node at the end of the list
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    // Add a new node at the beginning of the list
    prepend(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    }
  
    // Insert a new node at a specific index
    insertAt(data, index) {
      if (index < 0 || index > this.size) {
        return; // Or throw an error
      }
  
      if (index === 0) {
        this.prepend(data);
        return;
      }
  
      const newNode = new Node(data);
      let current = this.head;
      let previous = null;
      let count = 0;
  
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
  
      newNode.next = current;
      previous.next = newNode;
      this.size++;
    }
  
    // Remove a node at a specific index
    removeAt(index) {
      if (index < 0 || index >= this.size) {
        return null; // Or throw an error
      }
  
      if (index === 0) {
        this.head = this.head.next;
      } else {
        let current = this.head;
        let previous = null;
        let count = 0;
  
        while (count < index) {
          previous = current;
          current = current.next;
          count++;
        }
        previous.next = current.next;
      }
      this.size--;
    }
  
    // Get the data at a specific index
    getAt(index) {
      if (index < 0 || index >= this.size) {
        return null;
      }
  
      let current = this.head;
      let count = 0;
      while (count < index) {
        current = current.next;
        count++;
      }
      return current.data;
    }
  
    // Clear the linked list
    clear() {
      this.head = null;
      this.size = 0;
    }
  
    // Print the linked list data
    printList() {
      let current = this.head;
      let output = "";
      while (current) {
        output += current.data + (current.next ? " -> " : "");
        current = current.next;
      }
      console.log(output);
    }
  
    get sizeOfList() {
      return this.size;
    }
  }
  
  // Example Usage
  const singlyLinkedList = new SinglyLinkedList();
  singlyLinkedList.append(10);
  singlyLinkedList.append(20);
  singlyLinkedList.prepend(5);
  singlyLinkedList.insertAt(15, 2);
  singlyLinkedList.printList(); // Output: 5 -> 10 -> 15 -> 20
  console.log("Size:", singlyLinkedList.sizeOfList); // Output: Size: 4
  console.log("Element at index 1:", singlyLinkedList.getAt(1)); // Output: Element at index 1: 10
  singlyLinkedList.removeAt(2);
  singlyLinkedList.printList(); // Output: 5 -> 10 -> 20
  console.log("Size after removal:", singlyLinkedList.sizeOfList); // Output: Size after removal: 3
  singlyLinkedList.clear();
  singlyLinkedList.printList(); // Output:
  console.log("Size after clear:", singlyLinkedList.sizeOfList); // Output: Size after clear: 0