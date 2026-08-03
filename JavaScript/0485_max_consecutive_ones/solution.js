function max_consecutive_ones(nums) {
    let result = "";
    for (let num of nums) {
        if (num == 1) {
            result += num;
        } else {
            result += " ";
        }
    }
    result = result.split(" ");
    return Math.max(...result).toString().length;
}

let nums = [1,1,0,1,1,1];
console.log(max_consecutive_ones(nums));