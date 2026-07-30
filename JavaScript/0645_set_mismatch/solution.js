function find_error_nums(nums) {
    let num_count = {};
    for (let num of nums) {
        if (num in num_count) {
            num_count[num] ++;
        } else {
            num_count[num] = 1;
        }
    }
    let result = [];
    for (let [key,value] of Object.entries(num_count)) {
        if (value > 1) {
            result.push(key);
        }
    }
    for (let i = 1; i <= nums.length; i ++) {
        if (!nums.includes(i)) {
            result.push(i);
        }
    }
    return result;
}

const nums = [1,2,2,4];
console.log(find_error_nums(nums));