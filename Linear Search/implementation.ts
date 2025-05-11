// Linear Search implementation with TypeScript types

// Generic linear search function
function linearSearch<T>(arr: T[], targetValue: T): number {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === targetValue) {
            return i; // Return the index where element was found
        }
    }
    return -1; // Element not found
}

// Object type definition for the user objects
interface User {
    name: string;
    age: string;
}

// Linear search for objects with specified property
function linearSearchObject<T, K extends keyof T>(
    arr: T[], 
    targetValue: T[K], 
    property: K
): number {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i][property] === targetValue) {
            return i; // Return the index where element was found
        }
    }
    return -1; // Element not found
}

// Example usage
const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
const foundIndex = linearSearch(myArray, 5);
console.log(`Element found at index: ${foundIndex}`);

const users: User[] = [
    {
        "name": "vinayak",
        "age": "25"
    },
    {
        "name": "huli",
        "age": "27"
    }, 
    {
        "name": "naryaa",
        "age": "24"
    }, 
    {
        "name": "abyaa",
        "age": "23"
    }
];

const userIndex = linearSearchObject(users, 'huli', 'name');
console.log(userIndex >= 0 ? "User found in the list" : "User not found");