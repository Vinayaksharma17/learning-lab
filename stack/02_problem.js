// Reverse a String using Stack

//Problem description -
    // Given a string str, the task is to reverse it using stack.

// Time complexity = O(n), not O(n^2), because we are iterating through the string twice, but each iteration is linear and independent.
// Space complexity = O(n), As the size of the array is depend upon the input.
function reverseStr(str) {
    let stack = [];
    // Push the characters into the stack
    for(let i = 0; i < str.length; i++){
        stack.push(str[i])
    }
    // Create an array to hold the reversed characters
    // let reverse = [] // You can define in this way or 
    let reverse = new Array(str.length)
    // Pop the characters of the stack and store in the array
    for(let i = 0; i < str.length; i++){
        reverse[i] = stack.pop()
    }
    //if you directly return reverse, you will get the output in array but we want to have it in string
    // return reverse
    return reverse.join('')
}
const str = "abcdef"
console.log(reverseStr(str))

// Let's solve this using built-in method called reverse

function builtInReverse(str2){
    //convert string to array, reverse it, and join back to string.
    return str2.split('').reverse().join('')
}
const str2 = "ghijklm"
console.log(builtInReverse(str2))