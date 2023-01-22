function checkSquare(arr1, arr2) {

    map1 = {}
    map2 = {}
    for (let el1 of arr1) {
        map1[el1] = (map1[el1] || 0) + 1

    }
    for (let el2 of arr2) {
        map2[el2] = (map2[el2] || 0) + 1

    }


    for (let key in map1) {
        if (!map2[key * key]) {
            return false
        }
        if (map1[key] !== map2[key * key]) {
            return false
        }
    }
    return true

}


const result = checkSquare([1, 2, 3, 4, 9], [1, 4, 9, 16, 81])
console.log(result)

// time conplexity if o(n) linear