function intersection_of_two_arrays(nums1,num2) {
    let result = new Set();
    if (nums1.length >= nums2.length) {
        for (let num of nums1) {
            if (num2.includes(num)) {
                result.add(num);
            }
        }
    } else {
        for (let num of nums2) {
            if (nums1.includes(num)) {
                result.add(num);
            }
        }
    }
    result = Array.from(result);
    return result;
}

const nums1 = [4,9,5];
const nums2 = [9,4,9,8,4];
console.log(intersection_of_two_arrays(nums1,nums2));