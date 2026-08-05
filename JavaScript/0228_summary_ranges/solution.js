function summary_ranges(nums) {
    let copy = [];
    let check = [];
    for (let num of nums) {
        if (check.length == 0) {
            check.push(num);
        } else {
            if (check[check.length - 1] + 1 != num) {
                copy.push(check);
                check = [];
                check.push(num);
            } else {
                check.push(num);
            }
        }
    }
    copy.push(check);
    let result = [];
    for (let index = 0; index < copy.length; index ++) {
        if (copy[index].length > 1) {
            result.push(`${copy[index][0]}->${copy[index][copy[index].length - 1]}`);
        } else if (copy[index].length === 1) {
            result.push(`${copy[index][0]}`);
        }
    }
    return result;
}

const nums = [0,2,3,4,6,8,9];
console.log(summary_ranges(nums));
