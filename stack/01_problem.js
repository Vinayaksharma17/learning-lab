let str = "[{()}]"
// let s = "{([])}"

function isBalanced(data) {
    let temp = []
    for(let i=0; i < data.length; i++){
        if(data[i]=== '[' || data[i]=== '{' || data[i]=== '('){
            temp.push(data[i])
            console.log(temp)
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
