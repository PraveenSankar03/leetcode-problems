function find_single_number(nums) {
    let refer_dict = new Object();
    for (let num of nums) {
        if (!(num in refer_dict)) {
            refer_dict[num] = 1
        } else if (num in refer_dict) {
            refer_dict[num] ++;
        }
    }
    let unique = new Array();
    for (let [key,value] of Object.entries(refer_dict)) {
        if (value == 1) {
            unique.push(key);
        }
    }
    return unique;
}

const nums = [1,2,1,3,2,5];
console.log(find_single_number(nums));