//2. sum of pair of 2 consecutive elememnts in array must be 0
// using only one loop to improve time complexity
array = [-5, -4, -3, -2, 0, 2, 4, 6, 8, 9, 10];

function test(array) {
    let left = 0
    let right = array.length - 1
    while (left < right) {
        console.log('left is ', left, 'rightttt is ', right)
        sum = array[left] + array[right]
        if (sum === 0) {
            return [array[left], array[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++
        }


    }
}

const result = test(array)
console.log(result)


//time complexity is o(n) :linear time complexity