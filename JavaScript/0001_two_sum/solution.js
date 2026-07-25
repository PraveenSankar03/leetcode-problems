function two_sum(nums,target) {
    let num_map = {};
    for (let [index,num] of nums.entries()) {
        let complement = target - num;
        if (complement in num_map) {
            return [num_map[complement], index];
        }
        num_map[num] = index;
    }
    return [];
}

const nums = [2,7,11,15];
const target = 9;
console.log(two_sum(nums,target));