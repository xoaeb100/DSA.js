function checkAnagram(string1, string2) {
    if (string1.length != string2.length) {
        return false
    }
    counter = {}
    for (let letter of string1) { //el in string1 returns 1,2,3 ,, el of string1 returns c,a,r
        counter[letter] = (counter[letter] || 0) + 1
        //It then iterates over each letter in the first string and uses the letter as a key in the counter object
        // and assigns it a value of 0 (or increments it if it already exists)
    }
    console.log(counter)
    for (let item of string2) {
        if (!counter[item]) {
            return false
        }
        counter[item] -= 1
    }
    console.log(counter)
    return true
}
const result = checkAnagram('carrrr', 'rcrarr')
console.log(result)

//linear time complexity o(n)