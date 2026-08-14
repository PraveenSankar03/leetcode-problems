def find_third_max(nums):
    nums = list(set(nums))
    nums.sort()
    if len(nums) >= 3:
        return nums[-3]
    return nums[-1]

nums = [2,2,3,1]
print(find_third_max(nums))