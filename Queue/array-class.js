// Queue works on principle of First In, Last Out (FIFO))
class Queue {
    constructor(){
        this.items = []
    }

    enqueue(element){
    // The enqueue method is nothing but the push method from the array
        this.items.push(element)
    }

    dequeue(){
    // The dequeue method is nothing but the shift method from the array which will pop last element from the array.
        if(this.isEmpty()){
            console.log("Queue is empty")
            return 
        }
        return this.items.shift()
    }

    peek(){
    // The peek method shows the every first element from the array which is 0th index
        if(this.isEmpty()){
            console.log("Queue is empty")
            return 
        }
        return this.items
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length
    }

    print(){
        if(this.isEmpty()){
            console.log("Queue is empty")
            return 
        }
        console.log(this.items.join(" -> "))
    }

}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log("poped element: ", queue.dequeue())
console.log("size of the queue: ", queue.size())
console.log("quick look on queue: ", queue.peek())
queue.print()
// queue.enqueue(1)