// Reversing the first K elements of a Queue

/**
 * Given an integer k and a queue of intergers. The task is to reverse the order of the
 * first k elements of the queue, leaving the other elements in the same relative order.
 * 
 * 
 *  */ 

function queueTheNumber(input, check) {
    const queuedElement = new Array(input.length)
    for(let i = 0; i < input.length; i++){
        queuedElement.push(input[i])
    }
    return queuedElement
}

const input = "12345"
const check = "3"
console.log(queueTheNumber(input, check))