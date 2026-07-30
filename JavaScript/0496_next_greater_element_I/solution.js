function next_greater_element(nums1,nums2) {
    let result = [];
    for (let num of nums1) {
        let found_greater = -1;
        let index = nums2.indexOf(num);
        for (let i = index; i <= nums2.length; i ++) {
            if (nums2[i] > num) {
                found_greater = nums2[i];
                break;
            }
        }
        result.push(found_greater);
    }
    return result;
}

const nums1 = [2,4,100,1,7];
const nums2 = [234,2,7,45,4,100,32,1,2];
console.log(next_greater_element(nums1,nums2));