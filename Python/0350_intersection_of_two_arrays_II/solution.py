def intersection_of_two_arrays(nums1,nums2):
    result = []
    for num in nums1:
        if num in nums2:
            result.append(num)
            nums2.remove(num)
    return result

nums1 = [4,9,5]
nums2 = [9,4,9,8,4]
print(intersection_of_two_arrays(nums1,nums2))