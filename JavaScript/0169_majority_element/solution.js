function majority_element(nums) {
    let num_count = {};
    let len = nums.length;
    for (let num of nums) {
        if (num in num_count) {
            num_count[num] ++;
        } else {
            num_count[num] = 1;
        }
        if (num_count[num] > Math.floor(len / 2)) {
            return num;
        }
    }
    return null;
}

const nums = [2,2,1,1,1,2,2];
console.log(majority_element(nums));