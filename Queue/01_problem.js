// Reversing the first K elements of a Queue

/**
 * Given an integer k and a queue of intergers. The task is to reverse the order of the
 * first k elements of the queue, leaving the other elements in the same relative order.
 * 
 * 
 *  */ 

import { Queue } from "./array-class.js"


function reverseFirstK(queue, k){
    moveKtoEnd(queue, k)
    let size = queue.size() - k
    while (size-- > 0) {
        let x = queue.front()
        queue.dequeue()
        queue.enqueue(x)
    }
    return queue
}

function moveKtoEnd(queue, k) {
    if (k === 0) return
    let e = queue.front()
    queue.dequeue()
    moveKtoEnd(queue, k - 1)
    queue.enqueue(e)
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)

let k = 4

let q = reverseFirstK(queue, k)

while (!q.isEmpty()){
    console.log(q.front())
    q.dequeue()
}