// traditional method
function linearSearch (arr: any[], index: any) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 5){
            return console.log(`Found the element in the array at position: ${arr[i]} and the value is: ${index}`)
        }
    }
    return - 1
}

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8]
// linearSearch(myArray, 5)

// another method

const linearSearch1 = (arr: any[], index: any) => {
    for(const i in arr) {
        if (arr[i] === index) {
            return console.log(`Found the element in the array at position: ${arr[i]} and the value is: ${index}`)
        }
    }
    return - 1
}

const myArray1 = [1, 2, 3, 4, 5, 6, 7, 8]
linearSearch1(myArray1, 4)

// Linear search on objects

function linearSearchObject (arr: any[], targetValue: string, property: string) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i][property] === targetValue) {
            return console.log("This name is present in the list")
        }
    }
    return console.log("name is not present in the list")
}

const users = [
    {
        "name": "vinayak",
        "age": "25"
    },
    {
        "name": "huli",
        "age": "27"
    }, {
        "name": "naryaa",
        "age": "24"
    }, {
        "name": "abyaa",
        "age": "23"
    }
]
linearSearchObject(users, 'test', 'name')