def majority_element(nums):
    num_count = {}
    length = len(nums)
    for num in nums:
        num_count[num] = num_count.get(num , 0) + 1
        if num_count[num] > length // 2:
            return num
    return None

nums = [2,2,1,1,1,2,2]
print(majority_element(nums))