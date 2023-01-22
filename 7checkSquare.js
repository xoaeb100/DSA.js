function checkSquare(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let isSquare = false;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] * arr1[i] === arr2[j]) {
                isSquare = true;
            }
        }
        if (!isSquare) {
            return false;
        }
    }
    return true;
}


const result = checkSquare([1, 2, 3, 4, 9], [1, 4, 9, 16, 81])
console.log(result)

//time complexity is o(n^2)