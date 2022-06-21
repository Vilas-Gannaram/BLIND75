let nums = [1, 5, 14, 7, 21, 2, 1]

//  Brute Force Solution:--
//  Time Complexity: O(nlogn),   Space Complexity: O(1)

let compareByNums = (a, b) => a - b

function containsDuplicate(array) {
    //  Sorting array
    array = array.sort(compareByNums)
    // Looping through the array and if the current element and its next element is equal then return true, else false.
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === array[i + 1]) return true
    }
    return false
}


//  Hash Map:--

//  Steps:  Iterate through the array nums and if the element is not in the hash, we add it in. If its already in the hash, that makes it a repeated element and we need to return true.

function containsDuplicate(array) {
    let hash = {}

    for (let i = 0; i < array.length; i++) {
        if (!hash[array[i]]) hash[array[i]] = true
        else return true
    }
    return false
}

// console.log(containsDuplicate(nums))