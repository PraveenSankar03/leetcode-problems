function find_the_duplicate_number(nums) {
    let count_dict = new Object();
    for (let num of nums) {
        if (Object.keys(count_dict).includes(String(num))) {
            count_dict[num] ++;
        } else {
            count_dict[num] = 1;
        }
    }
    for (let [key,value] of Object.entries(count_dict)) {
        if (value > 1) {
            return key;
        }
    }
    return null;
}

const nums = [3,1,3,4,2];
console.log(find_the_duplicate_number(nums));