function intersection_of_two_arrays(nums1,nums2) {
    let result = [];
    for (let num of nums1) {
        if (nums2.includes(num)) {
            result.push(num);
            let index = nums2.indexOf(num);
            nums2.splice(index,1);
        }
    }
    return result;
}

const nums1 = [4,9,5];
const nums2 = [9,4,9,8,4];
console.log(intersection_of_two_arrays(nums1,nums2))