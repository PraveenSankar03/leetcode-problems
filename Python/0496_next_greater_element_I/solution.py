def next_greater_element(nums1,nums2):
    result = list()
    for num in nums1:
        found_greater = -1
        index = nums2.index(num)
        for i in range(index + 1, len(nums2)):
            if nums2[i] > num:
                found_greater = nums2[i]
                break
        result.append(found_greater)
    return result   

nums1 = [2,4,100,1,7]
nums2 = [234,2,7,45,4,100,32,1,2]
print(next_greater_element(nums1,nums2))