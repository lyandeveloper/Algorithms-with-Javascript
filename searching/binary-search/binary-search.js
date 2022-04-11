const binarySearch = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;
    let mid;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);

        if(target === arr[mid]) {
            return mid;
        } 
        if(target < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return -1;
}

const arr = [10, 20, 30, 50, 60, 80, 110, 130, 140, 170];
const result = binarySearch(arr, 110);

console.log(result === -1 ? `Not found` : `Found at index ${result}`);