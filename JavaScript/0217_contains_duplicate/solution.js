function contains_dupliactes(nums) {
    let copy = new Set(nums);
    if (nums.length == copy.size) {
        return 'No duplicates'
    }
    return 'Has duplicates'
}

const nums = [1,2,3];
console.log(contains_dupliactes(nums));