def count_elements(nums):
    result = list()
    for index in range(len(nums)):
        if min(nums) < nums[index] and max(nums) > nums[index]:
            result.append(nums[index])
    return len(result)

nums = [-3,3,3,90]
print(count_elements(nums))