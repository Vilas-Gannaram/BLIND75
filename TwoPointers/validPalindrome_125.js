function isPalindrome(str) {
    // removing all non-alphanumeric characters from a string and then, lowerCase it.
    str = str.replace(/[^0-9A-Z]+/gi, "").toLowerCase()

    let rStr = str.split('').reverse().join('')
    if (str !== rStr) return false
    else return true
}

// Two Pointers
function isValidPalindrome(s) {
    s = s.replace(/[^0-9A-Z]+/gi, "").toLowerCase()
    let left = 0,
        right = s.length - 1

    while (left <= right) {
        if (s[left] !== s[right]) return false
        else {
            left++
            right--
        }
    }
    return true
}
