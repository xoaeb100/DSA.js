//1. sum of pair of 2 consecutive elememnts in array must be 0
array = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

function test(array) {
    for (let el of array) {
        console.log('outer loop', el)

        for (let j = 1; j < array.length; j++) {
            console.log('inner loop', array[j])

            if (el + array[j] === 0) {
                return [el, array[j]];
            }
        }

    }
}
console.log(test(array))

//time complexity is o(n^2) : quadratic