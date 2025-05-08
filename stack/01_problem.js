// Valid Parentheses in an Expression

//Problem description -
/** Given a string s representing an expression containing various types of brackets: {}, (), and [],
 *  the task is to determine whether the brackets in the expression are balanced or not. A balanced 
 *  expression is one where every opening bracket has a corresponding closing bracket in the correct order. */

let str = "[{()}]"
// let s = "{([])}"

function isBalanced(data) {
    let temp = []
    for(let i=0; i < data.length; i++){
        if(data[i]=== '[' || data[i]=== '{' || data[i]=== '('){
            temp.push(data[i])
        }else{
            if(temp.length > 0 && 
                ((temp[temp.length - 1] === '(' && data[i] === ')') ||
                (temp[temp.length - 1] ==='{' && data[i] === '}') ||
                (temp[temp.length - 1] === '[' && data[i] === ']' ))) {
                    temp.pop()
            } else {
                return false
            }
        } 
    }
    return temp.length === 0

}

console.log(isBalanced(str) ? "true" : "false")
