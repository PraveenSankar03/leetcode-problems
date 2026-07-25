def twoSum(nums, target):
    num_map = {}
    for index, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], index]
        num_map[num] = index  
    return [] 

nums = [2,7,11,15]
target = 9
print(twoSum(nums,target))