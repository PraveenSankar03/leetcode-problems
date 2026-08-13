function single_number(nums) {
    let num_count = {};
    for (let num of nums) {
        if (num in num_count) {
            num_count[num] ++;
        } else {
            num_count[num] = 1;
        }
    }
    for (let [key,value] of Object.entries(num_count)) {
        if (value == 1) {
            return key;
        }
    }
    return null;
}

const nums = [0,1,0,1,0,1,99];
console.log(single_number(nums));