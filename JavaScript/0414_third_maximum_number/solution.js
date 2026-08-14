function find_third_max(nums) {
    nums = [...new Set(nums)];
    nums.sort();
    if (nums.length >= 3) {
        return nums[nums.length - 3];
    }
    return nums[nums.length - 1];
}

const nums = [2,2,3,1];
console.log(find_third_max(nums));