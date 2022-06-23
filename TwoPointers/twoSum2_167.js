function twoSum(array, target) {
    let left = 0,
        right = array.length - 1;
    while (left < right) {
        if (array[left] + array[right] > target) right--
        else if (array[left] + array[right] < target) left++
        else return [left + 1, right + 1]
    }
}

twoSum([2,7,11,15], 9)