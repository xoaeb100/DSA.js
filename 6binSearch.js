function binSearch(arr, no) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let mid = Math.floor((min + max) / 2); //mid =4     //mid=7     //mid =8
        if (arr[mid] === no) {
            return mid;
        } else if (arr[mid] < no) {
            min = mid + 1; //min=5      min=8
        } else {
            max = mid - 1;
        }
    }
    return -1;
}

const result = binSearch([21, 43, 44, 54, 61, 67, 72, 79, 88], 88);
console.log(result, 'hahah');

// time complexity is binary o(log(n))