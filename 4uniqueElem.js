//Count no of unique elements in array

function uniqueElem(array) {


    sortedArr = array.sort()
    if (sortedArr.length > 0) {
        i = 0
        for (let j = 1; j < sortedArr.length; j++) {
            if (sortedArr[i] != sortedArr[j]) {
                i++
                sortedArr[i] = sortedArr[j]
            }
        }
        return i + 1
    }

}

const result = uniqueElem([1, 5, 3, 5, 2, 1, 3, 5, 6, 3, 2, 1, 3, 2, 1, 5, 6, 7, 8, 4])
console.log(result)

//linear time complexity o(n)