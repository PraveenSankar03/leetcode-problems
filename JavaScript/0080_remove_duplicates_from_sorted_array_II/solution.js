function remove_duplicates(nums) {
    let check_dict = {};
    for (let num of nums) {
        if (num in check_dict) {
            if (check_dict[num] < 2) {
                check_dict[num] ++;
            }
        } else {
            check_dict[num] = 1;
        }
    }
    let duplicate = [];
    for (let [key,value] of Object.entries(check_dict)) {
        for (let i = 0; i < value; i ++) {
            duplicate.push(key);
        }
    }
    let diff = nums.length - duplicate.length;
    for (let j = 0; j < diff; j ++) {
        duplicate.push(0);
    }
    for (let index = 0; index < nums.length; index ++) {
        nums[index] = duplicate[index];
    }
    return nums.length - diff;
}

nums = [1,1,1,2,2,3];
console.log(remove_duplicates(nums));