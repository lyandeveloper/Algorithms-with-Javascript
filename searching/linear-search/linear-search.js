const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }  
    }

    return -1;
}

const arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
const result = linearSearch(arr, 110);

console.log(result === -1 ? `Not found` : `Found at index ${result}`);