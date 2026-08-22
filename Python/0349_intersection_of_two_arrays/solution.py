def intersection_of_two_arrays(nums1,nums2):
    result = list()
    if len(nums1) >= len(nums2):
        for num in nums1:
            if num in nums2:
                result.append(num)
    else:
        for num in nums2:
            if num in nums1:
                result.append(num)
    result = list(set(result))
    return result
            
nums1 = [4,9,5]
nums2 = [9,4,9,8,4]
print(intersection_of_two_arrays(nums1,nums2))