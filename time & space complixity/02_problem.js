// What is the time complexity of the function test ? What is its space complexity ?
function test (){
    let sum = 0
    for(let i = 1; i <= n; i ++){
        for(let j =1; j <= i; j++){
            sum += 1
        }
    }
    return sum
}

// The time complexity is O(n^2) -> because the loop run twice (It has two nested loops)
// The space complexity is O(1)  -> The sum variable holds an integer value so there is no additional space used that grows with n.