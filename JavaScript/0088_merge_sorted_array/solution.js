function  merge_sorted_array(nums1,m,nums2,n) {
    let result = [...nums1.slice(0,m), ...nums2.slice(0,n)];
    result = result.sort((a,b) => a - b);
    for (let index = 0; index < result.length; index ++) {
        nums1[index] = result[index];
    }
    return nums1;
}

const nums1 = [1,2,3,0,0,0];
const m = 3;
const nums2 = [2,5,6];
const n = 3;
console.log(merge_sorted_array(nums1,m,nums2,n));