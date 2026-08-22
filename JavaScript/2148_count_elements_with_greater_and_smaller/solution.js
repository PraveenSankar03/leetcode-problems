function count_elements(nums) {
    let result = new Array();
    for (let index = 0; index < nums.length; index ++) {
        if (Math.min(...nums) < nums[index] && Math.max(...nums) > nums[index]) {
            result.push(nums[index]);
        }
    }
    return result.length;
}

const nums = [-3,3,3,90];
console.log(count_elements(nums));