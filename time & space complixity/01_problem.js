// What is the time complexity of the function test ? What is its space complexity ?
function test(n) {
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            console.log("hello")
        }
    }
}

console.log(test(5))

// The time complexity of test is O(N^2)
// The space complexity is O(1) as no additional space proportional to n is used

// Another problem here only

// What is the time complexity of the function test ? What is its space complexity ?
function test1(n){
    let result = []
    for (let i = 0; i < n; i++){
        result.push(i)
    }
    return result 
}

// The time complexity of test1 is O(n) -> because the loop runs n times
// The space complexity is O(n) -> as the result array grows linearly with the input size n

