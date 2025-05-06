class DoublyNode {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    // Add a new node at the end of the list
    append(data) {
      const newNode = new DoublyNode(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
    // Add a new node at the beginning of the list
    prepend(data) {
      const newNode = new DoublyNode(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
      this.size++;
    }
  
   
    // Clear the doubly linked list
    clear() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }

    get sizeOfList() {
      return this.size;
    }
  }
 