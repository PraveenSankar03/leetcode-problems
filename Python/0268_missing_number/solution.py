def missing_number(nums):
    for i in range(len(nums) + 1):
        if i not in nums:
            return i
    return 

nums = [9,6,4,2,3,5,7,0,1]
print(missing_number(nums))