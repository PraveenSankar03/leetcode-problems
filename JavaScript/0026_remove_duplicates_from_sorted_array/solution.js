function remove_duplicates(nums) {
    let replica = [];
    for (let num of nums) {
        if (!replica.includes(num)) {
            replica.push(num);
        }
    }
    let count = nums.length - replica.length;
    for (let i = 1; i <= count; i ++) {
        replica.push("");
    }
    for (let i = 0; i < replica.length; i ++) {
        nums[i] = replica[i];
    }
    let final = [];
    for (let num of nums) {
        if (num !== "") {
            final.push(num);
        }
    }
    return final.length;
}

const nums = [0,0,1,1,1,2,2,3,3,4];
console.log(remove_duplicates(nums));