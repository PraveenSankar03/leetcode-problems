function missing_number(nums) {
    for (let i = 0; i <= nums.length; i ++) {
        if (!nums.includes(i)) {
            return i;
        }
    }
    return null;
}

const nums = [9,6,4,2,3,5,7,0,1];
console.log(missing_number(nums));