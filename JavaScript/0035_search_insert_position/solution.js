function search_insert_position(nums,target) {
    if (!nums.includes(target)) {
        nums.push(target);
    }
    nums = nums.sort((prev, curr) => prev - curr);
    for (let [index,num] of nums.entries()) {
        if (num == target) {
            return index;
        }
    }
}

let nums = [1,3,5,6];
let target = 7;
console.log(search_insert_position(nums,target));