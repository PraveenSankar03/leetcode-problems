function single_number(nums) {
    let num_count = {};
    for (let num of nums) {
        num_count[num] = (num_count[num] || 0) + 1;
    }

    for (let [key,value] of Object.entries(num_count)) {
        if (value == 1) {
            return Number(key);
        }
    }
    return null;
}

const nums = [4,1,2,1,2];
console.log(single_number(nums));