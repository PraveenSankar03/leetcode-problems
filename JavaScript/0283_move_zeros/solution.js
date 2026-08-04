function move_zeros(nums) {
    let replica = [];
    for (let num of nums) {
        if (num != 0) {
            replica.push(num);
        }
    }
    const count = nums.length - replica.length;
    for (let i = 1; i <= count; i ++) {
        replica.push(0)
    }
    for (let i = 0; i < nums.length; i ++) {
        nums[i] = replica[i];
    }
    return nums;
}

const nums = [0,1,0,3,12];
console.log(move_zeros(nums));