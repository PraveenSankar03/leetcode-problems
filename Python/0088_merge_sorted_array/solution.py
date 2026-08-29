def merge_sorted_array(nums1,m,nums2,n):
    result = nums1[:m] + nums2[:n]
    result.sort()
    for index in range(len(result)):
        nums1[index] = result[index]
    return nums1

nums1, m = [1,2,3,0,0,0], 3
nums2, n = [2,5,6], 3
print(merge_sorted_array(nums1,m,nums2,n))