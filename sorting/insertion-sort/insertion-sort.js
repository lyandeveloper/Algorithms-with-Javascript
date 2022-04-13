function insertionSort(arr) { 
    for (var i = 1; i < arr.length; i++) { 
        var j = i; 

        while (j >= 0 && arr[j] < arr[j - 1]){
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp; 
            j--;
        }
    }
}  

function printArray(arr) { 
    let str = ""
    for (var i = 0; i < arr.length; i++) {
        str += arr[i] + " ";
    }

    console.log(str);
}

arr = [4,3,2,10,12,1,5,6]
const result = insertionSort(arr);
printArray(arr); 